const stats = [
  { value: '500+', label: 'Graduates' },
  { value: '8+', label: 'TESDA Programs' },
  { value: '10+', label: 'Years of Service' },
  { value: 'TESDA', label: 'Accredited' },
]

export default function Statistics() {
  return (
    <section className="py-16 bg-forest">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{value}</div>
              <div className="text-white/60 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
