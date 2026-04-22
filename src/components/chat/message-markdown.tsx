'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function MessageMarkdown({ content }: { content: string }) {
  return (
    <div className="prose prose-sm dark:prose-invert prose-p:my-2 prose-p:[overflow-wrap:anywhere] prose-ul:my-2 prose-ol:my-2 prose-li:my-0 prose-li:[overflow-wrap:anywhere] prose-pre:my-2 prose-pre:overflow-x-auto prose-code:before:content-none prose-code:after:content-none prose-code:rounded prose-code:bg-[color:var(--color-muted)] prose-code:px-1 prose-code:py-0.5 prose-code:text-[0.85em] prose-code:break-all prose-a:[overflow-wrap:anywhere] max-w-full min-w-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--color-primary)] underline underline-offset-2"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
