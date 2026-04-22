import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] py-8 font-mono text-xs text-[color:var(--color-muted-foreground)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <span>
          {'// '}© {new Date().getFullYear()} Vinicius Dias · built with Next.js + Claude
        </span>
        <div className="flex items-center gap-4">
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
