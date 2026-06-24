import { useEffect, useRef, useState, useCallback } from 'react'
import './TrailerModal.css'

// Send a command to the embedded YouTube player via postMessage
function ytCmd(iframe, func, args = '') {
  iframe?.contentWindow?.postMessage(
    JSON.stringify({ event: 'command', func, args }),
    '*'
  )
}

export default function TrailerModal({ videoId, title, onClose }) {
  const iframeRef  = useRef(null)
  const backdropRef = useRef(null)
  const [playing,  setPlaying]  = useState(true)
  const [maximized, setMaximized] = useState(false)

  // ── Close on ESC ──────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // ── Lock body scroll while modal is open ──────────────────────────
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // ── Controls ──────────────────────────────────────────────────────
  const handlePlay = useCallback(() => {
    ytCmd(iframeRef.current, 'playVideo')
    setPlaying(true)
  }, [])

  const handlePause = useCallback(() => {
    ytCmd(iframeRef.current, 'pauseVideo')
    setPlaying(false)
  }, [])

  const handleStop = useCallback(() => {
    ytCmd(iframeRef.current, 'stopVideo')
    setPlaying(false)
  }, [])

  const handlePlayPause = useCallback(() => {
    if (playing) handlePause()
    else         handlePlay()
  }, [playing, handlePlay, handlePause])

  const handleMaximize = useCallback(() => {
    const el = iframeRef.current
    if (!el) return
    const req = el.requestFullscreen
      ?? el.webkitRequestFullscreen
      ?? el.mozRequestFullScreen
      ?? el.msRequestFullscreen
    if (req) req.call(el)
    else setMaximized(m => !m)
  }, [])

  // ── Backdrop click closes (but not clicks inside the dialog) ──────
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose()
  }

  // YouTube embed URL — enablejsapi=1 lets us send postMessage commands
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&playsinline=1`

  return (
    <div
      className={`trailer-backdrop${maximized ? ' trailer-backdrop--max' : ''}`}
      ref={backdropRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Trailer: ${title}`}
    >
      <div className={`trailer-dialog${maximized ? ' trailer-dialog--max' : ''}`}>

        {/* ── Header bar ── */}
        <div className="trailer-header">
          <div className="trailer-header-left">
            <span className="trailer-label">Trailer</span>
            <span className="trailer-title">{title}</span>
          </div>
          <button className="trailer-close-btn" onClick={onClose} aria-label="Close trailer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* ── Video ── */}
        <div className="trailer-video-wrap">
          <iframe
            ref={iframeRef}
            className="trailer-iframe"
            src={src}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* ── Control bar ── */}
        <div className="trailer-controls">
          {/* Stop */}
          <button className="tctrl-btn" onClick={handleStop} aria-label="Stop">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
            </svg>
            <span>Stop</span>
          </button>

          {/* Play / Pause */}
          <button
            className="tctrl-btn tctrl-btn--primary"
            onClick={handlePlayPause}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1"/>
                  <rect x="14" y="4" width="4" height="16" rx="1"/>
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
                <span>Play</span>
              </>
            )}
          </button>

          <div className="tctrl-spacer" />

          {/* Maximize / Fullscreen */}
          <button className="tctrl-btn" onClick={handleMaximize} aria-label="Fullscreen">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"/>
              <polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/>
              <line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
            <span>Fullscreen</span>
          </button>

          {/* Close */}
          <button className="tctrl-btn tctrl-btn--danger" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  )
}
