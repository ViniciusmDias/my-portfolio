'use client';

import { useTranslations } from 'next-intl';
import { Sparkles, Send } from 'lucide-react';

const suggestionsByLocale = {
  en: [
    'What are his strongest technical skills?',
    'Tell me about the V4 Company role',
    'Is he open to relocation?',
  ],
  pt: [
    'Quais são as habilidades técnicas mais fortes dele?',
    'Fale sobre o trabalho na V4 Company',
    'Ele está aberto a mudança?',
  ],
} as const;

export function ChatPlaceholder({ locale }: { locale: string }) {
  const t = useTranslations('chat');
  const suggestions = suggestionsByLocale[locale as 'en' | 'pt'] ?? suggestionsByLocale.en;

  return (
    <div className="flex min-h-[28rem] flex-col">
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)]/10">
            <Sparkles className="h-4 w-4 text-[color:var(--color-primary)]" />
          </div>
          <div className="rounded-lg rounded-tl-none bg-[color:var(--color-muted)] px-4 py-3 text-sm">
            {locale === 'pt'
              ? 'Olá! Sou um assistente treinado no currículo do Vinicius. Pergunte sobre experiência, stack ou disponibilidade.'
              : "Hi! I'm an assistant trained on Vinicius's resume. Ask about experience, stack, or availability."}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pl-11">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              disabled
              className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-3 py-1 text-xs text-[color:var(--color-muted-foreground)] transition-colors hover:border-[color:var(--color-primary)] disabled:opacity-70"
              title="Chat backend ships in phase 5"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[color:var(--color-border)] p-4">
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder={t('placeholder')}
            disabled
            className="flex-1 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-3 py-2 text-sm outline-none focus:border-[color:var(--color-primary)] disabled:opacity-60"
          />
          <button
            type="submit"
            disabled
            aria-label={t('send')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
        <div className="mt-2 font-mono text-[10px] text-[color:var(--color-muted-foreground)]">
          {'// '}
          {t('disabled')} {'('}phase 5{')'}
        </div>
      </div>
    </div>
  );
}
