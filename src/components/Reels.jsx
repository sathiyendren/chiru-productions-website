import { useRef, useEffect, useState } from 'react'
import './Reels.css'
import { REELS } from '../data'
import TrailerModal from './TrailerModal'

export default function Reels({ navigate }) {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(null) // { trailerId, title }

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
    <>
      <section id="reels" className="section" ref={sectionRef}>
        <div className="container">
          <div className="section-header fade-in">
            <div>
              <div className="section-label">Behind the Lens</div>
              <h2 className="section-title">Production Reels</h2>
            </div>
            <button
              className="view-all"
              onClick={() => navigate('reels')}
            >View All Reels</button>
          </div>
        </div>
        <div className="reels-grid">
          {REELS.map((reel, i) => (
            <div
              className={`reel-card fade-in${i > 0 ? ` fade-in-delay-${i}` : ''}`}
              key={reel.id}
              onClick={() => reel.trailerId && setActive(reel)}
              style={{ cursor: reel.trailerId ? 'pointer' : 'default' }}
            >
              <div className={`reel-bg ${reel.bgClass}`}>
                {reel.image && (
                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="reel-img"
                    loading="lazy"
                    draggable="false"
                  />
                )}
              </div>
              <div className="reel-overlay" />
              <div className="reel-play" aria-hidden="true" />
              <span className="reel-duration">{reel.duration}</span>
              <div className="reel-info">
                <div className="reel-type">{reel.type}</div>
                <div className="reel-title">{reel.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {active && (
        <TrailerModal
          videoId={active.trailerId}
          title={active.title}
          onClose={() => setActive(null)}
        />
      )}
    </>
  )
}
