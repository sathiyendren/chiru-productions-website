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
            <div className="footer-tagline">Cinematic Excellence Since 2026</div>
            <p className="footer-desc">
              We craft stories that transcend borders, illuminate the human condition,
              and endure across generations. Based in Karnataka, reaching the world.
            </p>
            <div className="footer-social">
              {SOCIAL.map(s => (
                <a href="#" className="social-btn" aria-label={s.label} key={s.label}>
                  {s.short}
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
