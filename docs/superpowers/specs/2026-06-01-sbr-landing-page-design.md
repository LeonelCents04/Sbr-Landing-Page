# SBR Landing Page — Design Spec

**Date:** 2026-06-01  
**Stack:** React 19 + Vite + Tailwind CSS v4  
**Status:** Approved

---

## Overview

A single-page company/business landing page for the SBR brand. Built with React + Vite + Tailwind CSS using a flat component structure. Content is placeholder for now — real copy will be provided by the user and swapped in later.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-beige` | `#F5F0E8` | Page background, light sections |
| `--color-forest` | `#2D5016` | Primary brand color, buttons, headings |
| `--color-forest-light` | `#4A7C2F` | Hover states, accents |
| `--color-white` | `#FFFFFF` | Card backgrounds, text on dark |

These are defined as CSS custom properties in `src/index.css` and extended into Tailwind's theme config.

---

## Project Structure

```
sbr-landing/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Sections

### Navbar
- Fixed/sticky at top of viewport
- SBR logo/wordmark on the left
- Navigation links on the right: Features, About, Contact
- "Get Started" CTA button (forest green, rounded)
- White or beige background with subtle bottom border

### Hero
- Full-viewport height (`min-h-screen`)
- Beige background
- Bold headline (large type, forest green)
- Supporting subtext paragraph (gray)
- Two buttons: primary (forest green fill) and secondary (outlined)
- Decorative element or subtle pattern on one side for visual interest

### Features
- Light beige or white background
- Section heading centered at top
- 3-column responsive card grid (collapses to 1-col on mobile)
- Each card: icon placeholder + short title + one-line description
- 3–6 feature cards with placeholder content

### About
- Two-column layout (text left, image/graphic right)
- Collapses to single column on mobile
- Forest green accent on section label/eyebrow text
- Headline + 2–3 paragraph placeholder body text
- Placeholder image block (gray rectangle) on the right

### CTA (Call to Action)
- Full-width banner
- Forest green background
- White headline text (strong, concise)
- Single prominent button (white or beige fill, forest green text)
- No distractions — focused conversion section

### Footer
- Deep forest green or dark beige background
- SBR wordmark + short tagline
- Navigation links repeated
- Copyright line: `© 2026 SBR. All rights reserved.`

---

## Responsive Behavior

- Mobile-first Tailwind classes throughout
- Navbar collapses to a hamburger menu on small screens (basic toggle state in React)
- Feature grid: 1-col (mobile) → 2-col (tablet) → 3-col (desktop)
- About: stacked (mobile) → side-by-side (desktop)

---

## Content Strategy

All text is placeholder for now. The user will supply real copy later. Components should use clearly named placeholder variables or inline strings that are easy to find and replace.

---

## Out of Scope

- Routing / multiple pages
- Form submission logic (Contact form is visual only for now)
- CMS integration
- Animations beyond basic hover transitions
- Authentication or user accounts
