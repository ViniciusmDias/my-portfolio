import { getTranslations } from 'next-intl/server';
import { Clock, Globe2 } from 'lucide-react';

export async function IntlBadge() {
  const t = await getTranslations('intl');
  return (
    <div className="hidden items-center gap-3 font-mono text-xs whitespace-nowrap text-[color:var(--color-muted-foreground)] xl:flex">
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5 shrink-0" />
        {t('timezone')}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="relative inline-flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-primary)] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-primary)]" />
        </span>
        <Globe2 className="h-3.5 w-3.5 shrink-0" />
        {t('available')}
      </span>
    </div>
  );
}
