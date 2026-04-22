type Experience = {
  role: string;
  company: string;
  range: string;
  bullets: string[];
};

const data: Record<'en' | 'pt', Experience[]> = {
  en: [
    {
      role: 'Frontend Developer',
      company: 'Binamik',
      range: '2025 — Present',
      bullets: [
        'Travel & booking platforms in React/Next/TS, thousands of DAU',
        'Core Web Vitals improvements, lazy loading, code splitting',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Prolog App',
      range: '2024 — 2025',
      bullets: [
        'Fleet-management dashboards across multiple countries',
        'Virtualized lists + memoization for large datasets',
      ],
    },
    {
      role: 'Frontend Manager',
      company: 'V4 Company',
      range: '2023 — 2024',
      bullets: [
        'Led frontend for 6,000+ users across 300 franchises',
        'CI/CD with GitHub Actions + AWS S3/CloudFront',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'V4 Company',
      range: '2020 — 2022',
      bullets: ['Internal systems used daily by 100+ employees'],
    },
    {
      role: 'Frontend Developer',
      company: 'Impulse',
      range: '2019 — 2020',
      bullets: ['Responsive sites & e-commerce, SEO, pixel-perfect from mocks'],
    },
  ],
  pt: [
    {
      role: 'Desenvolvedor Frontend',
      company: 'Binamik',
      range: '2025 — Presente',
      bullets: [
        'Plataformas de viagem/reserva em React/Next/TS, milhares de DAU',
        'Melhoria em Core Web Vitals, lazy loading, code splitting',
      ],
    },
    {
      role: 'Desenvolvedor Frontend',
      company: 'Prolog App',
      range: '2024 — 2025',
      bullets: [
        'Dashboards de gestão de frota em múltiplos países',
        'Listas virtualizadas + memoização para grandes datasets',
      ],
    },
    {
      role: 'Gerente Frontend',
      company: 'V4 Company',
      range: '2023 — 2024',
      bullets: [
        'Liderança frontend para 6.000+ usuários em 300 franquias',
        'CI/CD com GitHub Actions + AWS S3/CloudFront',
      ],
    },
    {
      role: 'Desenvolvedor Frontend',
      company: 'V4 Company',
      range: '2020 — 2022',
      bullets: ['Sistemas internos usados diariamente por 100+ colaboradores'],
    },
    {
      role: 'Desenvolvedor Frontend',
      company: 'Impulse',
      range: '2019 — 2020',
      bullets: ['Sites responsivos & e-commerce, SEO, pixel-perfect a partir de mocks'],
    },
  ],
};

export function ExperiencePanel({ locale }: { locale: string }) {
  const items = data[locale as 'en' | 'pt'] ?? data.en;

  return (
    <div className="space-y-4">
      <div className="text-xs text-[color:var(--color-muted-foreground)]">
        {'// git log --oneline --pretty=role'}
      </div>
      <ul className="relative space-y-4 border-l border-[color:var(--color-border)] pl-5">
        {items.map((e, i) => (
          <li key={`${e.company}-${i}`} className="relative">
            <span className="absolute top-1.5 -left-[27px] h-3 w-3 rounded-full border-2 border-[color:var(--color-primary)] bg-[color:var(--color-background)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-semibold text-[color:var(--color-foreground)]">
                {e.role} <span className="text-[color:var(--color-primary)]">@ {e.company}</span>
              </span>
              <span className="text-xs text-[color:var(--color-muted-foreground)]">{e.range}</span>
            </div>
            <ul className="mt-1 list-inside list-disc text-xs text-[color:var(--color-muted-foreground)]">
              {e.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
