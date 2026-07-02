# Caitlyn Lee — Portfolio

A sticky-note desk portfolio: experience and projects presented as interactive
sticky notes on a paper workspace. Built to feel handcrafted and tactile while
staying professional.

**Live:** https://esokite3.github.io/caitlynlee/

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** (design tokens as CSS variables)
- **Framer Motion** (peel, morph, page transitions)
- **React Router**
- **Lucide** (monochrome navigation icons)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173/caitlynlee/
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run deploy   # build + publish dist/ to GitHub Pages
```

## Architecture

All content lives in `src/data/*` — experiences, projects, skills, socials,
navigation, and About copy. UI components render from that data, so adding a new
experience, project, or link is a one-line data change, never a component edit.

```
src/
  components/   Navbar, PeelNote, StickyGrid, StickyModal, Polaroid, …
  hooks/        useModal, useScrollLock, useFocusTrap, useReducedMotion
  data/         experiences, projects, skills, socials, navigation, about
  pages/        Home, Work, About
  lib/motion.ts Shared easing / durations / variants
```

## Notes

- Deployed under the `/caitlynlee/` base path; `vite.config.ts` `base` and the
  router `basename` must stay in sync. `public/404.html` provides the SPA
  fallback so deep links survive a refresh on GitHub Pages.
- Accessibility: keyboard-operable notes and modal (focus trap + Escape),
  semantic landmarks, ARIA labels, and reduced-motion support.
