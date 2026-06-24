import { useState, useEffect, useRef } from 'react'
import './AllFilms.css'
import { FILMS } from '../data'
import TrailerModal from './TrailerModal'

const GENRES = ['All', ...Array.from(new Set(FILMS.map(f => f.genre)))]

export default function AllFilms({ navigate }) {
  const [activeGenre, setActiveGenre] = useState('All')
  const [trailer, setTrailer]         = useState(null)
  const pageRef = useRef(null)

  const filtered = activeGenre === 'All'
    ? FILMS
    : FILMS.filter(f => f.genre === activeGenre)

  useEffect(() => {
    const cards = pageRef.current?.querySelectorAll('.af-card') ?? []
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
    <main className="af-page" ref={pageRef}>
      {/* ── Hero ── */}
      <div className="af-hero">
        <div className="af-hero-overlay" />
        <div className="container af-hero-content">
          <div className="section-label">Complete Collection</div>
          <h1 className="af-page-title">All Films</h1>
          <p className="af-page-sub">
            Every production from Chiru Productions — {FILMS.length} films spanning drama, action, romance, mystery, and beyond.
          </p>
        </div>
      </div>

      {/* ── Controls bar ── */}
      <div className="af-controls container">
        <button className="af-back-btn" onClick={() => navigate('home')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Home
        </button>

        <div className="af-genre-filters">
          {GENRES.map(g => (
            <button
              key={g}
              className={`af-genre-btn${activeGenre === g ? ' af-genre-btn--active' : ''}`}
              onClick={() => setActiveGenre(g)}
            >
              {g}
            </button>
          ))}
        </div>

        <span className="af-count">{filtered.length} film{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="gold-rule" />

      {/* ── Grid ── */}
      <div className="af-grid container">
        {filtered.map((film, i) => (
          <article
            className="af-card fade-in"
            key={film.id}
            style={{ transitionDelay: `${(i % 4) * 0.07}s` }}
            onClick={() => film.trailerId && setTrailer(film)}
          >
            {/* Poster image */}
            <div className="af-card-poster">
              {film.image && (
                <img
                  src={film.image}
                  alt={film.title}
                  className="af-card-img"
                  loading="lazy"
                  draggable="false"
                />
              )}
              <div className={`af-card-poster-bg ${film.bgClass}`} />
              <div className="af-card-poster-overlay" />

              {/* Play button */}
              {film.trailerId && (
                <div className="af-card-play" aria-hidden="true" />
              )}

              {/* Award badge */}
              {film.award && (
                <span className="af-card-award">{film.award}</span>
              )}
            </div>

            {/* Info */}
            <div className="af-card-info">
              <div className="af-card-genre">{film.genre} · {film.year}</div>
              <h2 className="af-card-title">{film.title}</h2>
              <div className="af-card-meta">
                {film.director && <span>{film.director}</span>}
                <span>{film.duration}</span>
                <span className="af-card-rating">★ {film.rating}</span>
              </div>
            </div>
          </article>
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
