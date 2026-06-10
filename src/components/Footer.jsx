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
            <div className="flex items-center gap-2.5 mb-1">
              <img src="/logo.png" alt="SBR TETCI Bohol logo" className="h-10 w-auto brightness-0 invert" />
              <span className="text-sm font-bold text-white leading-tight">SBR TETCI Bohol</span>
            </div>
            <p className="text-white/50 text-sm mt-1">Building careers through technical excellence.</p>
          </div>
          <ul className="flex flex-wrap gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="nav-link text-white/70 text-sm hover:text-white transition-colors duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/sbrtetcibohol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/60 hover:text-white hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sbrtetci"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/60 hover:text-white hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                <circle cx="12" cy="12" r="4" strokeWidth={2} />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com/sbrtetci"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white/60 hover:text-white hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} SBR TETCI Bohol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
