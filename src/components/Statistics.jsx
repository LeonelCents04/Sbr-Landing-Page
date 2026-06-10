import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { value: '500+', label: 'Graduates' },
  { value: '8+', label: 'TESDA Programs' },
  { value: '10+', label: 'Years of Service' },
  { value: 'TESDA', label: 'Accredited' },
]

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

function StatItem({ value, label, inView, index }) {
  const numMatch = value.match(/^(\d+)/)
  const numTarget = numMatch ? parseInt(numMatch[1], 10) : null
  const suffix = numTarget !== null ? value.slice(String(numTarget).length) : ''
  const count = useCountUp(numTarget ?? 0, { duration: 1400, start: inView && numTarget !== null })

  return (
    <div
      className="text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 600ms ${EASE}, transform 600ms ${EASE}`,
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {numTarget !== null ? `${count}${suffix}` : value}
      </div>
      <div className="text-white/60 text-sm font-medium">{label}</div>
    </div>
  )
}

export default function Statistics() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-12 md:py-16 bg-forest">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ value, label }, i) => (
            <StatItem key={label} value={value} label={label} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
