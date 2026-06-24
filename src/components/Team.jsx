import { useRef, useEffect } from 'react'
import './Team.css'
import { TEAM } from '../data'

export default function Team() {
  const sectionRef = useRef(null)

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
    <section id="team" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <div>
            <div className="section-label">The Visionaries</div>
            <h2 className="section-title">Production Team</h2>
          </div>
          <a href="#" className="view-all">Full Credits</a>
        </div>
        <div className="team-grid">
          {TEAM.map((member, i) => (
            <div
              className={`team-card fade-in${i > 0 ? ` fade-in-delay-${i}` : ''}`}
              key={member.id}
            >
              <div className="team-avatar">{member.initials}</div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
              <div className="team-genres">
                {member.genres.map(g => (
                  <span className="team-genre-tag" key={g}>{g}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
