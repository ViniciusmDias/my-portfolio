/** @vitest-environment jsdom */
import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useChatStream } from './use-chat-stream';

function sseChunk(event: string, data: unknown): string {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

function streamFromStrings(chunks: string[]): ReadableStream<Uint8Array> {
  const enc = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      for (const c of chunks) controller.enqueue(enc.encode(c));
      controller.close();
    },
  });
}

describe('useChatStream', () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('assembles streamed tokens into assistant message', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response(
        streamFromStrings([
          sseChunk('token', { text: 'Hel' }),
          sseChunk('token', { text: 'lo ' }),
          sseChunk('token', { text: 'world' }),
          sseChunk('done', { stopReason: 'end_turn' }),
        ]),
        { status: 200, headers: { 'content-type': 'text/event-stream' } },
      ),
    );

    const { result } = renderHook(() => useChatStream({ locale: 'en' }));

    await act(async () => {
      await result.current.send({ input: 'hi', history: [] });
    });

    await waitFor(() => expect(result.current.status).toBe('idle'));
    expect(result.current.messages).toHaveLength(2);
    expect(result.current.messages[0]?.role).toBe('user');
    expect(result.current.messages[0]?.content).toBe('hi');
    expect(result.current.messages[1]?.role).toBe('assistant');
    expect(result.current.messages[1]?.content).toBe('Hello world');
  });

  it('sets status=ratelimited on 429 and drops placeholder assistant message', async () => {
    fetchMock.mockResolvedValueOnce(new Response(null, { status: 429 }));

    const { result } = renderHook(() => useChatStream({ locale: 'en' }));

    await act(async () => {
      await result.current.send({ input: 'hi', history: [] });
    });

    await waitFor(() => expect(result.current.status).toBe('ratelimited'));
    expect(result.current.messages).toHaveLength(1);
    expect(result.current.messages[0]?.role).toBe('user');
  });

  it('surfaces server error event as status=error', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response(streamFromStrings([sseChunk('error', { error: 'boom' })]), { status: 200 }),
    );

    const { result } = renderHook(() => useChatStream({ locale: 'en' }));

    await act(async () => {
      await result.current.send({ input: 'hi', history: [] });
    });

    await waitFor(() => expect(result.current.status).toBe('error'));
    expect(result.current.errorMessage).toBe('boom');
  });
});
