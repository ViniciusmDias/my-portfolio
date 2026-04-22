import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

import { serverEnv } from '@/config/env';

export const CHAT_LIMIT_COUNT = 15;
export const CHAT_LIMIT_WINDOW = '24 h' as const;

type LimiterResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

let chatLimiter: Ratelimit | null = null;

function getLimiter(): Ratelimit | null {
  if (chatLimiter) return chatLimiter;
  const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = serverEnv;
  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) return null;

  const redis = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN,
  });

  chatLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(CHAT_LIMIT_COUNT, CHAT_LIMIT_WINDOW),
    prefix: 'chat:ip',
    analytics: false,
  });

  return chatLimiter;
}

export function getClientIp(req: Request): string {
  const h = req.headers;
  const candidates = [
    h.get('x-nf-client-connection-ip'),
    h.get('cf-connecting-ip'),
    h.get('x-real-ip'),
    h.get('x-forwarded-for')?.split(',')[0]?.trim(),
  ];
  for (const ip of candidates) {
    if (ip && ip.length > 0) return ip;
  }
  return '0.0.0.0';
}

export async function checkChatLimit(ip: string): Promise<LimiterResult | null> {
  const limiter = getLimiter();
  if (!limiter) return null;
  const { success, limit, remaining, reset } = await limiter.limit(ip);
  return { success, limit, remaining, reset };
}
