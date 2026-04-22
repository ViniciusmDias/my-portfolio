import type { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { GoogleAnalytics } from '@next/third-parties/google';

import { clientEnv } from '@/config/env';

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
      {clientEnv.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={clientEnv.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
