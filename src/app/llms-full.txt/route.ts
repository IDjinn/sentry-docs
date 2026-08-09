import { source } from '@/lib/source';
import { docs } from '@/.source/server';

export const revalidate = false;

export async function GET() {
  const entries = new Map(docs.docs.map((entry) => [entry.info.path, entry]));
  const pages = source.getPages('en');
  const parts: string[] = [];

  for (const page of pages) {
    const title = page.data.title ?? page.url;
    const description = page.data.description ?? '';
    const entry = entries.get(page.path);
    const markdown = entry ? await entry.getText('processed') : '';

    const block: string[] = [`# ${title}`];
    if (description) block.push('', `> ${description}`);
    block.push('', `URL: ${page.url}`, '', markdown);
    parts.push(block.join('\n'));
  }

  const content = parts.join('\n\n---\n\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
