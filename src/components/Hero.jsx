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
        <span className="sr-only">Campus Image</span>
        <img
          src="/hero-bohol.png"
          alt=""
          aria-hidden="true"
          className="hero-bg-enter w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 sm:py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          <div
            className="hero-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6"
            style={{ animationDelay: '0.25s' }}
          >
            <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
            <span className="text-white/90 text-[10px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-widest">
              TESDA-Accredited · Bohol, Philippines
            </span>
          </div>

          <h1
            className="hero-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white from-40% to-emerald-300 leading-[1.1] mb-5"
            style={{ animationDelay: '0.42s' }}
          >
            {'Build Your '}
            <br />
            {'Future with '}
            <br />
            {'SBR TETCI Bohol'}
          </h1>

          <p
            className="hero-fade-up text-white/75 text-base sm:text-lg leading-relaxed mb-7"
            style={{ animationDelay: '0.58s' }}
          >
            Gain industry-ready technical skills through nationally recognized programs.
            Join hundreds of graduates who built their careers right here in Bohol.
          </p>

          <div
            className="hero-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: '0.74s' }}
          >
            {/* Primary CTA with shimmer */}
            <a
              href="#contact"
              className="group relative px-7 py-3 rounded-xl bg-forest text-white font-semibold overflow-hidden shadow-lg shadow-forest/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-forest/50 active:scale-95 transition-all duration-200"
            >
              <span className="shimmer-sweep absolute inset-0 pointer-events-none z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-light to-forest opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />
              <span className="relative z-20">Enroll Now</span>
            </a>

            {/* Ghost CTA */}
            <a
              href="#programs"
              className="relative px-7 py-3 rounded-xl border border-white/35 text-white font-semibold backdrop-blur-sm overflow-hidden hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — fades once user starts scrolling */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500 pointer-events-none"
        style={{ opacity: maskY >= 95 ? 1 : 0 }}
      >
        <div className="animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
