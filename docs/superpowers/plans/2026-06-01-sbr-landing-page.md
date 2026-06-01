# SBR TETCI Bohol Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full 11-section landing page for SBR TETCI Bohol using React 19 + Vite + Tailwind CSS v4, replacing all previous generic placeholder components.

**Architecture:** Flat component structure — 11 purpose-built components in `src/components/`, assembled in `src/App.jsx`. Existing color tokens (`--color-beige`, `--color-forest`, `--color-forest-light`) and Vitest setup remain unchanged. Each component is tested with `@testing-library/react` before assembly.

**Tech Stack:** React 19, Vite 6, Tailwind CSS v4 (`@tailwindcss/vite`), Vitest 3, `@testing-library/react`, `@testing-library/jest-dom`, jsdom

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `src/components/Navbar.jsx` | Create | Sticky nav, wordmark, links, mobile hamburger |
| `src/components/Hero.jsx` | Create | Split two-column hero, headline, CTAs |
| `src/components/About.jsx` | Create | Two-column about, mission/vision, highlights |
| `src/components/Statistics.jsx` | Create | Forest green band with 4 stat counters |
| `src/components/Programs.jsx` | Create | 6-card program grid |
| `src/components/WhyChooseUs.jsx` | Create | 6-tile feature grid |
| `src/components/Testimonials.jsx` | Create | 3 student testimonial cards |
| `src/components/Gallery.jsx` | Create | 8-block responsive image grid |
| `src/components/Contact.jsx` | Create | Contact form + info column |
| `src/components/FAQ.jsx` | Create | 6-item accordion, first open by default |
| `src/components/Footer.jsx` | Create | Wordmark, nav links, copyright, social icons |
| `src/components/__tests__/Navbar.test.jsx` | Create | Navbar render + hamburger toggle tests |
| `src/components/__tests__/Hero.test.jsx` | Create | Hero render tests |
| `src/components/__tests__/About.test.jsx` | Create | About render tests |
| `src/components/__tests__/Statistics.test.jsx` | Create | Statistics render tests |
| `src/components/__tests__/Programs.test.jsx` | Create | Programs render tests |
| `src/components/__tests__/WhyChooseUs.test.jsx` | Create | WhyChooseUs render tests |
| `src/components/__tests__/Testimonials.test.jsx` | Create | Testimonials render tests |
| `src/components/__tests__/Gallery.test.jsx` | Create | Gallery render tests |
| `src/components/__tests__/Contact.test.jsx` | Create | Contact form render tests |
| `src/components/__tests__/FAQ.test.jsx` | Create | FAQ render + accordion toggle tests |
| `src/components/__tests__/Footer.test.jsx` | Create | Footer render tests |
| `src/App.jsx` | Replace | Assemble all 11 components |

---

## Task 1: Cleanup Old Components

**Files:**
- Delete: `src/components/` (if it exists from previous work)

- [ ] **Step 1: Remove any stale component files**

```powershell
Remove-Item -Path "src\components" -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force -Path "src\components\__tests__" | Out-Null
```

Expected: no errors, `src/components/__tests__/` now exists and is empty.

- [ ] **Step 2: Verify dev environment is still healthy**

```powershell
npx vitest run
```

Expected: 0 test files found (nothing to test yet), no errors. If there's a config error, stop and investigate `vite.config.js` before continuing.

---

## Task 2: Navbar Component

