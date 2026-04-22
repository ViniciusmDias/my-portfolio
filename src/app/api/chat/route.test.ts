import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/config/env', () => ({
  serverEnv: {
    ANTHROPIC_API_KEY: 'sk-test',
    UPSTASH_REDIS_REST_URL: 'https://example.upstash.io',
    UPSTASH_REDIS_REST_TOKEN: 'token',
    CHAT_ENABLED: true,
    GITHUB_USERNAME: 'ViniciusmDias',
  },
}));

vi.mock('@/lib/rate-limit', () => ({
  getClientIp: () => '203.0.113.9',
  checkChatLimit: vi.fn(),
}));

vi.mock('@/lib/anthropic', () => ({
  MODEL: 'claude-haiku-4-5-20251001',
  MAX_OUTPUT_TOKENS: 512,
  MAX_HISTORY_TURNS: 4,
  buildSystemPrompt: vi.fn(async () => 'system'),
  anthropic: { messages: { stream: vi.fn() } },
}));

import { POST } from './route';
import { checkChatLimit } from '@/lib/rate-limit';

const mockedCheckChatLimit = vi.mocked(checkChatLimit);

function buildReq(body: unknown): Request {
  return new Request('http://localhost/api/chat', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/chat — abuse protection', () => {
  beforeEach(() => {
    mockedCheckChatLimit.mockReset();
  });

  it('returns 429 with Retry-After + rate limit headers when limit exceeded', async () => {
    const reset = Date.now() + 3_600_000;
    mockedCheckChatLimit.mockResolvedValueOnce({
      success: false,
      limit: 10,
      remaining: 0,
      reset,
    });

    const res = await POST(buildReq({ locale: 'en', messages: [{ role: 'user', content: 'hi' }] }));

    expect(res.status).toBe(429);
    expect(res.headers.get('X-RateLimit-Limit')).toBe('10');
    expect(res.headers.get('X-RateLimit-Remaining')).toBe('0');
    expect(res.headers.get('X-RateLimit-Reset')).toBe(String(reset));
    expect(Number(res.headers.get('Retry-After'))).toBeGreaterThan(0);
  });

  it('rejects invalid body with 400', async () => {
    mockedCheckChatLimit.mockResolvedValueOnce({
      success: true,
      limit: 10,
      remaining: 9,
      reset: Date.now() + 1_000,
    });

    const res = await POST(buildReq({ locale: 'fr', messages: [] }));
    expect(res.status).toBe(400);
  });

  it('rejects when first message is not from user (400)', async () => {
    mockedCheckChatLimit.mockResolvedValueOnce({
      success: true,
      limit: 10,
      remaining: 9,
      reset: Date.now() + 1_000,
    });

    const res = await POST(
      buildReq({ locale: 'en', messages: [{ role: 'assistant', content: 'hi' }] }),
    );
    expect(res.status).toBe(400);
  });
});
