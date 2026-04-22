import { getLocale, setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/sections/contact-form';

const labels = {
  en: {
    heading: 'Get in touch',
    subtitle: 'Recruiting or collaborating? Drop a message.',
    hint: '// mail --to vinicius',
  },
  pt: {
    heading: 'Entre em contato',
    subtitle: 'Recrutando ou colaborando? Deixe uma mensagem.',
    hint: '// mail --to vinicius',
  },
} as const;

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const activeLocale = await getLocale();
  const l = labels[activeLocale as 'en' | 'pt'] ?? labels.en;

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6">
      <div className="mb-8 space-y-2">
        <span className="font-mono text-xs text-[color:var(--color-muted-foreground)]">
          {l.hint}
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{l.heading}</h1>
        <p className="text-[color:var(--color-muted-foreground)]">{l.subtitle}</p>
      </div>
      <ContactForm locale={activeLocale} />
    </section>
  );
}
