import { useRef, useEffect, useState } from 'react'
import './Films.css'
import { FILMS } from '../data'
import TrailerModal from './TrailerModal'

function FilmCard({ film, featured, onPlay }) {
  return (
    <div
      className={`film-card${featured ? ' film-featured' : ''}`}
      onClick={() => film.trailerId && onPlay(film)}
      style={{ cursor: film.trailerId ? 'pointer' : 'default' }}
    >
      <div className={`film-card-bg ${film.bgClass}`}>
        {film.image && (
          <img
            src={film.image}
            alt={film.title}
            className="film-card-img"
            loading="lazy"
            draggable="false"
          />
        )}
      </div>
      <div className="film-card-overlay" />
      {film.award && <div className="film-award">{film.award}</div>}
      {film.trailerId && <div className="film-play-btn" aria-hidden="true" />}
      {featured && (
        <svg className="film-grid-lines" viewBox="0 0 560 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <line x1="0" y1="140" x2="560" y2="140" stroke="#C9933A" strokeWidth="0.5"/>
          <line x1="0" y1="280" x2="560" y2="280" stroke="#C9933A" strokeWidth="0.5"/>
          <line x1="0" y1="420" x2="560" y2="420" stroke="#C9933A" strokeWidth="0.5"/>
          <line x1="140" y1="0" x2="140" y2="560" stroke="#C9933A" strokeWidth="0.5"/>
          <line x1="280" y1="0" x2="280" y2="560" stroke="#C9933A" strokeWidth="0.5"/>
          <line x1="420" y1="0" x2="420" y2="560" stroke="#C9933A" strokeWidth="0.5"/>
          <circle cx="280" cy="280" r="160" stroke="#C9933A" strokeWidth="0.5" fill="none"/>
          <circle cx="280" cy="280" r="80" stroke="#C9933A" strokeWidth="0.5" fill="none"/>
        </svg>
      )}
      <div className="film-info">
        <div className="film-genre">{film.genre} · {film.year}</div>
        <div className={`film-title${featured ? ' film-title-featured' : ''}`}>{film.title}</div>
        <div className="film-meta">
          {film.director && <><span>{film.director}</span><span>·</span></>}
          <span>{film.duration}</span>
          <span>·</span>
          <span className="film-rating">★ {film.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default function Films({ navigate }) {
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

  const featured  = FILMS.find(f => f.featured)
  const secondary = FILMS.filter(f => !f.featured)

  return (
    <>
      <section id="films" className="section" ref={sectionRef}>
        <div className="container">
          <div className="section-header fade-in">
            <div>
              <div className="section-label">Featured Works</div>
              <h2 className="section-title">Our Films</h2>
            </div>
            <button
              className="view-all"
              onClick={() => navigate('films')}
            >View Full Films</button>
          </div>
        </div>
        <div className="films-grid fade-in">
          <FilmCard film={featured} featured onPlay={f => setActive(f)} />
          <div className="films-secondary">
            {secondary.map(film => (
              <FilmCard key={film.id} film={film} onPlay={f => setActive(f)} />
            ))}
          </div>
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
