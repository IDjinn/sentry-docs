import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { Mermaid } from '@/components/mermaid';
import type { ComponentProps } from 'react';

type ComponentMap = Record<string, React.ComponentType<any>>;

export function getMDXComponents(components?: ComponentMap): ComponentMap {
  return {
    pre: (props: ComponentProps<'pre'>) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    Mermaid: Mermaid as React.ComponentType<any>,
    ...components,
  };
}
