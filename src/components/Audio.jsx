import { useRef, useEffect, useState } from 'react'
import './Audio.css'
import { TRACKS, WAVE_HEIGHTS, WAVE_ANIMS, BAR_HEIGHTS } from '../data'
import TrailerModal from './TrailerModal'

function TrackRow({ track, index, onPlay }) {
  return (
    <div className="track-row" onClick={() => track.youtubeId && onPlay(track)} style={{ cursor: track.youtubeId ? 'pointer' : 'default' }}>
      <div className="track-num-wrap">
        <div className="track-num">{String(index + 1).padStart(2, '0')}</div>
        <div className="track-play-btn" aria-hidden="true" />
      </div>
      <div>
        <div className="track-title">{track.title}</div>
        <div className="track-film">
          <span className="track-film-name">{track.film}</span>
        </div>
      </div>
      <div className="track-waves">
        {WAVE_HEIGHTS.map((h, i) => (
          <div className="track-wave-bar" key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="track-duration">{track.duration}</div>
    </div>
  )
}

function Waveform() {
  return (
    <div className="waveform">
      {BAR_HEIGHTS.map((h, i) => {
        const anim = WAVE_ANIMS[i % WAVE_ANIMS.length]
        const delay = (i * 0.07).toFixed(2)
        const dur   = (0.6 + (i % 5) * 0.15).toFixed(2)
        return (
          <div
            className="waveform-bar"
            key={i}
            style={{
              height: `${h}%`,
              animation: `${anim} ${dur}s ${delay}s ease-in-out infinite`,
            }}
          />
        )
      })}
    </div>
  )
}

export default function Audio() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(null)

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
    <section id="audio" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <div>
            <div className="section-label">Sonic Landscapes</div>
            <h2 className="section-title">Soundscapes</h2>
          </div>
          <a href="#" className="view-all">Full Discography</a>
        </div>
        <div className="audio-layout fade-in">
          {/* Tracklist */}
          <div className="tracklist">
            <div className="tracklist-header">
              <span className="tracklist-header-label">#</span>
              <span className="tracklist-header-label">Track</span>
              <span className="tracklist-header-label">Waves</span>
              <span className="tracklist-header-label tracklist-header-label--right">Duration</span>
            </div>
            {TRACKS.map((track, i) => (
              <TrackRow key={track.id} track={track} index={i} onPlay={setActive} />
            ))}
          </div>

          {/* Featured OST */}
          <div className="ost-card">
            <div className="ost-label">Featured OST</div>
            <div className="ost-art">
              <div className="ost-art-title">KALAM<br />MAARI<br />POCHCHU</div>
            </div>
            <div className="ost-title">Kalam Maari Pochchu</div>
            <div className="ost-composer">Original Score by <span>A.R. Srinivas</span></div>
            <Waveform />
            <div className="ost-controls">
              <button className="ost-play" aria-label="Play" />
              <div className="ost-track-info">
                <div className="ost-track-name">Mazhaikkaalam</div>
                <div className="ost-track-time">1:24 / 4:07</div>
              </div>
            </div>
            <div className="ost-progress">
              <div className="ost-progress-fill" />
            </div>
          </div>
        </div>
      </div>
    </section>

      {active && (
        <TrailerModal
          videoId={active.youtubeId}
          title={`${active.title} — ${active.film}`}
          onClose={() => setActive(null)}
        />
      )}
    </>
  )
}
