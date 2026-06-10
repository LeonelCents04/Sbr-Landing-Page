# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run test       # Run tests with Vitest (watch mode)
```

Run a single test file:
```bash
npx vitest run src/components/__tests__/Navbar.test.jsx
```

Deploy to Firebase Hosting:
```bash
npm run build && firebase deploy
```

## Architecture

Single-page marketing site for SBR TETCI Bohol (a TESDA-accredited school in Bohol, Philippines). All sections render in a fixed vertical sequence inside [src/App.jsx](src/App.jsx) — there is no router.

**Section order:** Navbar → Hero → About → Statistics → Programs → WhyChooseUs → Testimonials → Gallery → Contact → FAQ → Footer

Each section is an isolated component in [src/components/](src/components/). Section IDs (`#about`, `#programs`, `#why-us`, `#contact`) are anchor targets for Navbar links.

## Styling

Tailwind CSS v4 (configured as a Vite plugin). Custom brand tokens are defined as CSS variables in [src/index.css](src/index.css):

- `bg-beige` / `text-beige` → `#F5F0E8`
- `bg-forest` / `text-forest` → `#2D5016`
- `bg-forest-light` / `text-forest-light` → `#4A7C2F`

Custom animations (`float`, `spin-slow`, `fade-up`, `glow-breathe`) and the `.hero-fade-up` utility class are also defined in [src/index.css](src/index.css).

## Key Implementation Details

**Navbar** — transparent over the hero, switches to `bg-beige` after scrolling past 55% of viewport height. Mobile menu toggles a dropdown below the nav bar.

**Hero** — scroll-driven mask effect: the background image fades out as the user scrolls down, revealing the `bg-beige` beneath, using a CSS `mask-image` that is updated on scroll.

**Contact form** — submits to Web3Forms API. Requires `VITE_WEB3FORMS_KEY` in a `.env` file. Status is one of `idle | sending | success | error`.

**Static assets** — all images live in `public/` and are referenced with absolute paths (e.g. `/logo.png`, `/hero-bohol.png`, `/images/...`). Do not import images; use static URL strings.

## Testing

Tests use Vitest + jsdom + @testing-library/react. Setup file: [src/test/setup.js](src/test/setup.js) (imports `@testing-library/jest-dom`). Test config lives inside [vite.config.js](vite.config.js) under the `test` key.

Each component has a co-located test file in [src/components/__tests__/](src/components/__tests__/).

## Deployment

Firebase Hosting serves the `dist/` folder. Config is in [firebase.json](firebase.json). The SPA rewrite rule redirects all paths to `index.html`.
