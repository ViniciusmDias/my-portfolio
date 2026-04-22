import { getLocale, getTranslations } from 'next-intl/server';

import { ChatPanel } from '@/components/chat/chat-panel';
import { isChatAvailable } from '@/lib/anthropic';

import { AboutPanel } from './about-panel';
import { ExperiencePanel } from './experience-panel';
import { IDEFrame } from './ide-frame';

export async function Hero() {
  const locale = await getLocale();
  const t = await getTranslations('hero');

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mb-4 space-y-3">
        <span className="font-mono text-xs text-[color:var(--color-muted-foreground)]">
          {'// chat.ai · ask anything about my career'}
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{t('greeting')}</h1>
        <p className="max-w-2xl text-base text-[color:var(--color-muted-foreground)] sm:text-lg">
          {t('role')}
        </p>
      </div>

      <IDEFrame
        labels={{
          about: t('tabs.about'),
          experience: t('tabs.experience'),
          chat: t('tabs.chat'),
        }}
        about={<AboutPanel locale={locale} />}
        experience={<ExperiencePanel locale={locale} />}
        chat={<ChatPanel locale={locale as 'en' | 'pt'} enabled={isChatAvailable()} />}
        defaultTab="chat"
      />
    </section>
  );
}
