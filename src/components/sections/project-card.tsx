import { ExternalLink, Github, Star } from 'lucide-react';
import type { Project } from '@/content/projects';
import type { RepoStats } from '@/lib/github';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  project: Project;
  stats: RepoStats | null;
  locale: string;
  className?: string;
};

export function ProjectCard({ project, stats, locale, className }: ProjectCardProps) {
  const description = project.description[locale as 'en' | 'pt'] ?? project.description.en;

  return (
    <article
      className={cn(
        'group relative flex flex-col gap-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-5 transition-all hover:border-[color:var(--color-primary)]',
        className,
      )}
    >
      <header className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-mono text-base font-semibold">{project.name}</h3>
          <p className="text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
            {description}
          </p>
        </div>
        {stats && stats.stars > 0 && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-muted)] px-2 py-0.5 font-mono text-xs">
            <Star className="h-3 w-3 fill-current text-[color:var(--color-primary)]" />
            {stats.stars}
          </span>
        )}
      </header>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-2 py-0.5 font-mono text-[10px] tracking-wide text-[color:var(--color-muted-foreground)] uppercase"
          >
            {t}
          </span>
        ))}
      </div>

      <footer className="mt-auto flex items-center gap-3 pt-2 font-mono text-xs">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[color:var(--color-muted-foreground)] transition-colors hover:text-[color:var(--color-foreground)]"
        >
          <Github className="h-3.5 w-3.5" />
          repo
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[color:var(--color-primary)] transition-colors hover:underline"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            live
          </a>
        )}
      </footer>
    </article>
  );
}
