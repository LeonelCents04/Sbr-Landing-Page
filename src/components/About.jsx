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
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-full aspect-square max-w-md rounded-3xl bg-forest/15 flex items-center justify-center">
            <span className="text-forest/40 text-sm font-medium">Image placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
