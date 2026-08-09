import { llms } from 'fumadocs-core/source';
import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const content = llms(source).index('en');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
