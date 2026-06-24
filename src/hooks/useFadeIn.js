import { useEffect, useRef } from 'react'

export function useFadeIn() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll ? el.querySelectorAll('.fade-in') : []
    const all = el.classList?.contains('fade-in') ? [el, ...targets] : [...targets]

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.08 }
    )
    all.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
