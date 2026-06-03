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

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            Our Campus
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest">Campus & Training</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(({ label, img }) => (
            <div
              key={label}
              data-testid="gallery-item"
              className="aspect-square rounded-2xl overflow-hidden bg-forest/10 flex items-end relative"
            >
              {img && (
                <img
                  src={img}
                  alt={label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <span className="relative z-10 m-3 px-2 py-0.5 rounded-md bg-black/40 text-white text-xs font-medium backdrop-blur-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
