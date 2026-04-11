# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Next.js with Turbopack)
npm run build     # Build for production (next build)
npm run start     # Start production server
npm run lint      # Run ESLint (next lint)
```

## Architecture

Portfolio built with React 19 + TypeScript + Next.js 15 (App Router), using file-based routing.

**Routes:**
- `/` — Home (`src/app/page.tsx` renders all sections sequentially)
- `/projets` — Full projects list (`src/app/projets/page.tsx`)
- `/lab` — Lab page (`src/app/lab/page.tsx`)
- `/blog` — Blog index (`src/app/blog/page.tsx`)
- `/blog/[slug]` — Article (`src/app/blog/[slug]/page.tsx`)

**Home section order** (top → bottom):
`Nav` → `Hero` → `Clients` → `Services` → `Process` → `About` → `Projects` → `CtaFinal` → `Reservation` → `Footer`

The `Reservation` section has three sub-components: `Calendar`, `TimeSlots`, and `ContactForm`.

> Note: `Testimonials` component exists in `src/components/Testimonials/` but is currently commented out in `src/app/page.tsx`.

**Projects:**
- Home displays 6 Chanel projects (via `homeOrder`) with a "Voir tous les projets →" link to `/projets`
- `/projets` has Nav + Footer; renders all Chanel projects + "Autres missions" section
- Both home and `/projets` render an "Autres missions" section below the grid (Fnac Darty, Prisma Media, Yves Rocher) — sourced from `otherMissions` in `content.tsx`

**Lab (`/lab`):**
- Displays personal projects in a 2-column card grid (1 column on mobile)
- Each item can have: `images` (string[]) for a collage cover + lightbox, `video` (string) for an autoplay cover, or neither (placeholder)
- When `images` is present, clicking the cover opens a `LabLightbox` (portal, keyboard nav ←/→/Escape)
- `LabLightbox` is colocated in `src/app/lab/` alongside `lab/page.tsx`
- Lab assets live in `public/lab/<project-name>/` as `.webp` files (videos hosted on Cloudinary — never commit `.mp4` to the repo)

## Server vs Client components

- Pages (`src/app/*/page.tsx`) are **Server Components** by default — good for SEO
- Components with state or browser APIs must have `'use client'` at the top
- Current client components: `Reservation`, `ProjectCard`, `Lab/page`, `LabLightbox`
- `Calendar`, `TimeSlots`, `ContactForm` are children of `Reservation` — they don't need `'use client'` explicitly

## Styling

- **Sass (SCSS)** — each component has a co-located `.scss` file
- Global styles live in `src/styles/`: `_variables.scss` (design tokens), `_reset.scss`, and `main.scss` (shared utility classes). Imported in `src/app/layout.tsx`.
- Page-level SCSS files (blog, article, allProjects, lab) live in `src/pages/*/` and are imported with `@/pages/...` paths in the app pages
- Design tokens are defined as both CSS custom properties (`var(--blue)`) and Sass variables (`$blue`) in `_variables.scss`
- Shared layout classes: `.section`, `.section-bg`, `.section-bg-inner`, `.section-title`, `.section-sub`, `.btn-blue`, `.btn-white`
- Breakpoint: `900px` for mobile layout adjustments

## Component conventions

Each component lives in its own directory under `src/components/<Name>/` with `<Name>.tsx` and `<Name>.scss`. Sub-components (e.g. `ServiceCard`, `ProcessStep`, `TestimonialCard`, `ProjectCard`) are also colocated in the same directory as their parent.

## Images

All `<img>` tags use `next/image` (`Image` from `'next/image'`). Strategies used:
- Fixed dimensions (`width` + `height`) for known-size images (Hero avatar: 340×340)
- `fill` prop for images inside a `position: relative` container (ProjectCard, Lab collage, LabLightbox)
- Always include a `sizes` prop when using `fill`
- Add `priority` on above-the-fold images (Hero)

Project images live in `public/projects/<project-name>/` as `.webp` files.
Lab assets live in `public/lab/<project-name>/` as `.webp` files. Videos are hosted on Cloudinary and referenced by URL in `content.tsx` — never commit `.mp4` to the repo (`.gitignore`).

When adding new images (PNG/JPG), convert them to WebP using the sharp script:

```bash
node scripts/optimize-images.mjs
```

The script converts all PNG/JPG in `public/**` to WebP (quality 85), deletes the originals, and logs the size savings.

## SEO / Metadata

Each page exports `metadata` (static) or `generateMetadata` (dynamic) from Next.js:

```ts
// Static (most pages)
export const metadata: Metadata = { title: '...', description: '...' }

// Dynamic (blog/[slug])
export async function generateMetadata({ params }): Promise<Metadata> { ... }
```

Blog article slugs are pre-generated via `generateStaticParams` in `src/app/blog/[slug]/page.tsx`.

## Blog / MDX

- Article metadata (slug, title, date, description, tags) is defined in `src/data/articles.ts`
- MDX files live in `src/articles/*.mdx`
- `@next/mdx` handles compilation (configured in `next.config.ts`)
- To add a new article:
  1. Create `src/articles/<slug>.mdx`
  2. Add metadata to `src/data/articles.ts`
  3. Add the import to the `articleModules` map in `src/app/blog/[slug]/page.tsx`

## Content

All copy (labels, text, links) is centralized in `src/data/content.tsx`. Each section exports a named constant (e.g. `nav`, `hero`, `services`, `process`, `projects`, `otherMissions`, `about`, `testimonials`, `ctaFinal`, `reservation`, `footer`). Components import from this file — never hardcode copy inside components.

- `projects` — Chanel project cards (images, role, result, tags)
- `otherMissions` — client list shown below the projects grid (Fnac Darty, Prisma Media, Yves Rocher); no images, just name/description/tags/link
- `clients` — logo strip on the home page ("Ils m'ont fait confiance")
- `lab` — personal project cards; each item supports `images` (collage + lightbox), `video` (autoplay cover), or neither
