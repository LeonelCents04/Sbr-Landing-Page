import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.3)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-forest/10 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" aria-label="SBR TETCI Bohol" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="SBR TETCI Bohol logo"
            className="h-10 w-auto"
          />
          <span className={`text-base font-bold leading-tight transition-colors duration-500 ${
            scrolled ? 'text-forest' : 'text-white'
          }`}>
            SBR TETCI Bohol
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav-link text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-600 hover:text-forest' : 'text-white/90 hover:text-white'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.sbrtetci.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-forest text-white hover:bg-forest-light active:scale-95 transition-all duration-200"
        >
          Enroll Now
        </a>

        <button
          className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-forest' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
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
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-forest/10 px-6 py-4 flex flex-col gap-4 menu-enter">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className="text-sm text-gray-600 hover:text-forest transition-colors"
              style={{ animation: `menu-item-in 200ms cubic-bezier(0.16,1,0.3,1) ${i * 45}ms both` }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://www.sbrtetci.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-forest text-white text-sm font-medium hover:bg-forest-light active:scale-95 transition-all duration-200"
            style={{ animation: `menu-item-in 200ms cubic-bezier(0.16,1,0.3,1) ${navLinks.length * 45}ms both` }}
            onClick={() => setMenuOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  )
}
