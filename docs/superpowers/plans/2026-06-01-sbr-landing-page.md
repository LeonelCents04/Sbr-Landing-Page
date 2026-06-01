# SBR Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold and build the SBR company landing page with React 19 + Vite + Tailwind CSS v4, featuring Navbar, Hero, Features, About, CTA, and Footer sections in a beige/forest-green color palette.

**Architecture:** Flat component structure — each section is a self-contained React component in `src/components/`. Components are assembled in `App.jsx`. Custom colors are defined as CSS custom properties in `@theme` and consumed as Tailwind utility classes throughout.

**Tech Stack:** React 19, Vite 6, Tailwind CSS v4 (`@tailwindcss/vite`), Vitest, `@testing-library/react`, `@testing-library/jest-dom`, jsdom

---

## File Map

| File | Purpose |
|---|---|
| `vite.config.js` | Vite + Tailwind plugin + Vitest config |
| `src/index.css` | Tailwind import + `@theme` color tokens |
| `src/main.jsx` | React DOM entry point |
| `src/App.jsx` | Root — assembles all section components |
| `src/test/setup.js` | Vitest global setup (jest-dom matchers) |
| `src/components/Navbar.jsx` | Fixed top nav, links, mobile hamburger toggle |
| `src/components/Hero.jsx` | Full-viewport hero with headline, subtext, two CTAs |
| `src/components/Features.jsx` | 3-col responsive feature card grid |
| `src/components/About.jsx` | Two-col about section, text left / image right |
| `src/components/CTA.jsx` | Full-width forest-green CTA banner |
| `src/components/Footer.jsx` | Footer with wordmark, nav links, copyright |
| `src/components/__tests__/Navbar.test.jsx` | Navbar render + hamburger toggle tests |
| `src/components/__tests__/Hero.test.jsx` | Hero render tests |
| `src/components/__tests__/Features.test.jsx` | Features render tests |
| `src/components/__tests__/About.test.jsx` | About render tests |
| `src/components/__tests__/CTA.test.jsx` | CTA render tests |
| `src/components/__tests__/Footer.test.jsx` | Footer render tests |

---

## Task 1: Scaffold Vite + React Project

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css` (all via Vite scaffold)

- [ ] **Step 1: Run Vite scaffold in the project directory**

```powershell
cd "c:\OJT\sbr landing page"
npm create vite@latest . -- --template react
```

When prompted "Current directory is not empty. Please choose how to handle existing files:", select **Ignore files and continue**.

Expected output ends with:
```
Done. Now run:
  npm install
  npm run dev
```

- [ ] **Step 2: Install base dependencies**

```powershell
npm install
```

Expected: `added N packages` with no errors.

- [ ] **Step 3: Install Tailwind CSS v4 and Vite plugin**

```powershell
npm install tailwindcss @tailwindcss/vite
```

- [ ] **Step 4: Install testing dependencies**

```powershell
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 5: Remove boilerplate files**

```powershell
Remove-Item "src/App.css" -Force
Remove-Item "src/assets/react.svg" -Force
```

- [ ] **Step 6: Commit**

```powershell
git init
git add .
git commit -m "chore: scaffold Vite + React project with Tailwind and Vitest deps"
```

---

## Task 2: Configure Tailwind CSS v4 and Color Tokens

**Files:**
- Modify: `vite.config.js`
- Modify: `src/index.css`

- [ ] **Step 1: Replace `vite.config.js` with Tailwind plugin + Vitest config**

Write the following to `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
})
```

- [ ] **Step 2: Replace `src/index.css` with Tailwind import and color tokens**

Write the following to `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-beige: #F5F0E8;
  --color-forest: #2D5016;
  --color-forest-light: #4A7C2F;
}
```

- [ ] **Step 3: Create Vitest setup file**

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Update `src/main.jsx` to import the CSS**

Write `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 5: Write a minimal `src/App.jsx` to verify the dev server works**

```jsx
export default function App() {
  return (
    <div className="min-h-screen bg-beige flex items-center justify-center">
      <h1 className="text-4xl font-bold text-forest">SBR</h1>
    </div>
  )
}
```

- [ ] **Step 6: Run the dev server and verify beige background + forest green text appears**

```powershell
npm run dev
```

Open `http://localhost:5173` in a browser. You should see a beige page with "SBR" in dark green. Stop the server with `Ctrl+C`.

- [ ] **Step 7: Commit**

