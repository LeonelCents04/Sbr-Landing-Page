import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, { duration = 1200, start = false } = {}) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!start) return
    // Skip animation in test environments (no IntersectionObserver) or when user prefers reduced motion
    const noAnimation =
      typeof IntersectionObserver === 'undefined' ||
      (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false)
    if (noAnimation) {
      setCount(target)
      return
    }
    let startTime = null
    function step(ts) {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.round(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [start, target, duration])

  return count
}
