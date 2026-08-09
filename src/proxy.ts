import { i18n } from '@/lib/i18n';
import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';

const handler = createI18nMiddleware({
  languages: i18n.languages,
  defaultLanguage: i18n.defaultLanguage,
});

export default handler;

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|sentry.png|.*\\..*).*)'],
};
