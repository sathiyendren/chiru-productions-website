import { useEffect, useRef } from 'react'
import './AnnouncementModal.css'

export default function AnnouncementModal({ item, onClose }) {
  const backdropRef = useRef(null)

  // ESC to close
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleBackdrop = (e) => {
    if (e.target === backdropRef.current) onClose()
  }

  return (
    <div
      className="ann-backdrop"
      ref={backdropRef}
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="ann-dialog">
        {/* Close button */}
        <button className="ann-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Image */}
        <div className="ann-img-wrap">
          <img src={item.image} alt={item.title} className="ann-img" />
          <div className="ann-img-overlay" />
          <div className="ann-img-meta">
            <span className="ann-tag">{item.tag}</span>
            <span className="ann-date-badge">{item.displayDate}</span>
          </div>
        </div>

        {/* Body */}
        <div className="ann-body">
          <h2 className="ann-title">{item.title}</h2>
          <div className="ann-divider" />
          <p className="ann-desc">{item.description}</p>
        </div>
      </div>
    </div>
  )
}