```powershell
git add vite.config.js src/index.css src/main.jsx src/App.jsx src/test/setup.js
git commit -m "chore: configure Tailwind v4 with beige/forest color tokens and Vitest"
```

---

## Task 3: Navbar Component

**Files:**
- Create: `src/components/__tests__/Navbar.test.jsx`
- Create: `src/components/Navbar.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Navbar.test.jsx`:

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('renders the SBR wordmark', () => {
    render(<Navbar />)
    expect(screen.getByText('SBR')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Features').length).toBeGreaterThan(0)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('renders Get Started button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Get Started').length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)
    const hamburger = screen.getByLabelText('Toggle menu')
    expect(screen.getAllByText('Features').length).toBe(1)
    fireEvent.click(hamburger)
    expect(screen.getAllByText('Features').length).toBe(2)
    fireEvent.click(hamburger)
    expect(screen.getAllByText('Features').length).toBe(1)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/Navbar.test.jsx
```

Expected: FAIL — `Cannot find module '../Navbar'`

- [ ] **Step 3: Implement Navbar**

Create `src/components/Navbar.jsx`:

```jsx
import { useState } from 'react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-beige border-b border-forest/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-forest font-bold text-xl tracking-tight">SBR</span>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-sm text-gray-600 hover:text-forest transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-forest text-white text-sm font-medium hover:bg-forest-light transition-colors"
        >
          Get Started
        </a>

        <button
          className="md:hidden text-forest"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-beige border-t border-forest/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="text-sm text-gray-600 hover:text-forest transition-colors">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-forest text-white text-sm font-medium hover:bg-forest-light transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```powershell
npx vitest run src/components/__tests__/Navbar.test.jsx
```

Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Navbar.jsx src/components/__tests__/Navbar.test.jsx
git commit -m "feat: add Navbar component with mobile hamburger toggle"
```

---

## Task 4: Hero Component

**Files:**
- Create: `src/components/__tests__/Hero.test.jsx`
- Create: `src/components/Hero.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Hero.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the section', () => {
    render(<Hero />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('renders the Get Started CTA link', () => {
    render(<Hero />)
    const links = screen.getAllByText('Get Started')
    expect(links[0]).toBeInTheDocument()
  })

  it('renders the Learn More link', () => {
    render(<Hero />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders the Welcome to SBR eyebrow', () => {
    render(<Hero />)
    expect(screen.getByText(/Welcome to SBR/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/Hero.test.jsx
```

Expected: FAIL — `Cannot find module '../Hero'`

- [ ] **Step 3: Implement Hero**

Create `src/components/Hero.jsx`:

```jsx
export default function Hero() {
  return (
    <section className="min-h-screen bg-beige flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-4">
            Welcome to SBR
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest leading-tight mb-6">
            Your headline goes here
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Supporting subtext that explains your value proposition. Concise, benefit-driven, and easy to scan.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-forest text-white font-medium hover:bg-forest-light transition-colors"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-lg border-2 border-forest text-forest font-medium hover:bg-forest hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-80 h-80 rounded-3xl bg-forest/10 flex items-center justify-center">
            <div className="w-48 h-48 rounded-2xl bg-forest/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```powershell
npx vitest run src/components/__tests__/Hero.test.jsx
```

Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Hero.jsx src/components/__tests__/Hero.test.jsx
git commit -m "feat: add Hero section with headline, subtext, and CTA buttons"
```

---

## Task 5: Features Component

**Files:**
- Create: `src/components/__tests__/Features.test.jsx`
- Create: `src/components/Features.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Features.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Features from '../Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Our Features')).toBeInTheDocument()
  })

  it('renders 6 feature cards', () => {
    render(<Features />)
    const cards = screen.getAllByText(/Feature (One|Two|Three|Four|Five|Six)/)
    expect(cards).toHaveLength(6)
  })

  it('renders the What We Offer eyebrow', () => {
    render(<Features />)
    expect(screen.getByText(/What We Offer/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/Features.test.jsx
```

Expected: FAIL — `Cannot find module '../Features'`

- [ ] **Step 3: Implement Features**

Create `src/components/Features.jsx`:

```jsx
const features = [
  {
    title: 'Feature One',
    description: 'A short description of this feature and the value it provides to your users.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Feature Two',
    description: 'A short description of this feature and the value it provides to your users.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Feature Three',
    description: 'A short description of this feature and the value it provides to your users.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Feature Four',
    description: 'A short description of this feature and the value it provides to your users.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Feature Five',
    description: 'A short description of this feature and the value it provides to your users.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Feature Six',
    description: 'A short description of this feature and the value it provides to your users.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-forest">Our Features</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, icon }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-beige hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest mb-4">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-forest mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```powershell
npx vitest run src/components/__tests__/Features.test.jsx
```

Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Features.jsx src/components/__tests__/Features.test.jsx
git commit -m "feat: add Features section with 6-card responsive grid"
```

---

## Task 6: About Component

**Files:**
- Create: `src/components/__tests__/About.test.jsx`
- Create: `src/components/About.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/About.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About', () => {
  it('renders the About Us eyebrow', () => {
    render(<About />)
    expect(screen.getByText(/About Us/i)).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText(/Who we are/i)).toBeInTheDocument()
  })

  it('renders the image placeholder', () => {
    render(<About />)
    expect(screen.getByText(/Image placeholder/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/About.test.jsx
```

Expected: FAIL — `Cannot find module '../About'`

- [ ] **Step 3: Implement About**

Create `src/components/About.jsx`:

```jsx
export default function About() {
  return (
    <section id="about" className="py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-forest mb-6">
            Who we are and what we stand for
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full aspect-square max-w-md rounded-3xl bg-forest/15 flex items-center justify-center">
            <span className="text-forest/40 text-sm font-medium">Image placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```powershell
npx vitest run src/components/__tests__/About.test.jsx
```

Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/About.jsx src/components/__tests__/About.test.jsx
git commit -m "feat: add About section with two-column layout"
```

---

## Task 7: CTA Component

**Files:**
- Create: `src/components/__tests__/CTA.test.jsx`
- Create: `src/components/CTA.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/CTA.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import CTA from '../CTA'

describe('CTA', () => {
  it('renders the main CTA headline', () => {
    render(<CTA />)
    expect(screen.getByText(/Ready to get started with SBR/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CTA />)
    expect(screen.getByText('Get Started Today')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/CTA.test.jsx
```

Expected: FAIL — `Cannot find module '../CTA'`

- [ ] **Step 3: Implement CTA**

Create `src/components/CTA.jsx`:

```jsx
export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-forest">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to get started with SBR?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Join us today and experience the difference. No commitment required.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 rounded-xl bg-beige text-forest font-semibold text-lg hover:bg-white transition-colors"
        >
          Get Started Today
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```powershell
npx vitest run src/components/__tests__/CTA.test.jsx
```

Expected: PASS — 2 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/CTA.jsx src/components/__tests__/CTA.test.jsx
git commit -m "feat: add CTA banner section with forest green background"
```

---

## Task 8: Footer Component

**Files:**
- Create: `src/components/__tests__/Footer.test.jsx`
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Footer.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the SBR wordmark', () => {
    render(<Footer />)
    expect(screen.getByText('SBR')).toBeInTheDocument()
  })

  it('renders copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 SBR/i)).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Footer />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/Footer.test.jsx
```

Expected: FAIL — `Cannot find module '../Footer'`

- [ ] **Step 3: Implement Footer**

Create `src/components/Footer.jsx`:

```jsx
const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-white font-bold text-2xl tracking-tight">SBR</span>
            <p className="text-white/50 text-sm mt-1">Your short company tagline here.</p>
          </div>
          <ul className="flex gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-white/70 text-sm hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">© 2026 SBR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```powershell
npx vitest run src/components/__tests__/Footer.test.jsx
```

Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Footer.jsx src/components/__tests__/Footer.test.jsx
git commit -m "feat: add Footer with wordmark, nav links, and copyright"
```

---

## Task 9: Assemble App.jsx and Final Verification

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Replace App.jsx to assemble all sections**

Write `src/App.jsx`:

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Run all tests to confirm everything passes**

```powershell
npx vitest run
```

Expected: All tests in `src/components/__tests__/` pass. 0 failures.

- [ ] **Step 3: Start dev server and do a visual walkthrough**

```powershell
npm run dev
```

Open `http://localhost:5173`. Walk through each section:
- Navbar is fixed at top, shows SBR wordmark and nav links
- Hero fills the viewport with beige background and forest green headline
- Features section shows 6 cards in a 3-column grid
- About section shows two-column layout
- CTA section shows forest green banner
- Footer shows wordmark, links, and copyright
- Resize to mobile width (< 768px) and confirm hamburger menu appears and toggles correctly

Stop the server with `Ctrl+C`.

- [ ] **Step 4: Final commit**

```powershell
git add src/App.jsx
git commit -m "feat: assemble full SBR landing page — all sections wired in App.jsx"
```
