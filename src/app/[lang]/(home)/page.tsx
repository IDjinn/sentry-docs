import { Mermaid } from '@/components/mermaid';
import { i18n } from '@/lib/i18n';

const pipelineDiagram = `flowchart TB
    subgraph Sources[Camada de Fontes — Plugins]
        N1[Nginx Access Log]
        N2[HTTP Proxy]
        N3[TCP Capture]
        N4[Syslog]
        N5[Cloudflare Logs]
    end

    subgraph Core[Core Sentry]
        ING[Ingestor]
        PIPE[Pipeline de Análise]
        AI[Motor de IA]
        HEUR[Heurísticas/Regras]
        ROUTE[Validador de Rotas]
        RISK[Score de Risco]
        DECID[Decisor / Política]
    end

    subgraph Actions[Camada de Ações — Plugins]
        A1[Block IP]
        A2[Rate Limit]
        A3[Cloudflare Challenge]
        A4[Alerta Webhook]
        A5[Log/Store]
    end

    subgraph Storage[Persistência]
        DB[(Postgres)]
        BL[(Blocklist state)]
    end

    Sources --> ING
    ING --> PIPE
    PIPE --> HEUR
    PIPE --> AI
    PIPE --> ROUTE
    HEUR --> RISK
    AI --> RISK
    ROUTE --> RISK
    RISK --> DECID
    DECID --> Actions
    Actions --> Storage
    DECID --> Storage`;

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

      <div className="mx-auto max-w-5xl">
        <Mermaid chart={pipelineDiagram} />
      </div>
    </main>
  );
}
