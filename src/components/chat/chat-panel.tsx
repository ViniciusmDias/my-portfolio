'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, Send, Square, User, RotateCcw } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { useChatStream } from '@/hooks/use-chat-stream';

import { CopyButton } from './copy-button';
import { MessageMarkdown } from './message-markdown';

type Props = { locale: 'en' | 'pt'; enabled: boolean };

export function ChatPanel({ locale, enabled }: Props) {
  const t = useTranslations('chat');
  const suggestions = t.raw('suggestions') as string[];
  const { messages, status, errorMessage, send, stop, reset } = useChatStream({ locale });
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  const isStreaming = status === 'streaming';
  const isRateLimited = status === 'ratelimited';
  const isError = status === 'error';
  const inputLocked = !enabled || isRateLimited;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!enabled || !input.trim() || isStreaming) return;
    send({ input, history: messages });
    setInput('');
  }

  function handleSuggestion(q: string) {
    if (!enabled || isStreaming) return;
    send({ input: q, history: messages });
  }

  return (
    <div className="flex min-h-[28rem] w-full min-w-0 flex-col">
      <div
        ref={scrollRef}
        className="w-full min-w-0 flex-1 space-y-4 overflow-x-hidden overflow-y-auto p-6"
      >
        <div className="flex items-start gap-3">
          <Avatar role="assistant" />
          <div className="rounded-lg rounded-tl-none bg-[color:var(--color-muted)] px-4 py-3 text-sm">
            {t('greeting')}
          </div>
        </div>

        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2 pl-11">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => handleSuggestion(s)}
                disabled={inputLocked}
                className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-3 py-1 text-xs text-[color:var(--color-muted-foreground)] transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-[color:var(--color-border)] disabled:hover:text-[color:var(--color-muted-foreground)]"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {!enabled && <StatusNote tone="warn">{t('disabled')}</StatusNote>}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex min-w-0 items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <Avatar role={m.role} />
            <div
              className={`group max-w-[85%] min-w-0 overflow-hidden rounded-lg px-4 py-3 text-sm [overflow-wrap:anywhere] ${
                m.role === 'user'
                  ? 'rounded-tr-none bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]'
                  : 'rounded-tl-none bg-[color:var(--color-muted)]'
              }`}
            >
              {m.role === 'assistant' ? (
                <>
                  {m.content.length > 0 ? (
                    <MessageMarkdown content={m.content} />
                  ) : (
                    <ThinkingDots label={t('thinking')} />
                  )}
                  {m.content.length > 0 && !isStreaming && (
                    <div className="mt-2 flex justify-end">
                      <CopyButton text={m.content} />
                    </div>
                  )}
                </>
              ) : (
                <p className="break-words whitespace-pre-wrap">{m.content}</p>
              )}
            </div>
          </div>
        ))}

        {isRateLimited && <StatusNote tone="warn">{t('rateLimited')}</StatusNote>}
        {isError && (
          <StatusNote tone="error">
            {t('error')}
            {errorMessage ? ` — ${errorMessage}` : ''}
          </StatusNote>
        )}
      </div>

      <div className="border-t border-[color:var(--color-border)] p-4">
        <form className="flex min-w-0 items-center gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={enabled ? t('placeholder') : t('disabled')}
            disabled={inputLocked}
            className="min-w-0 flex-1 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[color:var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60"
          />
          {isStreaming ? (
            <button
              type="button"
              onClick={stop}
              aria-label={t('stop')}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--color-muted)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-border)]"
            >
              <Square className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim() || inputLocked}
              aria-label={t('send')}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          )}
          {messages.length > 0 && !isStreaming && (
            <button
              type="button"
              onClick={reset}
              aria-label={t('retry')}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--color-border)] text-[color:var(--color-muted-foreground)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

function Avatar({ role }: { role: 'user' | 'assistant' }) {
  const isUser = role === 'user';
  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
        isUser ? 'bg-[color:var(--color-primary)]/10' : 'bg-[color:var(--color-primary)]/10'
      }`}
    >
      {isUser ? (
        <User className="h-4 w-4 text-[color:var(--color-primary)]" />
      ) : (
        <Bot className="h-4 w-4 text-[color:var(--color-primary)]" />
      )}
    </div>
  );
}

function ThinkingDots({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[color:var(--color-muted-foreground)]">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:0.15s]" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:0.3s]" />
      <span className="sr-only">{label}</span>
    </span>
  );
}

function StatusNote({ tone, children }: { tone: 'warn' | 'error'; children: React.ReactNode }) {
  const toneClass =
    tone === 'error'
      ? 'border-red-500/40 bg-red-500/5 text-red-500'
      : 'border-yellow-500/40 bg-yellow-500/5 text-yellow-600';
  return <div className={`rounded-md border px-3 py-2 text-xs ${toneClass}`}>{children}</div>;
}