**Files:**
- Create: `src/components/__tests__/Navbar.test.jsx`
- Create: `src/components/Navbar.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Navbar.test.jsx`:

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('renders the SBR TETCI Bohol wordmark', () => {
    render(<Navbar />)
    expect(screen.getByText('SBR TETCI Bohol')).toBeInTheDocument()
  })

  it('renders all desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Programs').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Why Us').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('renders Enroll Now button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Enroll Now').length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)
    const hamburger = screen.getByLabelText('Toggle menu')
    expect(screen.getAllByText('About').length).toBe(1)
    fireEvent.click(hamburger)
    expect(screen.getAllByText('About').length).toBe(2)
    fireEvent.click(hamburger)
    expect(screen.getAllByText('About').length).toBe(1)
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
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-beige border-b border-forest/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-forest font-bold text-lg tracking-tight">SBR TETCI Bohol</span>

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
          Enroll Now
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
            <a
              key={label}
              href={href}
              className="text-sm text-gray-600 hover:text-forest transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-forest text-white text-sm font-medium hover:bg-forest-light transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Enroll Now
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
git commit -m "feat: add Navbar with wordmark, nav links, and mobile hamburger"
```

---

## Task 3: Hero Component

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

  it('renders the TESDA eyebrow text', () => {
    render(<Hero />)
    expect(screen.getByText(/TESDA-Accredited/i)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Build Your Future with SBR TETCI Bohol/i)).toBeInTheDocument()
  })

  it('renders the Enroll Now CTA', () => {
    render(<Hero />)
    expect(screen.getAllByText('Enroll Now').length).toBeGreaterThan(0)
  })

  it('renders the Explore Programs CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Explore Programs')).toBeInTheDocument()
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
            TESDA-Accredited · Bohol, Philippines
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-forest leading-tight mb-6">
            Build Your Future with SBR TETCI Bohol
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Gain industry-ready technical skills through TESDA-accredited programs.
            Join hundreds of graduates who built their careers right here in Bohol.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-forest text-white font-medium hover:bg-forest-light transition-colors"
            >
              Enroll Now
            </a>
            <a
              href="#programs"
              className="px-6 py-3 rounded-lg border-2 border-forest text-forest font-medium hover:bg-forest hover:text-white transition-colors"
            >
              Explore Programs
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-full aspect-square max-w-md rounded-3xl bg-forest/10 flex items-center justify-center">
            <span className="text-forest/30 text-sm font-medium">Campus Image</span>
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

Expected: PASS — 5 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Hero.jsx src/components/__tests__/Hero.test.jsx
git commit -m "feat: add Hero section with split layout and CTAs"
```

---

