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
                aria-hidden="true"
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
