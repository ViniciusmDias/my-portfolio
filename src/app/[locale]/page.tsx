import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('hero');

  return (
    <main className="mx-auto flex min-h-dvh max-w-5xl flex-col items-start justify-center gap-4 px-6 py-24">
      <span className="font-mono text-sm text-[color:var(--color-muted-foreground)]">
        {'// phase 1 scaffold'}
      </span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t('greeting')}</h1>
      <p className="text-lg text-[color:var(--color-muted-foreground)]">{t('role')}</p>
    </main>
  );
}
