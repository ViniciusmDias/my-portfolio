import { getTranslations } from 'next-intl/server';

type AboutPanelProps = { locale: string };

const content = {
  en: {
    summary:
      'Senior Frontend Engineer with 6+ years building scalable web apps in React, Next.js, and TypeScript. Led frontend for platforms serving 6,000+ users across 300+ locations. Focused on performance, design systems, and measurable outcomes.',
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'React Native'],
    basedIn: 'Based in Florianópolis, BR · UTC−3',
  },
  pt: {
    summary:
      'Engenheiro Frontend Sênior com mais de 6 anos construindo aplicações web escaláveis em React, Next.js e TypeScript. Liderei o frontend de plataformas para 6.000+ usuários em 300+ localidades. Foco em performance, design systems e resultados mensuráveis.',
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'React Native'],
    basedIn: 'Baseado em Florianópolis, BR · UTC−3',
  },
} as const;

export async function AboutPanel({ locale }: AboutPanelProps) {
  const t = await getTranslations('hero');
  const c = content[locale as 'en' | 'pt'] ?? content.en;

  return (
    <div className="space-y-6">
      <div>
        <span className="text-[color:var(--color-muted-foreground)]">{'# '}</span>
        <span className="text-lg font-semibold">{t('greeting')}</span>
      </div>
      <p className="text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
        {c.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {c.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-[color:var(--color-border)] bg-[color:var(--color-muted)] px-2 py-0.5 text-xs"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="text-xs text-[color:var(--color-muted-foreground)]">
        {'// '}
        {c.basedIn}
      </div>
    </div>
  );
}
