import { Clock, Github, Globe2, Linkedin, Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('intl');
  return (
    <footer className="border-t border-[color:var(--color-border)] py-8 font-mono text-xs text-[color:var(--color-muted-foreground)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <span>
          {'// '}© {new Date().getFullYear()} Vinicius Dias · built with Next.js
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {t('timezone')}
          </span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span className="relative inline-flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-primary)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-primary)]" />
            </span>
            <Globe2 className="h-3.5 w-3.5 shrink-0" />
            {t('available')}
          </span>
          <a
            href="https://github.com/ViniciusmDias"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[color:var(--color-foreground)]"
          >
            <Github className="h-3.5 w-3.5" /> github
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-mdias/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[color:var(--color-foreground)]"
          >
            <Linkedin className="h-3.5 w-3.5" /> linkedin
          </a>
          <a
            href="mailto:vinicius-mdias@hotmail.com"
            className="inline-flex items-center gap-1 hover:text-[color:var(--color-foreground)]"
          >
            <Mail className="h-3.5 w-3.5" /> email
          </a>
        </div>
      </div>
    </footer>
  );
}
