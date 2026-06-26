import { useEffect, useRef, useState, useCallback } from 'react'
import './Hero.css'
import chiruLogoVideo from '../assets/chiru-logo.mp4'
import { trackNavClick, trackExternalLink } from '../utils/analytics'

export default function Hero() {
  const videoRef = useRef(null)

  // Browsers block autoplay-with-sound until the user has interacted.
  // We start muted so autoplay works, then unmute once the user clicks the
  // sound button. Any subsequent scroll / click / keydown mutes again.
  const [muted, setMuted]           = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(false) // has the user ever unmuted?
  const [showHint, setShowHint]     = useState(true)      // "click to enable sound" hint
  const [showContent, setShowContent] = useState(false)   // hero content appears after 10s

  // ── Show all hero content after 8 seconds ──────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 8000)
    return () => clearTimeout(t)
  }, [])

  // ── Mute the video and mark as auto-muted-by-interaction ────────────
  const muteByInteraction = useCallback(() => {
    if (!soundEnabled) return          // user never unmuted — nothing to do
    const vid = videoRef.current
    if (!vid || vid.muted) return      // already muted
    vid.muted = true
    setMuted(true)
  }, [soundEnabled])

  // ── Attach scroll / click / keydown listeners to mute on interaction ─
  useEffect(() => {
    const events = ['scroll', 'keydown', 'click']

    const handle = (e) => {
      // Ignore clicks on the sound-toggle button itself (handled separately)
      if (e.target?.closest?.('.hero-sound-btn')) return
      muteByInteraction()
    }

    events.forEach(ev => window.addEventListener(ev, handle, { passive: true }))
    return () => events.forEach(ev => window.removeEventListener(ev, handle))
  }, [muteByInteraction])

  // ── Hide the "sound" hint after 6 s if the user hasn't clicked it ───
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 6000)
    return () => clearTimeout(t)
  }, [])

  // ── Toggle mute / unmute on sound button click ───────────────────────
  const handleSoundToggle = (e) => {
    e.stopPropagation()
    const vid = videoRef.current
    if (!vid) return

    if (vid.muted) {
      vid.muted = false
      setMuted(false)
      setSoundEnabled(true)
      setShowHint(false)
    } else {
      vid.muted = true
      setMuted(true)
    }
  }

  return (
    <section id="hero">
      {/* ── Video background ── */}
      <video
        ref={videoRef}
        className="hero-video"
        src={chiruLogoVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark tint directly over video */}
      <div className="hero-video-tint" aria-hidden="true" />

      <div className="hero-overlay" aria-hidden="true" />

      {/* ── Sound toggle button (top-right of hero) ── */}
      <button
        className={`hero-sound-btn${showHint && muted ? ' hero-sound-btn--hint' : ''}`}
        onClick={handleSoundToggle}
        aria-label={muted ? 'Enable sound' : 'Mute'}
        title={muted ? 'Enable sound' : 'Mute (auto-mutes on scroll or interaction)'}
      >
        {muted ? (
          /* Muted icon */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          /* Sound-on icon */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
        {showHint && muted && (
          <span className="hero-sound-hint">Click to enable sound</span>
        )}
      </button>

      <div className={`hero-content container${showContent ? ' hero-content--visible' : ''}`}>
        <div className="hero-eyebrow">Est. 2025 — Karnataka, India</div>
        <h1 className="hero-title">
          Stories That<br /><span>Move</span> The World
        </h1>
        <p className="hero-subtitle">
          Award-winning cinematic productions crafted with vision, precision,
          and a relentless passion for the art of storytelling.
        </p>
        <div className="hero-actions">
          <a 
            href="#films" 
            className="btn-primary"
            onClick={() => trackNavClick('explore_films_cta')}
          >Explore Our Films</a>
          <a 
            href="#reels" 
            className="btn-ghost"
            onClick={() => trackNavClick('watch_showreel_cta')}
          >
            <span className="play-icon" />
            Watch Showreel
          </a>
        </div>
        {/* Stats bar hidden
        <div className="hero-stats">
          {[
            { num: '48',  label: 'Films Produced' },
            { num: '127', label: 'Awards Won' },
            { num: '23',  label: 'Countries Screened' },
            { num: '16',  label: 'Years of Excellence' },
          ].map(({ num, label }) => (
            <div className="hero-stat" key={label}>
              <div className="hero-stat-num">{num}</div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  )
}
