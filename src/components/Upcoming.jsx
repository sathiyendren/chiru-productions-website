import { useRef, useEffect } from 'react'
import './Upcoming.css'
import { UPCOMING } from '../data'

export default function Upcoming() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const targets = el.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="upcoming" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <div>
            <div className="section-label">Coming Soon</div>
            <h2 className="section-title">Upcoming Releases</h2>
          </div>
          <a href="#" className="view-all">Full Pipeline</a>
        </div>
        <div className="upcoming-grid fade-in">
          {UPCOMING.map((item, i) => (
            <div className="upcoming-item" key={item.id}>
              <div className="upcoming-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="upcoming-title">{item.title}</div>
                <div className="upcoming-meta">
                  <span className="upcoming-date">{item.date}</span>
                  <span>Dir. {item.director} · {item.genre}</span>
                </div>
              </div>
              <div className={`upcoming-status status-${item.status}`}>
                {item.statusLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
