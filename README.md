# Sentry Docs

Documentation site for the [Sentry](https://github.com/IDjinn/sentry) project — a
real-time access monitor for internet-exposed services, built in Rust.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16
- **Docs**: [Fumadocs](https://fumadocs.vercel.app) 16 (UI + Core + MDX)
- **Styling**: Tailwind CSS v4
- **Diagrams**: Mermaid (client-side rendering)
- **i18n**: Portuguese (`/pt`) and English (`/en`)

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/pt`.

## Build

```bash
bun run build
bun run start
```

## Content

All documentation content lives in `content/`:

```
content/
  pt/          # Portuguese (source language)
    meta.json
    *.mdx
    architecture/
    rules/
    plugins/
    ai/
    cli/
    config/
    auto/
    deploy/
  en/          # English (translation)
    ...
```

### Writing content

Create `.mdx` files with frontmatter:

```mdx
---
title: Page Title
description: Short description
---

Content here.

<Mermaid chart={`
flowchart TB
    A --> B
`} />
```

## Deploy

This repo is deployed on Vercel at **sentry.lucas-romero.com**.

It is also mounted as a git submodule at `docs/` in the main
[Sentry repo](https://github.com/IDjinn/sentry).

## Logo

The project logo is `public/sentry.png`. The source of truth is
`sentry.png` in the root of the main Sentry repo — update the copy here
when the root PNG changes.
