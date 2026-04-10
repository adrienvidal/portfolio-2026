# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check then build for production (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Architecture

Portfolio built with React 19 + TypeScript + Vite, using React Router for multi-page navigation.

**Routes:**
- `/` — Home (`App.tsx` renders all sections sequentially)
- `/projets` — Full projects list (`src/pages/AllProjects/`)
- `/lab` — Lab page (`src/pages/Lab/`)
- `/blog` — Blog index (`src/pages/Blog/`)
- `/blog/:slug` — Article (`src/pages/Article/`)

**Home section order** (top → bottom):
`Nav` → `Hero` → `Clients` → `Services` → `Process` → `About` → `Projects` → `CtaFinal` → `Reservation` → `Footer`

The `Reservation` section has three sub-components: `Calendar`, `TimeSlots`, and `ContactForm`.

> Note: `Testimonials` component exists in `src/components/Testimonials/` but is currently commented out in `App.tsx`.

**Projects:**
- Home displays 6 Chanel projects (via `homeOrder`) with a "Voir tous les projets →" link to `/projets`
- `/projets` displays all Chanel projects in full, with a back link — no Nav/Footer
- Both home and `/projets` render an "Autres missions" section below the grid (Fnac Darty, Prisma Media, Yves Rocher) — sourced from `otherMissions` in `content.tsx`
- Pages under `src/pages/` follow the same pattern: back link only, no Nav/Footer

## Styling

- **Sass (SCSS)** — each component has a co-located `.scss` file
- Global styles live in `src/styles/`: `_variables.scss` (design tokens), `_reset.scss`, and `main.scss` (shared utility classes)
- Design tokens are defined as both CSS custom properties (`var(--blue)`) and Sass variables (`$blue`) in `_variables.scss`
- Shared layout classes: `.section`, `.section-bg`, `.section-bg-inner`, `.section-title`, `.section-sub`, `.btn-blue`, `.btn-white`
- Breakpoint: `900px` for mobile layout adjustments

## Component conventions

Each component lives in its own directory under `src/components/<Name>/` with `<Name>.tsx` and `<Name>.scss`. Sub-components (e.g. `ServiceCard`, `ProcessStep`, `TestimonialCard`, `ProjectCard`) are also colocated in the same directory as their parent.

## Images

Project images live in `public/projects/<project-name>/` as `.webp` files.

When adding new images (PNG/JPG), convert them to WebP using the sharp script:

```bash
node scripts/optimize-images.mjs
```

The script converts all PNG/JPG in `public/projects/**` to WebP (quality 85), deletes the originals, and logs the size savings.

## Content

All copy (labels, text, links) is centralized in `src/data/content.tsx`. Each section exports a named constant (e.g. `nav`, `hero`, `services`, `process`, `projects`, `otherMissions`, `about`, `testimonials`, `ctaFinal`, `reservation`, `footer`). Components import from this file — never hardcode copy inside components.

- `projects` — Chanel project cards (images, role, result, tags)
- `otherMissions` — client list shown below the projects grid (Fnac Darty, Prisma Media, Yves Rocher); no images, just name/description/tags/link
- `clients` — logo strip on the home page ("Ils m'ont fait confiance")

Blog article metadata (slug, title, date, description, content) is defined in `src/data/articles.ts` and used by the `Blog` and `Article` pages.
