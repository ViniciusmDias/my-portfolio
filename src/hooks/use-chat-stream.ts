'use client';

import { useCallback, useRef, useState } from 'react';

export type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export type ChatStatus = 'idle' | 'streaming' | 'error' | 'ratelimited';

type Options = {
  locale: 'en' | 'pt';
  endpoint?: string;
};

type SendArgs = {
  input: string;
  history: ChatMessage[];
};

export function useChatStream({ locale, endpoint = '/api/chat' }: Options) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<ChatStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([]);
    setStatus('idle');
    setErrorMessage(null);
  }, []);

  const stop = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setStatus('idle');
  }, []);

  const send = useCallback(
    async ({ input, history }: SendArgs) => {
      const trimmed = input.trim();
      if (!trimmed || status === 'streaming') return;

      const userMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content: trimmed,
      };
      const assistantId = crypto.randomUUID();
      const assistantMsg: ChatMessage = { id: assistantId, role: 'assistant', content: '' };

      const outgoing = [...history, userMsg];
      setMessages([...outgoing, assistantMsg]);
      setStatus('streaming');
      setErrorMessage(null);

      const ac = new AbortController();
      abortRef.current = ac;

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            locale,
            messages: outgoing.map((m) => ({ role: m.role, content: m.content })),
          }),
          signal: ac.signal,
        });

        if (res.status === 429) {
          setStatus('ratelimited');
          setMessages((prev) => prev.filter((m) => m.id !== assistantId));
          return;
        }
        if (!res.ok || !res.body) {
          throw new Error(`HTTP ${res.status}`);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let acc = '';

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          let sep: number;
          while ((sep = buffer.indexOf('\n\n')) !== -1) {
            const raw = buffer.slice(0, sep);
            buffer = buffer.slice(sep + 2);
            const parsed = parseSseBlock(raw);
            if (!parsed) continue;
            if (parsed.event === 'token' && typeof parsed.data?.text === 'string') {
              acc += parsed.data.text;
              const snapshot = acc;
              setMessages((prev) =>
                prev.map((m) => (m.id === assistantId ? { ...m, content: snapshot } : m)),
              );
            } else if (parsed.event === 'error') {
              throw new Error(String(parsed.data?.error ?? 'stream error'));
            }
          }
        }

        setStatus('idle');
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
        setStatus('error');
        setErrorMessage((err as Error).message);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId && m.content.length === 0 ? { ...m, content: '' } : m,
          ),
        );
      } finally {
        abortRef.current = null;
      }
    },
    [endpoint, locale, status],
  );

  return { messages, status, errorMessage, send, stop, reset };
}

function parseSseBlock(raw: string): { event: string; data: Record<string, unknown> } | null {
  const lines = raw.split('\n');
  let event = 'message';
  let dataStr = '';
  for (const line of lines) {
    if (line.startsWith('event:')) event = line.slice(6).trim();
    else if (line.startsWith('data:')) dataStr += line.slice(5).trim();
  }
  if (!dataStr) return null;
  try {
    return { event, data: JSON.parse(dataStr) as Record<string, unknown> };
  } catch {
    return null;
  }
}
