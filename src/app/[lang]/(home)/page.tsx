import { i18n } from '@/lib/i18n';

function HeroContent({ lang }: { lang: string }) {
  const isPt = lang === 'pt';
  return {
    title: isPt
      ? 'Monitor de Acessos com Detecção de Ameaças por IA'
      : 'Access Monitor with AI-Powered Threat Detection',
    description: isPt
      ? 'Observador de acessos em tempo real para serviços expostos à internet. Heurísticas + IA para detectar payloads maliciosos, comportamento suspeito e calcular nível de risco por requisição/IP.'
      : 'Real-time access monitor for internet-exposed services. Heuristics + AI to detect malicious payloads, suspicious behavior, and compute risk levels per request/IP.',
    cta: isPt ? 'Ver Documentação' : 'Read the Docs',
    secondaryCta: isPt ? 'GitHub' : 'GitHub',
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = HeroContent({ lang });

  return (
    <main className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <img
            src="/sentry.png"
            alt="Sentry Logo"
            width={96}
            height={96}
            className="rounded-xl shadow-lg"
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          {content.title}
        </h1>
        <p className="mb-8 text-lg text-fd-muted-foreground md:text-xl">
          {content.description}
        </p>
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          <a
            href={`/${lang}/docs`}
            className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
          >
            {content.cta}
          </a>
          <a
            href="https://github.com/IDjinn/sentry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-fd-border px-6 py-3 text-sm font-medium transition hover:bg-fd-accent"
          >
            {content.secondaryCta}
          </a>
        </div>
      </div>
    </main>
  );
}