## Task 4: About Component

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
    expect(screen.getByText('Who We Are')).toBeInTheDocument()
  })

  it('renders the image placeholder', () => {
    render(<About />)
    expect(screen.getByText(/Image placeholder/i)).toBeInTheDocument()
  })

  it('renders all three highlight bullet points', () => {
    render(<About />)
    expect(screen.getByText(/TESDA-accredited programs recognized nationwide/i)).toBeInTheDocument()
    expect(screen.getByText(/hands-on training/i)).toBeInTheDocument()
    expect(screen.getByText(/industry experience/i)).toBeInTheDocument()
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
const highlights = [
  'TESDA-accredited programs recognized nationwide',
  'Practical, hands-on training with real tools and equipment',
  'Dedicated instructors with industry experience',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-forest mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            SBR TETCI Bohol is a TESDA-accredited technical education and training center
            committed to providing quality technical-vocational education in Bohol, Philippines.
            We equip students with practical skills that open doors to real career opportunities.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is to deliver accessible, industry-aligned training that transforms
            lives. We believe every student deserves the tools and knowledge to build a
            sustainable and fulfilling career.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our vision is to be the leading technical education institution in Bohol —
            recognized for excellence, integrity, and the success of every graduate.
          </p>
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-forest-light mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
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

Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/About.jsx src/components/__tests__/About.test.jsx
git commit -m "feat: add About section with mission, vision, and highlights"
```

---

## Task 5: Statistics Component

**Files:**
- Create: `src/components/__tests__/Statistics.test.jsx`
- Create: `src/components/Statistics.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Statistics.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Statistics from '../Statistics'

describe('Statistics', () => {
  it('renders the 500+ graduates stat', () => {
    render(<Statistics />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Graduates')).toBeInTheDocument()
  })

  it('renders the programs stat', () => {
    render(<Statistics />)
    expect(screen.getByText('8+')).toBeInTheDocument()
    expect(screen.getByText('TESDA Programs')).toBeInTheDocument()
  })

  it('renders the years of service stat', () => {
    render(<Statistics />)
    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('Years of Service')).toBeInTheDocument()
  })

  it('renders the TESDA accredited stat', () => {
    render(<Statistics />)
    expect(screen.getByText('TESDA')).toBeInTheDocument()
    expect(screen.getByText('Accredited')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/Statistics.test.jsx
```

Expected: FAIL — `Cannot find module '../Statistics'`

- [ ] **Step 3: Implement Statistics**

Create `src/components/Statistics.jsx`:

```jsx
const stats = [
  { value: '500+', label: 'Graduates' },
  { value: '8+', label: 'TESDA Programs' },
  { value: '10+', label: 'Years of Service' },
  { value: 'TESDA', label: 'Accredited' },
]

export default function Statistics() {
  return (
    <section className="py-16 bg-forest">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{value}</div>
              <div className="text-white/60 text-sm font-medium">{label}</div>
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
npx vitest run src/components/__tests__/Statistics.test.jsx
```

Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Statistics.jsx src/components/__tests__/Statistics.test.jsx
git commit -m "feat: add Statistics section with 4 stat counters on forest green band"
```

---

## Task 6: Programs Component

**Files:**
- Create: `src/components/__tests__/Programs.test.jsx`
- Create: `src/components/Programs.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Programs.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Programs from '../Programs'

describe('Programs', () => {
  it('renders the section heading', () => {
    render(<Programs />)
    expect(screen.getByText('TESDA-Accredited Training')).toBeInTheDocument()
  })

  it('renders the Our Programs eyebrow', () => {
    render(<Programs />)
    expect(screen.getByText(/Our Programs/i)).toBeInTheDocument()
  })

  it('renders Contact Center Services card', () => {
    render(<Programs />)
    expect(screen.getByText('Contact Center Services NC2')).toBeInTheDocument()
  })

  it('renders Driving NC2 card', () => {
    render(<Programs />)
    expect(screen.getByText('Driving NC2')).toBeInTheDocument()
  })

  it('renders SMAW card', () => {
    render(<Programs />)
    expect(screen.getByText(/Shielded Metal Arc Welding/i)).toBeInTheDocument()
  })

  it('renders CSS NC2 card', () => {
    render(<Programs />)
    expect(screen.getByText(/Computer Systems Servicing/i)).toBeInTheDocument()
  })

  it('renders EIM NC2 card', () => {
    render(<Programs />)
    expect(screen.getByText(/Electrical Installation/i)).toBeInTheDocument()
  })

  it('renders 6 Learn More buttons', () => {
    render(<Programs />)
    expect(screen.getAllByText('Learn More')).toHaveLength(6)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/Programs.test.jsx
```

Expected: FAIL — `Cannot find module '../Programs'`

- [ ] **Step 3: Implement Programs**

Create `src/components/Programs.jsx`:

```jsx
const programs = [
  {
    title: 'Contact Center Services NC2',
    description:
      'Develop skills in customer service, communication, and technical support for the BPO industry.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: 'Driving NC2',
    description:
      'Learn professional driving skills, road safety, and vehicle operation for commercial and personal use.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
  },
  {
    title: 'Shielded Metal Arc Welding (SMAW) NC1 & NC2',
    description:
      'Master manual arc welding techniques for structural, pipe, and plate applications.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
  },
  {
    title: 'Computer Systems Servicing (CSS) NC2',
    description:
      'Learn to install, configure, diagnose, and maintain computer hardware and software systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Electrical Installation and Maintenance (EIM) NC2',
    description:
      'Install and maintain residential and industrial electrical systems safely and efficiently.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Other TESDA Programs',
    description:
      'Explore additional TESDA-aligned training opportunities. Inquire for the latest available programs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            Our Programs
          </p>
          <h2 className="text-4xl font-bold text-forest">TESDA-Accredited Training</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map(({ title, description, icon }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-beige hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest mb-4">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-forest mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-forest border border-forest rounded-lg px-4 py-2 hover:bg-forest hover:text-white transition-colors self-start"
              >
                Learn More
              </a>
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
npx vitest run src/components/__tests__/Programs.test.jsx
```

Expected: PASS — 8 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Programs.jsx src/components/__tests__/Programs.test.jsx
git commit -m "feat: add Programs section with 6 TESDA program cards"
```

---

## Task 7: WhyChooseUs Component

**Files:**
- Create: `src/components/__tests__/WhyChooseUs.test.jsx`
- Create: `src/components/WhyChooseUs.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/WhyChooseUs.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import WhyChooseUs from '../WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the section heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Students Choose Us')).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Why SBR TETCI/i)).toBeInTheDocument()
  })

  it('renders all 6 feature titles', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('TESDA-Aligned Training')).toBeInTheDocument()
    expect(screen.getByText('Experienced Instructors')).toBeInTheDocument()
    expect(screen.getByText('Hands-On Learning')).toBeInTheDocument()
    expect(screen.getByText('Industry-Ready Skills')).toBeInTheDocument()
    expect(screen.getByText('Affordable Education')).toBeInTheDocument()
    expect(screen.getByText('Career Opportunities')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/WhyChooseUs.test.jsx
```

Expected: FAIL — `Cannot find module '../WhyChooseUs'`

- [ ] **Step 3: Implement WhyChooseUs**

Create `src/components/WhyChooseUs.jsx`:

```jsx
const features = [
  {
    title: 'TESDA-Aligned Training',
    description: 'All programs follow TESDA competency standards, ensuring national recognition.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: 'Experienced Instructors',
    description: 'Learn from instructors with real industry backgrounds and teaching expertise.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Hands-On Learning',
    description: 'Practice with actual tools and equipment in a real training environment.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Industry-Ready Skills',
    description: 'Graduate with competencies that employers actively seek in the job market.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Affordable Education',
    description: 'Quality technical education at a cost that makes it accessible to everyone.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
  },
  {
    title: 'Career Opportunities',
    description: 'Our graduates are employed locally and abroad across various industries.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            Why SBR TETCI
          </p>
          <h2 className="text-4xl font-bold text-forest">Why Students Choose Us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, icon }) => (
            <div key={title} className="p-6 rounded-2xl bg-white hover:shadow-md transition-shadow">
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
npx vitest run src/components/__tests__/WhyChooseUs.test.jsx
```

Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/WhyChooseUs.jsx src/components/__tests__/WhyChooseUs.test.jsx
git commit -m "feat: add WhyChooseUs section with 6 feature tiles"
```

---

## Task 8: Testimonials Component

**Files:**
- Create: `src/components/__tests__/Testimonials.test.jsx`
- Create: `src/components/Testimonials.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Testimonials.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Testimonials from '../Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Students Say')).toBeInTheDocument()
  })

  it('renders all three student names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByText('Juan dela Cruz')).toBeInTheDocument()
    expect(screen.getByText('Ana Reyes')).toBeInTheDocument()
  })

  it('renders all three program labels', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Computer Systems Servicing/i)).toBeInTheDocument()
    expect(screen.getByText(/Electrical Installation/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Center/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/Testimonials.test.jsx
```

Expected: FAIL — `Cannot find module '../Testimonials'`

- [ ] **Step 3: Implement Testimonials**

Create `src/components/Testimonials.jsx`:

```jsx
const testimonials = [
  {
    name: 'Maria Santos',
    program: 'Computer Systems Servicing NC2',
    quote:
      'SBR TETCI gave me the skills I needed to land my first job in IT. The hands-on training was exactly what employers were looking for.',
  },
  {
    name: 'Juan dela Cruz',
    program: 'Electrical Installation and Maintenance NC2',
    quote:
      'After completing EIM NC2, I started my own electrical services business. The training here was thorough and practical.',
  },
  {
    name: 'Ana Reyes',
    program: 'Contact Center Services NC2',
    quote:
      'I got hired by a BPO company right after graduation. SBR TETCI prepared me well for the real world of customer service.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            Student Stories
          </p>
          <h2 className="text-4xl font-bold text-forest">What Our Students Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, program, quote }) => (
            <div key={name} className="p-6 rounded-2xl bg-beige flex flex-col gap-4">
              <svg
                className="w-8 h-8 text-forest/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{quote}</p>
              <div>
                <p className="text-forest font-semibold text-sm">{name}</p>
                <p className="text-gray-500 text-xs">{program}</p>
              </div>
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
npx vitest run src/components/__tests__/Testimonials.test.jsx
```

Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Testimonials.jsx src/components/__tests__/Testimonials.test.jsx
git commit -m "feat: add Testimonials section with 3 student cards"
```

---

## Task 9: Gallery Component

**Files:**
- Create: `src/components/__tests__/Gallery.test.jsx`
- Create: `src/components/Gallery.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Gallery.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Gallery from '../Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Campus & Training')).toBeInTheDocument()
  })

  it('renders 8 gallery placeholder items', () => {
    render(<Gallery />)
    expect(screen.getAllByTestId('gallery-item')).toHaveLength(8)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/Gallery.test.jsx
```

Expected: FAIL — `Cannot find module '../Gallery'`

- [ ] **Step 3: Implement Gallery**

Create `src/components/Gallery.jsx`:

```jsx
const items = [
  'Campus Entrance',
  'Training Room',
  'Welding Workshop',
  'Computer Lab',
  'Electrical Workshop',
  'Classroom',
  'Graduation Ceremony',
  'Student Training',
]

export default function Gallery() {
  return (
    <section className="py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            Our Campus
          </p>
          <h2 className="text-4xl font-bold text-forest">Campus & Training</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((label) => (
            <div
              key={label}
              data-testid="gallery-item"
              className="aspect-square rounded-2xl bg-forest/10 flex items-end p-3"
            >
              <span className="text-forest/50 text-xs font-medium">{label}</span>
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
npx vitest run src/components/__tests__/Gallery.test.jsx
```

Expected: PASS — 2 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Gallery.jsx src/components/__tests__/Gallery.test.jsx
git commit -m "feat: add Gallery section with 8 placeholder image blocks"
```

---

## Task 10: Contact Component

**Files:**
- Create: `src/components/__tests__/Contact.test.jsx`
- Create: `src/components/Contact.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Contact.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Contact from '../Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Enroll or Inquire Today')).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    render(<Contact />)
    expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument()
  })

  it('renders the Full Name field', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
  })

  it('renders the Email Address field', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
  })

  it('renders the Phone Number field', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
  })

  it('renders the Message field', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<Contact />)
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(screen.getByText(/Bohol, Philippines/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/Contact.test.jsx
```

Expected: FAIL — `Cannot find module '../Contact'`

- [ ] **Step 3: Implement Contact**

Create `src/components/Contact.jsx`:

```jsx
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl font-bold text-forest">Enroll or Inquire Today</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-forest bg-beige text-gray-800 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-forest bg-beige text-gray-800 text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+63 900 000 0000"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-forest bg-beige text-gray-800 text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-forest bg-beige text-gray-800 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-forest text-white font-medium hover:bg-forest-light transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-semibold text-forest mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-forest-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600 text-sm">+63 900 000 0000</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-forest-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 text-sm">info@sbrtetci.edu.ph</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-forest-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600 text-sm">Bohol, Philippines</span>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-48 rounded-2xl bg-forest/10 flex items-center justify-center">
              <span className="text-forest/40 text-sm font-medium">Map</span>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="text-forest hover:text-forest-light transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-forest hover:text-forest-light transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                    <circle cx="12" cy="12" r="4" strokeWidth={2} />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-forest hover:text-forest-light transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```powershell
npx vitest run src/components/__tests__/Contact.test.jsx
```

Expected: PASS — 8 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Contact.jsx src/components/__tests__/Contact.test.jsx
git commit -m "feat: add Contact section with form and info column"
```

---

## Task 11: FAQ Component

**Files:**
- Create: `src/components/__tests__/FAQ.test.jsx`
- Create: `src/components/FAQ.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/FAQ.test.jsx`:

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import FAQ from '../FAQ'

describe('FAQ', () => {
  it('renders the section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all 6 questions', () => {
    render(<FAQ />)
    expect(screen.getByText('What is SBR TETCI Bohol?')).toBeInTheDocument()
    expect(screen.getByText('Are your programs TESDA-accredited?')).toBeInTheDocument()
    expect(screen.getByText('How do I enroll?')).toBeInTheDocument()
    expect(screen.getByText('What are the requirements for enrollment?')).toBeInTheDocument()
    expect(screen.getByText('Do you offer scholarship or financial assistance?')).toBeInTheDocument()
    expect(screen.getByText('Where is the school located?')).toBeInTheDocument()
  })

  it('first answer is visible by default', () => {
    render(<FAQ />)
    expect(screen.getByText(/TESDA-accredited technical education/i)).toBeInTheDocument()
  })

  it('clicking the second question shows its answer', () => {
    render(<FAQ />)
    fireEvent.click(screen.getByText('Are your programs TESDA-accredited?'))
    expect(screen.getByText(/all our programs are accredited/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```powershell
npx vitest run src/components/__tests__/FAQ.test.jsx
```

Expected: FAIL — `Cannot find module '../FAQ'`

- [ ] **Step 3: Implement FAQ**

Create `src/components/FAQ.jsx`:

```jsx
import { useState } from 'react'

const faqs = [
  {
    question: 'What is SBR TETCI Bohol?',
    answer:
      'SBR TETCI Bohol is a TESDA-accredited technical education and training center located in Bohol, Philippines. We offer a range of vocational and technical programs designed to prepare students for immediate employment.',
  },
  {
    question: 'Are your programs TESDA-accredited?',
    answer:
      'Yes. All our programs are accredited by the Technical Education and Skills Development Authority (TESDA), ensuring that your qualifications are recognized nationally.',
  },
  {
    question: 'How do I enroll?',
    answer:
      'You can enroll by visiting our campus, filling out the contact form on this page, or calling us directly. Our staff will guide you through the requirements and enrollment process.',
  },
  {
    question: 'What are the requirements for enrollment?',
    answer:
      'Requirements vary by program, but generally include a valid government-issued ID, birth certificate, and high school diploma or equivalent. Contact us for program-specific requirements.',
  },
  {
    question: 'Do you offer scholarship or financial assistance?',
    answer:
      'We work with government agencies and private organizations to offer scholarship opportunities. Ask our staff about currently available scholarships and financial aid options when you visit.',
  },
  {
    question: 'Where is the school located?',
    answer:
      'SBR TETCI Bohol is located in Bohol, Philippines. Use the map in the Contact section for directions, or reach out to us for the exact address.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-beige">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold text-forest">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index
            return (
              <div key={question} className="rounded-2xl bg-white overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-forest font-medium text-sm">{question}</span>
                  <svg
                    className={`w-5 h-5 text-forest shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```powershell
npx vitest run src/components/__tests__/FAQ.test.jsx
```

Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/FAQ.jsx src/components/__tests__/FAQ.test.jsx
git commit -m "feat: add FAQ accordion with 6 items, first open by default"
```

---

## Task 12: Footer Component

**Files:**
- Create: `src/components/__tests__/Footer.test.jsx`
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Footer.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the SBR TETCI Bohol wordmark', () => {
    render(<Footer />)
    expect(screen.getByText('SBR TETCI Bohol')).toBeInTheDocument()
  })

  it('renders the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 SBR TETCI Bohol/i)).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByText('Why Us')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/Building careers through technical excellence/i)).toBeInTheDocument()
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
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <span className="text-white font-bold text-2xl tracking-tight">SBR TETCI Bohol</span>
            <p className="text-white/50 text-sm mt-1">Building careers through technical excellence.</p>
          </div>
          <ul className="flex flex-wrap gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-white/70 text-sm hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                <circle cx="12" cy="12" r="4" strokeWidth={2} />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">© 2026 SBR TETCI Bohol. All rights reserved.</p>
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

Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Footer.jsx src/components/__tests__/Footer.test.jsx
git commit -m "feat: add Footer with wordmark, nav links, social icons, and copyright"
```

---

## Task 13: Assemble App.jsx and Final Verification

**Files:**
- Replace: `src/App.jsx`

- [ ] **Step 1: Run all tests to confirm everything passes before assembly**

```powershell
npx vitest run
```

Expected: All 11 test files pass, 0 failures. If any fail, fix them before continuing.

- [ ] **Step 2: Replace App.jsx to assemble all sections**

Write `src/App.jsx`:

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Statistics from './components/Statistics'
import Programs from './components/Programs'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Programs />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Run all tests again after assembly**

```powershell
npx vitest run
```

Expected: All tests still pass. 0 failures.

- [ ] **Step 4: Start dev server and do a visual walkthrough**

```powershell
npm run dev
```

Open `http://localhost:5173`. Walk through each section top to bottom:

- Navbar is fixed at top, shows "SBR TETCI Bohol" wordmark and nav links
- Hero fills the viewport with beige background and split layout
- About shows two-column layout with mission/vision text and image placeholder
- Statistics shows the forest green band with 4 stats
- Programs shows 6 program cards in a 3-column grid with "Learn More" buttons
- WhyChooseUs shows 6 feature tiles in a 3-column grid
- Testimonials shows 3 student cards with quotes
- Gallery shows the 8-block grid
- Contact shows the two-column form + info layout
- FAQ shows the accordion with first item open
- Footer shows wordmark, nav links, social icons, and copyright

Resize to mobile width (< 768px) and confirm:
- Navbar shows hamburger icon and toggles the mobile menu correctly
- Hero stacks vertically (headline above, no image column)
- About stacks vertically
- Statistics wraps to 2-col grid
- Programs, WhyChooseUs, Testimonials collapse to single column
- Contact stacks vertically
- Footer stacks vertically

Stop the server with `Ctrl+C`.

- [ ] **Step 5: Final commit**

```powershell
git add src/App.jsx
git commit -m "feat: assemble full SBR TETCI Bohol landing page — all 11 sections wired in App.jsx"
```
