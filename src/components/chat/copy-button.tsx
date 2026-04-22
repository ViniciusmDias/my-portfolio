'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CopyButton({ text }: { text: string }) {
  const t = useTranslations('chat');
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // silent — permission denied
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? t('copied') : t('copy')}
      className="inline-flex h-6 items-center gap-1 rounded border border-[color:var(--color-border)] px-2 font-mono text-[10px] text-[color:var(--color-muted-foreground)] transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? t('copied') : t('copy')}
    </button>
  );
}
