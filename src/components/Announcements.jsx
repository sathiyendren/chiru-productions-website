import { useState, useEffect, useRef } from 'react'
import './Announcements.css'
import { ANNOUNCEMENTS } from '../data'
import AnnouncementModal from './AnnouncementModal'

export default function Announcements({ navigate }) {
  const [active, setActive] = useState(null)
  const pageRef = useRef(null)

  // Fade-in cards on mount
  useEffect(() => {
    const cards = pageRef.current?.querySelectorAll('.ann-card') ?? []
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.06 }
    )
    cards.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="ann-page" ref={pageRef}>
      {/* ── Page header ── */}
      <div className="ann-page-hero">
        <div className="ann-page-hero-overlay" />
        <div className="container ann-page-hero-content">
          <div className="section-label">Latest News</div>
          <h1 className="ann-page-title">Announcements</h1>
          <p className="ann-page-sub">
            Production updates, festival selections, awards, and studio news —
            all in one place, newest first.
          </p>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="ann-breadcrumb container">
        <button className="ann-back-btn" onClick={() => navigate('home')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Home
        </button>
        <span className="ann-breadcrumb-sep">/</span>
        <span className="ann-breadcrumb-current">Announcements</span>
        <span className="ann-count">{ANNOUNCEMENTS.length} entries</span>
      </div>

      {/* ── Card grid ── */}
      <div className="container ann-grid">
        {ANNOUNCEMENTS.map((item, i) => (
          <article
            className={`ann-card fade-in${i < 3 ? ` fade-in-delay-${i}` : ''}`}
            key={item.id}
            onClick={() => setActive(item)}
            tabIndex={0}
            role="button"
            aria-label={`Read more: ${item.title}`}
            onKeyDown={e => e.key === 'Enter' && setActive(item)}
          >
            {/* Thumbnail */}
            <div className="ann-card-img-wrap">
              <img
                src={item.image}
                alt={item.title}
                className="ann-card-img"
                loading="lazy"
              />
              <div className="ann-card-img-tint" />
              <span className="ann-card-tag">{item.tag}</span>
            </div>

            {/* Info */}
            <div className="ann-card-body">
              <div className="ann-card-date">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {item.displayDate}
              </div>
              <h2 className="ann-card-title">{item.title}</h2>
              <p className="ann-card-excerpt">
                {item.description.slice(0, 140).trimEnd()}…
              </p>
              <div className="ann-card-cta">
                Read Full Announcement
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Detail modal ── */}
      {active && (
        <AnnouncementModal item={active} onClose={() => setActive(null)} />
      )}
    </main>
  )
}
