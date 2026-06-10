import { useInView } from '../hooks/useInView'

const items = [
  { label: 'Campus Entrance',     img: '/images/building/Gemini_Generated_Image_3utx0i3utx0i3utx.png' },
  { label: 'Training Room',       img: '/images/training/download.jpg' },
  { label: 'Welding Workshop',    img: '/images/welding-workshop/7ef6616d-4ebe-4fbb-8441-1ab8601426d0.jpg' },
  { label: 'Computer Lab',        img: '/images/comlab/e9d90d69-3cbe-4bc9-ae9e-a9a0ade9589e.jpg' },
  { label: 'Electrical Workshop', img: '/images/eim/491421508_1122162209927803_8457322739290891179_n.jpg' },
  { label: 'Classroom',           img: '/images/classroom/491984406_1125990356211655_731571503159521262_n.jpg' },
  { label: 'Graduation Ceremony', img: '/images/graduation/490959241_1122198773257480_8834080842989588870_n.jpg' },
  { label: 'Student Training',    img: '/images/students/491917725_1122261576584533_8712109551692055580_n.jpg' },
]

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function Gallery() {
  const [headingRef, headingInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section id="gallery" className="py-16 md:py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6">

        <div
          ref={headingRef}
          className="text-center mb-10 md:mb-16 reveal"
          style={{ ...(headingInView && { opacity: 1, transform: 'none' }) }}
        >
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            Our Campus
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest">Campus &amp; Training</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(({ label, img }, i) => (
            <div
              key={label}
              data-testid="gallery-item"
              className="group aspect-square rounded-2xl overflow-hidden bg-forest/10 flex items-end relative cursor-pointer"
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? 'none' : 'scale(0.94)',
                transition: `opacity 550ms ${EASE}, transform 550ms ${EASE}`,
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {img && (
                <img
                  src={img}
                  alt={label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              )}
              {/* Hover tint overlay */}
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/25 transition-colors duration-300" />
              <span className="relative z-10 m-3 px-2 py-0.5 rounded-md bg-black/40 text-white text-xs font-medium backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
