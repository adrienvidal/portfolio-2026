# Portfolio 2026

Personal portfolio website built with React 19, TypeScript, and Next.js 15.

## Stack

- **React 19** + **TypeScript**
- **Next.js 15** (App Router) — file-based routing, SSR, static generation
- **Sass (SCSS)** — component-scoped styles with shared design tokens
- **MDX** — blog articles via `@next/mdx`

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Routes

| Path | Description |
|---|---|
| `/` | Home — all sections sequentially |
| `/projets` | Full projects list |
| `/lab` | Lab / personal projects |
| `/blog` | Blog index |
| `/blog/[slug]` | Article |

## Project structure

```
src/
  app/              # Next.js App Router pages and layouts
  components/       # UI components (co-located .tsx + .scss)
  articles/         # MDX blog articles
  data/
    content.tsx     # All copy and content (never hardcode in components)
    articles.ts     # Blog article metadata
  styles/           # Global styles, variables, reset
public/
  projects/         # Project images (.webp)
  lab/              # Lab assets (.webp — videos hosted on Cloudinary)
scripts/
  optimize-images.mjs  # Convert PNG/JPG to WebP
```

## Images

Add PNG/JPG to `public/` then run:

```bash
node scripts/optimize-images.mjs
```

Converts to WebP (quality 85), deletes originals. Videos are hosted on Cloudinary — never commit `.mp4` to the repo.
