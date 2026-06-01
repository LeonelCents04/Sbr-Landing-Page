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
            Gain industry-ready technical skills through nationally recognized programs.
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
