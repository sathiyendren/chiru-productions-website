import './Footer.css'

const SOCIAL = [
  { label: 'Instagram', short: 'IG' },
  { label: 'YouTube',   short: 'YT' },
  { label: 'Twitter/X', short: 'X'  },
  { label: 'Facebook',  short: 'FB' },
]

// Map link label → route key
const LINK_ROUTES = {
  'Current Releases':  'films',
  'Coming Soon':       'coming-soon',
  'Archive':           'archive',
  'International':     'international',
  'Awards':            'awards',
  'About Us':          'about',
  'Team':              'team',
  'Facilities':        'facilities',
  'Careers':           'careers',
  'Press Kit':         'press-kit',
  'Announcements':     'announcements',
  'Screenings':        'screenings',
  'Distribution':      'distribution',
  'Co-Productions':    'co-productions',
  'Media Enquiries':   'media-enquiries',
  'Casting':           'casting',
}

const FOOTER_LINKS = {
  Films:   ['Current Releases', 'Coming Soon', 'Archive', 'International', 'Awards'],
  Studio:  ['About Us', 'Team', 'Facilities', 'Careers', 'Press Kit', 'Announcements'],
  Contact: ['Screenings', 'Distribution', 'Co-Productions', 'Media Enquiries', 'Casting'],
}

export default function Footer({ navigate }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Chiru <span>Productions</span></div>
            <div className="footer-tagline">Cinematic Excellence Since 2025</div>
            <p className="footer-desc">
              We craft stories that transcend borders, illuminate the human condition,
              and endure across generations. Based in South India, reaching the world.
            </p>
            <div className="footer-social">
              {SOCIAL.map(s => (
                <a href="#" className="social-btn" aria-label={s.label} key={s.label}>
                  {s.label === 'Instagram' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ) : s.label === 'YouTube' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 18c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                    </svg>
                  ) : s.label === 'Twitter/X' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  ) : s.label === 'Facebook' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ) : (
                    s.short
                  )}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div className="footer-col-title">{title}</div>
              <ul className="footer-links">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={e => { e.preventDefault(); navigate?.(LINK_ROUTES[link] ?? 'home') }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 <span>Chiru Productions</span>. All rights reserved. Karnataka, India.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
