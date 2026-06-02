import { useState, useEffect } from 'react'

export default function Hero() {
  const [maskY, setMaskY] = useState(100)

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      const start = heroHeight * 0.15
      const end = heroHeight * 0.85
      const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)))
      setMaskY(100 - progress * 112)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solidEnd = Math.max(-12, maskY)
  const fadeEnd = solidEnd + 12
  const mask = `linear-gradient(to bottom, black 0%, black ${solidEnd}%, transparent ${fadeEnd}%)`

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-beige" />

      <div
        className="absolute inset-0"
        style={{ maskImage: mask, WebkitMaskImage: mask, willChange: 'mask-image' }}
      >
        <img
          src="/hero-bohol.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <div
            className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-7"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
            <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
              TESDA-Accredited · Bohol, Philippines
            </span>
          </div>

          <h1
            className="hero-fade-up text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg"
            style={{ animationDelay: '0.22s' }}
          >
            Build Your<br />Future with<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              SBR TETCI Bohol
            </span>
          </h1>

          <p
            className="hero-fade-up text-white/75 text-lg leading-relaxed mb-9"
            style={{ animationDelay: '0.36s' }}
          >
            Gain industry-ready technical skills through nationally recognized programs.
            Join hundreds of graduates who built their careers right here in Bohol.
          </p>

          <div
            className="hero-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="https://www.sbrtetci.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-7 py-3 rounded-xl bg-forest text-white font-semibold overflow-hidden shadow-lg shadow-forest/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-forest/50 transition-all duration-200"
            >
              <span className="relative z-10">Enroll Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-forest-light to-forest opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href="#programs"
              className="px-7 py-3 rounded-xl border border-white/35 text-white font-semibold backdrop-blur-sm hover:bg-white/12 hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
