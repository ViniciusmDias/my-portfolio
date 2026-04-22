'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileCode2, FileText, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

type IDEFrameProps = {
  labels: { about: string; experience: string; chat: string };
  about: ReactNode;
  experience: ReactNode;
  chat: ReactNode;
  defaultTab?: 'about' | 'experience' | 'chat';
};

export function IDEFrame({ labels, about, experience, chat, defaultTab = 'chat' }: IDEFrameProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-lg">
      <div className="flex items-center gap-2 border-b border-[color:var(--color-border)] bg-[color:var(--color-muted)] px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-[color:var(--color-muted-foreground)]">
          ~/vinicius/portfolio
        </span>
      </div>

      <Tabs defaultValue={defaultTab} className="flex flex-col">
        <TabsList className="h-10 w-full justify-start gap-0 overflow-x-auto rounded-none border-b border-[color:var(--color-border)] bg-[color:var(--color-background)] p-0">
          <TabsTrigger
            value="about"
            className="h-10 gap-2 rounded-none border-r border-[color:var(--color-border)] px-4 data-[state=active]:bg-[color:var(--color-card)] data-[state=active]:shadow-none"
          >
            <FileText className="h-3.5 w-3.5" />
            {labels.about}
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="h-10 gap-2 rounded-none border-r border-[color:var(--color-border)] px-4 data-[state=active]:bg-[color:var(--color-card)] data-[state=active]:shadow-none"
          >
            <FileCode2 className="h-3.5 w-3.5" />
            {labels.experience}
          </TabsTrigger>
          <TabsTrigger
            value="chat"
            className="h-10 gap-2 rounded-none border-r border-[color:var(--color-border)] px-4 data-[state=active]:bg-[color:var(--color-card)] data-[state=active]:shadow-none"
          >
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--color-primary)]" />
            {labels.chat}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-0 min-h-[28rem] p-6 font-mono text-sm">
          {about}
        </TabsContent>
        <TabsContent value="experience" className="mt-0 min-h-[28rem] p-6 font-mono text-sm">
          {experience}
        </TabsContent>
        <TabsContent value="chat" className="mt-0 flex h-[32rem] flex-col p-0">
          {chat}
        </TabsContent>
      </Tabs>
    </div>
  );
}
