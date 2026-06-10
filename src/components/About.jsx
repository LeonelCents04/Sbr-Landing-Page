import { useInView } from '../hooks/useInView'

const highlights = [
  'TESDA-accredited programs recognized nationwide',
  'Practical, hands-on training with real tools and equipment',
  'Dedicated instructors with industry experience',
]

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-16 md:py-24 bg-beige">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center"
      >
        {/* Left column — slides from left */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(-40px)',
            transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
          }}
        >
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest mb-6">Who We Are</h2>
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
            {highlights.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'translateY(12px)',
                  transition: `opacity 500ms ease, transform 500ms ease`,
                  transitionDelay: `${320 + i * 80}ms`,
                }}
              >
                <svg
                  className="w-5 h-5 text-forest-light mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — slides from right with scale */}
        <div
          className="flex items-center justify-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(40px) scale(0.96)',
            transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
            transitionDelay: '150ms',
          }}
        >
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden">
            <span className="sr-only">Image placeholder</span>
            <img
              src="/about-photo.jpg"
              alt="SBR TETCI director"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-forest/10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-beige/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
