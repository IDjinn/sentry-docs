import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const lang of ['pt', 'en']) {
    urls.push({
      url: `https://sentry.lucas-romero.com/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    });

    for (const page of source.getPages(lang)) {
      urls.push({
        url: `https://sentry.lucas-romero.com${page.url}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return urls;
}
