'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="inline-flex items-center gap-1 font-mono text-xs">
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          className={cn(
            'rounded px-1.5 py-0.5 uppercase transition-colors',
            l === locale
              ? 'bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]'
              : 'text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)]',
          )}
          aria-label={`Switch to ${l}`}
          aria-current={l === locale ? 'true' : undefined}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
