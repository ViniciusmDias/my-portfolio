import { mdToPdf } from 'md-to-pdf';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const locales = ['en', 'pt'];

const css = `
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #111; padding: 0 8px; }
  h1 { margin-bottom: 4px; }
  h2 { color: #1d4ed8; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin-top: 24px; }
  h3 { margin-bottom: 4px; }
  p, li { line-height: 1.5; font-size: 11pt; }
  hr { border: none; border-top: 1px solid #eee; margin: 24px 0; }
  table { width: 100%; border-collapse: collapse; margin: 12px 0; }
  th, td { text-align: left; padding: 6px 8px; font-size: 10.5pt; vertical-align: top; }
  th { background: #f5f5f5; }
  em { color: #666; font-size: 9pt; }
`;

async function run() {
  for (const locale of locales) {
    const src = path.join(root, 'src', 'content', `resume.${locale}.md`);
    const dest = path.join(root, 'public', `resume.${locale}.pdf`);
    if (!existsSync(src)) {
      console.warn(`[resume-to-pdf] skip ${locale}: ${src} not found`);
      continue;
    }
    const content = await readFile(src, 'utf8');
    const stripped = content.replace(/^---[\s\S]*?---\n/, '');
    await mdToPdf(
      { content: stripped },
      {
        dest,
        css,
        pdf_options: {
          format: 'A4',
          margin: { top: '18mm', bottom: '18mm', left: '16mm', right: '16mm' },
          printBackground: true,
        },
      },
    );
    console.log(`[resume-to-pdf] wrote ${dest}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
