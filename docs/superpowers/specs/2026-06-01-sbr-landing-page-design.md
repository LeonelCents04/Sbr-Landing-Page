---
name: sbr-tetci-landing-page
description: Full landing page design for SBR TETCI Bohol — React + Vite + Tailwind CSS v4, forest green + beige palette, 11 sections
metadata:
  type: project
---

# SBR TETCI Bohol Landing Page — Design Spec

**Date:** 2026-06-01
**Stack:** React 19 + Vite + Tailwind CSS v4
**Status:** Approved

---

## Overview

A single-page landing page for **SBR TETCI Bohol**, a TESDA-accredited technical education and training center in Bohol, Philippines. The page communicates professionalism, career opportunity, and technical excellence — encouraging visitors to learn about the institution, explore programs, and enroll or inquire.

Built with React + Vite + Tailwind CSS v4. Flat component structure — 11 purpose-built components assembled in `App.jsx`. The previous generic SBR placeholder components are replaced entirely.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-beige` | `#F5F0E8` | Page background, light section backgrounds |
| `--color-forest` | `#2D5016` | Primary brand color, buttons, headings, dark sections |
| `--color-forest-light` | `#4A7C2F` | Hover states, eyebrow text, accents |

White (`#FFFFFF`) is used via Tailwind's built-in `white` utility — no custom token needed. Defined as CSS custom properties in `src/index.css` under `@theme`. No additional tokens needed.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Statistics.jsx
│   ├── Programs.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   └── __tests__/
│       ├── Navbar.test.jsx
│       ├── Hero.test.jsx
│       ├── About.test.jsx
│       ├── Statistics.test.jsx
│       ├── Programs.test.jsx
│       ├── WhyChooseUs.test.jsx
│       ├── Testimonials.test.jsx
│       ├── Gallery.test.jsx
│       ├── Contact.test.jsx
│       ├── FAQ.test.jsx
│       └── Footer.test.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## Sections

### 1. Navbar

- Fixed/sticky at top of viewport (`fixed top-0 inset-x-0 z-50`)
- Beige background with subtle forest green bottom border
- **Left:** "SBR TETCI Bohol" wordmark in forest green, bold
- **Right (desktop):** Nav links — About, Programs, Why Us, Contact — then "Enroll Now" CTA button (forest green fill, white text, rounded)
- **Mobile:** Hamburger icon replaces nav links; toggled dropdown shows all links + CTA stacked vertically
- Smooth scroll to section anchors via `href="#id"`

### 2. Hero

- Full-viewport height (`min-h-screen`), beige background, `pt-16` to clear fixed navbar
- **Two-column split on `md+`:** text left, image placeholder right; stacked single column on mobile
- **Left column:**
  - Eyebrow label: "TESDA-Accredited · Bohol, Philippines" (forest-light, small caps)
  - Headline: "Build Your Future with SBR TETCI Bohol" (forest, bold, large)
  - Subtext: one paragraph about technical education and career readiness
  - Two CTA buttons: "Enroll Now" (forest fill) and "Explore Programs" (forest outline)
- **Right column:** decorative placeholder block (rounded, forest/10 background) — replaced with real image later

### 3. About

- Beige background, `id="about"`
- **Two-column on `md+`:** text left, image placeholder right; stacked on mobile
- **Left:** eyebrow "About Us", headline "Who We Are", 3 paragraphs covering overview, mission, and vision
- Why students choose SBR TETCI Bohol — 3 bullet points with checkmark icons
- **Right:** image placeholder block (gray rectangle with label)

### 4. Statistics

- Full-width forest green background band
- 4 stats in a horizontal row (wraps on mobile) — numbers are placeholder, to be confirmed by the school:
  - **500+** Graduates
  - **8+** TESDA Programs
  - **10+** Years of Service
  - **TESDA** Accredited
- White numbers, beige/white label text
- No animated counters (static for now; animation is out of scope)

### 5. Programs

- White background, `id="programs"`
- Section heading centered: eyebrow "Our Programs", headline "TESDA-Accredited Training"
- **3-column responsive card grid** (1-col mobile → 2-col tablet → 3-col desktop)
- 6 program cards:
  1. Contact Center Services NC2
  2. Driving NC2
  3. Shielded Metal Arc Welding (SMAW) NC1 & NC2
  4. Computer Systems Servicing (CSS) NC2
  5. Electrical Installation and Maintenance (EIM) NC2
  6. Other TESDA Programs (generic card)
