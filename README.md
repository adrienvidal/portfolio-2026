# Portfolio 2026

Personal portfolio website built with React 19, TypeScript, and Vite.

## Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and bundler
- **React Router** — multi-page navigation
- **Sass (SCSS)** — component-scoped styles with shared design tokens

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Routes

| Path | Description |
|---|---|
| `/` | Home — all sections sequentially |
| `/projets` | Full projects list |
| `/lab` | Lab / personal projects |
| `/blog` | Blog index |
| `/blog/:slug` | Article |

## Project structure

```
src/
  components/       # Shared UI components (co-located .tsx + .scss)
  pages/            # Route-level pages (AllProjects, Lab, Blog, Article)
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
