import { Mermaid } from '@/components/mermaid';

type ComponentMap = Record<string, React.ComponentType<any>>;

export function getMDXComponents(components?: ComponentMap): ComponentMap {
  return {
    Mermaid: Mermaid as React.ComponentType<any>,
    ...components,
  };
}