- Each card: SVG icon, program name, one-sentence description, "Learn More" button (forest outline)
- Cards have beige background, hover shadow

### 6. WhyChooseUs

- Beige background, `id="why-us"`
- Centered heading: eyebrow "Why SBR TETCI", headline "Why Students Choose Us"
- 6 feature tiles in 3-column grid (1-col → 3-col):
  1. TESDA-Aligned Training
  2. Experienced Instructors
  3. Hands-On Learning
  4. Industry-Ready Skills
  5. Affordable Education
  6. Career Opportunities
- Each tile: forest green icon in rounded square, bold title, one-line description

### 7. Testimonials

- White background
- Centered heading: "What Our Students Say"
- 3 testimonial cards side by side (1-col → 3-col):
  - Student name, short role/program label, quoted success story paragraph
  - Placeholder avatar circle
- Cards: white bg, subtle shadow, forest green quotation mark accent

### 8. Gallery

- Beige background
- Centered heading: "Campus & Training"
- Responsive image grid: 2-col mobile → 3-col tablet → 4-col desktop
- 8 placeholder image blocks (rounded, gray fill, varying aspect ratios)
- Caption label on each: "Campus", "Training", "Classroom", "Workshop", etc.

### 9. Contact

- White background, `id="contact"`
- Centered heading: eyebrow "Get in Touch", headline "Enroll or Inquire Today"
- **Two-column on `md+`:** form left, info right; stacked on mobile
- **Left — Contact form:**
  - Fields: Full Name, Email Address, Phone Number, Message (textarea)
  - "Send Message" submit button (forest fill) — visual only, no submission logic
- **Right — Contact info:**
  - Phone: (placeholder number)
  - Email: (placeholder email)
  - Address: Bohol, Philippines
  - Map placeholder block (gray rectangle labeled "Map")
  - Social media icons row: Facebook, Twitter/X, Instagram (SVG icons, forest green, hover forest-light)

### 10. FAQ

- Beige background
- Centered heading: "Frequently Asked Questions"
- 6 accordion items — each has a question and an expand/collapse toggle (chevron icon)
- Questions:
  1. What is SBR TETCI Bohol?
  2. Are your programs TESDA-accredited?
  3. How do I enroll?
  4. What are the requirements for enrollment?
  5. Do you offer scholarship or financial assistance?
  6. Where is the school located?
- One item open by default (first item)
- Toggle state managed with React `useState`

### 11. Footer

- Forest green background
- **Top row:** "SBR TETCI Bohol" wordmark + short tagline | quick nav links (About, Programs, Why Us, Contact)
- **Bottom row (border-top):** copyright line "© 2026 SBR TETCI Bohol. All rights reserved." | social icon row
- White text, white/50 secondary text

---

## Responsive Behavior

- Mobile-first Tailwind utility classes throughout
- Navbar: hamburger toggle `< md`, full nav `md+`
- Hero: stacked `< md`, two-column `md+`
- About: stacked `< md`, two-column `md+`
- Statistics: 2-col grid `< md`, 4-col `md+`
- Programs: 1-col `< sm`, 2-col `sm+`, 3-col `lg+`
- WhyChooseUs: 1-col `< sm`, 2-col `sm+`, 3-col `lg+`
- Testimonials: 1-col `< md`, 3-col `md+`
- Gallery: 2-col `< md`, 3-col `md+`, 4-col `lg+`
- Contact: stacked `< md`, two-column `md+`
- FAQ: full-width single column always

---

## Content Strategy

All text is real SBR TETCI Bohol content (program names, section headings). Body paragraphs use placeholder lorem ipsum where specific marketing copy isn't yet available. Testimonial names and quotes are placeholder. All image blocks are gray placeholder rectangles — real photos to be swapped in later.

---

## Out of Scope

- Form submission logic (contact form is visual only)
- Real images / photo assets
- Routing / multiple pages
- CMS integration
- Animated statistics counters
- Dark mode toggle
- Authentication or user accounts
- Backend / API
