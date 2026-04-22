import { NextResponse } from 'next/server';
import { z } from 'zod';

import { serverEnv } from '@/config/env';
import {
  anthropic,
  buildSystemPrompt,
  MAX_HISTORY_TURNS,
  MAX_OUTPUT_TOKENS,
  MODEL,
  type ChatLocale,
} from '@/lib/anthropic';
import { checkChatLimit, getClientIp } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const bodySchema = z.object({
  locale: z.enum(['en', 'pt']),
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().min(1).max(2000),
      }),
    )
    .min(1)
    .max(16),
});

export async function POST(req: Request) {
  if (!serverEnv.CHAT_ENABLED) {
    return NextResponse.json({ error: 'Chat is currently disabled.' }, { status: 503 });
  }

  if (!serverEnv.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'Chat is not configured.' }, { status: 503 });
  }

  const ip = getClientIp(req);
  const limit = await checkChatLimit(ip);
  if (limit && !limit.success) {
    const retryAfter = Math.max(0, Math.ceil((limit.reset - Date.now()) / 1000));
    return NextResponse.json(
      { error: 'Daily message limit reached. Try again later.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(retryAfter),
          'X-RateLimit-Limit': String(limit.limit),
          'X-RateLimit-Remaining': String(limit.remaining),
          'X-RateLimit-Reset': String(limit.reset),
        },
      },
    );
  }

  let payload: z.infer<typeof bodySchema>;
  try {
    const json = await req.json();
    payload = bodySchema.parse(json);
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const locale = payload.locale as ChatLocale;
  let trimmed = payload.messages.slice(-MAX_HISTORY_TURNS * 2);
  if (trimmed[0]?.role === 'assistant') {
    trimmed = trimmed.slice(1);
  }
  if (trimmed[0]?.role !== 'user') {
    return NextResponse.json({ error: 'First message must be from user.' }, { status: 400 });
  }

  const systemText = await buildSystemPrompt(locale);

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const encoder = new TextEncoder();
      const send = (event: string, data: unknown) => {
        controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      };

      try {
        const response = anthropic.messages.stream({
          model: MODEL,
          max_tokens: MAX_OUTPUT_TOKENS,
          system: [
            {
              type: 'text',
              text: systemText,
              cache_control: { type: 'ephemeral' },
            },
          ],
          messages: trimmed.map((m) => ({ role: m.role, content: m.content })),
        });

        for await (const event of response) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta' &&
            event.delta.text
          ) {
            send('token', { text: event.delta.text });
          }
        }

        const final = await response.finalMessage();
        send('done', {
          stopReason: final.stop_reason,
          usage: final.usage,
        });
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Stream error';
        send('error', { error: message });
      } finally {
        controller.close();
      }
    },
  });

  const headers: Record<string, string> = {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no',
  };
  if (limit) {
    headers['X-RateLimit-Limit'] = String(limit.limit);
    headers['X-RateLimit-Remaining'] = String(limit.remaining);
    headers['X-RateLimit-Reset'] = String(limit.reset);
  }

  return new Response(stream, { headers });
}
