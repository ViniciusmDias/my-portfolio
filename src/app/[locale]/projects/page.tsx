import { getLocale, setRequestLocale } from 'next-intl/server';
import { featuredProjects } from '@/content/projects';
import { getManyRepoStats } from '@/lib/github';
import { ProjectCard } from '@/components/sections/project-card';

export const revalidate = 3600;

const labels = {
  en: {
    heading: 'Selected projects',
    subtitle: 'Recent open-source work. Stars fetched live, cached hourly.',
    hint: '// ls -la ~/projects',
  },
  pt: {
    heading: 'Projetos selecionados',
    subtitle: 'Trabalho open-source recente. Stars buscadas ao vivo, cache de 1h.',
    hint: '// ls -la ~/projetos',
  },
} as const;

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const activeLocale = await getLocale();

  const stats = await getManyRepoStats(featuredProjects.map((p) => p.repo));
  const l = labels[activeLocale as 'en' | 'pt'] ?? labels.en;

  const spans = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 space-y-2">
        <span className="font-mono text-xs text-[color:var(--color-muted-foreground)]">
          {l.hint}
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{l.heading}</h1>
        <p className="text-[color:var(--color-muted-foreground)]">{l.subtitle}</p>
      </div>

      <div className="grid auto-rows-[minmax(14rem,auto)] grid-cols-1 gap-4 md:grid-cols-3">
        {featuredProjects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            stats={stats[p.repo] ?? null}
            locale={activeLocale}
            className={spans[i] ?? ''}
          />
        ))}
      </div>
    </section>
  );
}
