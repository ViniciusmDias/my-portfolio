import { getLocale, setRequestLocale } from 'next-intl/server';
import { ExperiencePanel } from '@/components/sections/experience-panel';

const labels = {
  en: { heading: 'Experience', hint: '// git log --all --graph' },
  pt: { heading: 'Experiência', hint: '// git log --all --graph' },
} as const;

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const activeLocale = await getLocale();
  const l = labels[activeLocale as 'en' | 'pt'] ?? labels.en;

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <div className="mb-8 space-y-2">
        <span className="font-mono text-xs text-[color:var(--color-muted-foreground)]">
          {l.hint}
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{l.heading}</h1>
      </div>
      <ExperiencePanel locale={activeLocale} />
    </section>
  );
}
