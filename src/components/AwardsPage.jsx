import { useEffect, useRef } from 'react'
import './AwardsPage.css'
import { AWARDS } from '../data'

const AWARD_DETAILS = [
  { festival: 'National Film Awards', category: 'Best Picture', year: '2024', icon: '🏆' },
  { festival: 'Filmfare South',       category: 'Best Director', year: '2024', icon: '🎬' },
  { festival: 'Toronto IFF',          category: 'Official Selection', year: '2024', icon: '🌐' },
  { festival: 'Cannes',               category: 'Un Certain Regard', year: '2023', icon: '🌟' },
  { festival: 'SIIMA Awards',         category: 'Best Film', year: '2023', icon: '🏅' },
  { festival: 'Edison Awards',        category: 'Grand Prix', year: '2022', icon: '⚡' },
  { festival: 'Kerala Film Critics',  category: 'Best Cinematography', year: '2023', icon: '📽' },
  { festival: 'Chennai IFF',          category: 'Golden Peacock', year: '2022', icon: '🦚' },
]

export default function AwardsPage({ navigate }) {
  const pageRef = useRef(null)

  useEffect(() => {
    const cards = pageRef.current?.querySelectorAll('.aw-card') ?? []
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
    <main className="aw-page" ref={pageRef}>
      {/* Hero */}
      <div className="aw-hero">
        <div className="aw-hero-overlay" />
        <div className="container aw-hero-content">
          <div className="section-label">Recognition</div>
          <h1 className="aw-title">Awards</h1>
          <p className="aw-subtitle">
            {AWARDS.length} accolades from the world's most prestigious film institutions — and counting.
          </p>
        </div>
      </div>

      {/* Bar */}
      <div className="aw-bar container">
        <button className="aw-back-btn" onClick={() => navigate('home')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Home
        </button>
        <span className="aw-count">{AWARDS.length} Awards</span>
      </div>

      <div className="gold-rule" />

      {/* Grid */}
      <div className="aw-grid container">
        {AWARD_DETAILS.map((award, i) => (
          <div
            className="aw-card fade-in"
            key={i}
            style={{ transitionDelay: `${(i % 4) * 0.07}s` }}
          >
            <div className="aw-card-icon">{award.icon}</div>
            <div className="aw-card-year">{award.year}</div>
            <div className="aw-card-festival">{award.festival}</div>
            <h2 className="aw-card-category">{award.category}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}
