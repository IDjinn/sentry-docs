'use client';

import { useEffect, useRef, useState } from 'react';
import type { MermaidConfig } from 'mermaid';

let mermaidInstance: typeof import('mermaid')['default'] | null = null;

const config: MermaidConfig = {
  startOnLoad: false,
  theme: 'default',
  fontFamily: 'inherit',
  themeVariables: {
    fontSize: '14px',
  },
};

export function Mermaid({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        if (!mermaidInstance) {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize(config);
          mermaidInstance = mermaid;
        }

        const id = `mermaid-${Math.random().toString(36).slice(2, 11)}`;
        const { svg: rendered } = await mermaidInstance.render(id, chart);

        if (!cancelled) {
          setSvg(rendered);
          setError('');
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to render diagram');
        }
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <pre className="overflow-x-auto rounded-lg border border-fd-border bg-fd-muted p-4 text-sm text-fd-muted-foreground">
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
