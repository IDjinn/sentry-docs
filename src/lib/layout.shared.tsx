import { i18n } from '@/lib/i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    pt: {
      displayName: 'Português',
    },
    en: {
      displayName: 'English',
    },
  });

export function baseOptions(lang: string): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <img src="/sentry.png" alt="Sentry" width={24} height={24} />
          <span className="font-bold">Sentry</span>
        </div>
      ),
    },
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/IDjinn/sentry',
        external: true,
      },
    ],
  };
}
