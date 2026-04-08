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

Single-page portfolio built with React 19 + TypeScript + Vite. No routing — `App.tsx` renders all sections sequentially as a long scrolling page.

**Section order** (top → bottom):
`Nav` → `Hero` → `Services` → `Process` → `About` → `Testimonials` → `Projects` → `CtaFinal` → `Reservation` → `Footer`

The `Reservation` section has three sub-components: `Calendar`, `TimeSlots`, and `ContactForm`.

## Styling

- **Sass (SCSS)** — each component has a co-located `.scss` file
- Global styles live in `src/styles/`: `_variables.scss` (design tokens), `_reset.scss`, and `main.scss` (shared utility classes)
- Design tokens are defined as both CSS custom properties (`var(--blue)`) and Sass variables (`$blue`) in `_variables.scss`
- Shared layout classes: `.section`, `.section-bg`, `.section-bg-inner`, `.section-title`, `.section-sub`, `.btn-blue`, `.btn-white`
- Breakpoint: `900px` for mobile layout adjustments

## Component conventions

Each component lives in its own directory under `src/components/<Name>/` with `<Name>.tsx` and `<Name>.scss`. Sub-components (e.g. `ServiceCard`, `ProcessStep`, `TestimonialCard`, `ProjectCard`) are also colocated in the same directory as their parent.

## Content

All copy (labels, text, links) is centralized in `src/data/content.tsx`. Each section exports a named constant (e.g. `nav`, `hero`, `services`, `process`, `projects`, `about`, `testimonials`, `ctaFinal`, `reservation`, `footer`). Components import from this file — never hardcode copy inside components.
