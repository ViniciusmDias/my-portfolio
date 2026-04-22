import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IntlBadge } from './intl-badge';
import { LocaleSwitcher } from './locale-switcher';
import { NavLinks } from './nav-links';
import { ThemeToggle } from './theme-toggle';

export async function Header() {
  const locale = await getLocale();
  const t = await getTranslations('hero');

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)] bg-[color:var(--color-background)]/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-6">
          <Link
            href={`/${locale}`}
            className="font-mono text-sm font-semibold tracking-tight whitespace-nowrap"
          >
            vinicius<span className="text-[color:var(--color-primary)]">.dev</span>
          </Link>
          <NavLinks />
        </div>

        <IntlBadge />

        <div className="flex shrink-0 items-center gap-1.5">
          <Button variant="outline" size="sm" asChild>
            <a
              href={`/resume.${locale}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-1.5"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t('cta')}</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <a href="https://github.com/ViniciusmDias" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
            <a
              href="https://www.linkedin.com/in/vinicius-mdias/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
