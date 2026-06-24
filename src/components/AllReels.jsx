import { useState, useEffect, useRef } from 'react'
import './AllReels.css'
import { REELS } from '../data'
import TrailerModal from './TrailerModal'

const TYPES = ['All', ...Array.from(new Set(REELS.map(r => r.type)))]

export default function AllReels({ navigate }) {
  const [activeType, setActiveType] = useState('All')
  const [trailer, setTrailer]       = useState(null)
  const pageRef = useRef(null)

  const filtered = activeType === 'All'
    ? REELS
    : REELS.filter(r => r.type === activeType)

  useEffect(() => {
    const cards = pageRef.current?.querySelectorAll('.ar-card') ?? []
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.06 }
    )
    cards.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <main className="ar-page" ref={pageRef}>
      {/* ── Hero ── */}
      <div className="ar-hero">
        <div className="ar-hero-overlay" />
        <div className="container ar-hero-content">
          <div className="section-label">Behind the Lens</div>
          <h1 className="ar-page-title">Production Reels</h1>
          <p className="ar-page-sub">
            Every reel from Chiru Productions — {REELS.length} productions spanning showreels, BTS, VFX, and more.
          </p>
        </div>
      </div>

      {/* ── Controls bar ── */}
      <div className="ar-controls container">
        <button className="ar-back-btn" onClick={() => navigate('home')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Home
        </button>

        <div className="ar-type-filters">
          {TYPES.map(t => (
            <button
              key={t}
              className={`ar-type-btn${activeType === t ? ' ar-type-btn--active' : ''}`}
              onClick={() => setActiveType(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <span className="ar-count">{filtered.length} reel{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="gold-rule" />

      {/* ── Grid ── */}
      <div className="ar-grid container">
        {filtered.map((reel, i) => (
          <div
            className="ar-card fade-in"
            key={reel.id}
            style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
            onClick={() => reel.trailerId && setTrailer(reel)}
          >
            <div className="ar-card-thumb">
              {reel.image && (
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="ar-card-img"
                  loading="lazy"
                  draggable="false"
                />
              )}
              <div className={`ar-card-bg ${reel.bgClass}`} />
              <div className="ar-card-overlay" />

              {reel.trailerId && (
                <div className="ar-card-play" aria-hidden="true" />
              )}

              <span className="ar-card-duration">{reel.duration}</span>
            </div>

            <div className="ar-card-info">
              <div className="ar-card-type">{reel.type}</div>
              <h2 className="ar-card-title">{reel.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {trailer && (
        <TrailerModal
          videoId={trailer.trailerId}
          title={trailer.title}
          onClose={() => setTrailer(null)}
        />
      )}
    </main>
  )
}
