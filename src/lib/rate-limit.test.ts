import { describe, expect, it } from 'vitest';

import { getClientIp } from './rate-limit';

function buildReq(headers: Record<string, string>): Request {
  return new Request('http://localhost/api/chat', { headers });
}

describe('getClientIp', () => {
  it('prefers x-nf-client-connection-ip on Netlify', () => {
    const ip = getClientIp(
      buildReq({
        'x-nf-client-connection-ip': '203.0.113.9',
        'x-forwarded-for': '10.0.0.1',
      }),
    );
    expect(ip).toBe('203.0.113.9');
  });

  it('falls back to cf-connecting-ip, then x-real-ip', () => {
    expect(
      getClientIp(buildReq({ 'cf-connecting-ip': '198.51.100.7', 'x-forwarded-for': '10.0.0.1' })),
    ).toBe('198.51.100.7');
    expect(getClientIp(buildReq({ 'x-real-ip': '192.0.2.10' }))).toBe('192.0.2.10');
  });

  it('uses the first entry of x-forwarded-for', () => {
    expect(getClientIp(buildReq({ 'x-forwarded-for': '203.0.113.5, 10.0.0.1, 10.0.0.2' }))).toBe(
      '203.0.113.5',
    );
  });

  it('defaults to 0.0.0.0 when no header present', () => {
    expect(getClientIp(buildReq({}))).toBe('0.0.0.0');
  });
});
