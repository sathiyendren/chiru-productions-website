import { useEffect, useRef } from 'react'
import './ComingSoon.css'
import { UPCOMING } from '../data'

const STATUS_COLOR = {
  post:       '#C9933A',
  complete:   '#2ecc71',
  production: '#C0152A',
  announced:  '#3A3A48',
}

export default function ComingSoon({ navigate }) {
  const pageRef = useRef(null)

  useEffect(() => {
    const cards = pageRef.current?.querySelectorAll('.cs-card') ?? []
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
    <main className="cs-page" ref={pageRef}>
      {/* Hero */}
      <div className="cs-hero">
        <div className="cs-hero-overlay" />
        <div className="container cs-hero-content">
          <div className="section-label">Upcoming Slate</div>
          <h1 className="cs-title">Coming Soon</h1>
          <p className="cs-subtitle">
            {UPCOMING.length} productions in our pipeline — from post-production to announced projects.
          </p>
        </div>
      </div>

      {/* Bar */}
      <div className="cs-bar container">
        <button className="cs-back-btn" onClick={() => navigate('home')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Home
        </button>
      </div>

      <div className="gold-rule" />

      {/* Cards */}
      <div className="cs-grid container">
        {UPCOMING.map((film, i) => (
          <div
            className="cs-card fade-in"
            key={film.id}
            style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
          >
            <div
              className="cs-card-status-bar"
              style={{ background: STATUS_COLOR[film.status] ?? 'var(--steel)' }}
            />
            <div className="cs-card-inner">
              <div className="cs-card-meta">
                <span className="cs-card-genre">{film.genre}</span>
                <span
                  className="cs-card-badge"
                  style={{ background: STATUS_COLOR[film.status] ?? 'var(--steel)' }}
                >
                  {film.statusLabel}
                </span>
              </div>
              <h2 className="cs-card-title">{film.title}</h2>
              <div className="cs-card-details">
                {film.director && <span className="cs-card-director">{film.director}</span>}
                <span className="cs-card-date">{film.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
