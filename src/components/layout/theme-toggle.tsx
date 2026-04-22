'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const order = ['system', 'light', 'dark'] as const;
type Mode = (typeof order)[number];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Theme toggle" className="opacity-60">
        <Monitor className="h-4 w-4" />
      </Button>
    );
  }

  const current: Mode = (theme as Mode) ?? 'system';
  const next: Mode = order[(order.indexOf(current) + 1) % order.length] ?? 'system';
  const Icon = current === 'dark' ? Moon : current === 'light' ? Sun : Monitor;

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch theme (current: ${current})`}
      title={`Theme: ${current} → ${next}`}
      onClick={() => setTheme(next)}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
