'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const items = [
  { href: '/', key: 'home' },
  { href: '/projects', key: 'projects' },
  { href: '/experience', key: 'experience' },
  { href: '/contact', key: 'contact' },
] as const;

export function NavLinks() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <nav className="hidden items-center gap-4 font-mono text-xs lg:flex">
      {items.map((i) => {
        const active = i.href === '/' ? pathname === '/' : pathname.startsWith(i.href);
        return (
          <Link
            key={i.href}
            href={i.href}
            locale={locale as 'en' | 'pt'}
            className={cn(
              'transition-colors',
              active
                ? 'text-[color:var(--color-foreground)]'
                : 'text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)]',
            )}
          >
            {t(i.key)}
          </Link>
        );
      })}
    </nav>
  );
}
