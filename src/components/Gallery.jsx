const items = [
  'Campus Entrance',
  'Training Room',
  'Welding Workshop',
  'Computer Lab',
  'Electrical Workshop',
  'Classroom',
  'Graduation Ceremony',
  'Student Training',
]

export default function Gallery() {
  return (
    <section className="py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            Our Campus
          </p>
          <h2 className="text-4xl font-bold text-forest">Campus & Training</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((label) => (
            <div
              key={label}
              data-testid="gallery-item"
              className="aspect-square rounded-2xl bg-forest/10 flex items-end p-3"
            >
              <span className="text-forest/50 text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
