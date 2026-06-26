import { useEffect, useRef, useState } from 'react'
import './Nav.css'
import { trackNavClick, trackMobileMenuToggle, trackExternalLink } from '../utils/analytics'
import chiruLogo from '../assets/chiru-trans-logo-website.png'

const HOME_LINKS = [
  ['#films',    'Films'],
  ['#reels',    'Reels'],
  ['#upcoming', 'Upcoming'],
  ['#team',     'Team'],
  ['#audio',    'Soundscapes'],
]

export default function Nav({ page, navigate }) {
  const navRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll-based active link + background darkening — only on home page
  useEffect(() => {
    if (page !== 'home') return
    const nav = navRef.current
    const sections = document.querySelectorAll('section[id]')
    const links = nav.querySelectorAll('.nav-links a[data-anchor]')

    const onScroll = () => {
      if (window.scrollY > 60) {
        nav.style.borderBottomColor = 'rgba(201,147,58,0.2)'
        nav.style.background = 'rgba(10,10,15,0.98)'
      } else {
        nav.style.borderBottomColor = 'rgba(201,147,58,0.12)'
        nav.style.background = 'linear-gradient(180deg,rgba(10,10,15,0.98) 0%,rgba(10,10,15,0.85) 100%)'
      }
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      links.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : ''
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [page])

  const handleLogoClick = (e) => {
    e.preventDefault()
    navigate('home')
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    trackMobileMenuToggle(newState)
  }

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav ref={navRef}>
      <a href="#" className="nav-logo" onClick={handleLogoClick}>
        <img src={chiruLogo} alt="Chiru Productions" className="nav-logo-image" />
        <div className="nav-logo-text">
          Chiru <span>Productions</span>
        </div>
      </a>

      <ul className="nav-links">
        {/* Home section anchor links */}
        {HOME_LINKS.map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              data-anchor="true"
              onClick={(e) => {
                if (page !== 'home') {
                  e.preventDefault()
                  navigate('home')
                  // Let the browser scroll after the home page renders
                  setTimeout(() => {
                    const id = href.slice(1)
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                  }, 80)
                }
              }}
            >
              {label}
            </a>
          </li>
        ))}

        {/* Announcements page link */}
        <li>
          <a
            href="#announcements"
            className={page === 'announcements' ? 'nav-link--active' : ''}
            onClick={(e) => { e.preventDefault(); navigate('announcements') }}
          >
            Announcements
          </a>
        </li>
      </ul>

      {/* Mobile menu toggle button */}
      <button 
        className="nav-mobile-toggle" 
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <a href="https://in.bookmyshow.com" target="_blank" rel="noopener noreferrer" className="nav-cta">Book Screening</a>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'nav-mobile-menu--open' : ''}`}>
        <ul className="nav-mobile-links">
          {/* Home section anchor links */}
          {HOME_LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                data-anchor="true"
                onClick={(e) => {
                  handleMobileLinkClick()
                  if (page !== 'home') {
                    e.preventDefault()
                    navigate('home')
                    // Let the browser scroll after the home page renders
                    setTimeout(() => {
                      const id = href.slice(1)
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }, 80)
                  }
                }}
              >
                {label}
              </a>
            </li>
          ))}

          {/* Announcements page link */}
          <li>
            <a
              href="#announcements"
              className={page === 'announcements' ? 'nav-link--active' : ''}
              onClick={(e) => { 
                e.preventDefault(); 
                navigate('announcements')
                handleMobileLinkClick()
              }}
            >
              Announcements
            </a>
          </li>
        </ul>

        <a 
          href="https://in.bookmyshow.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-mobile-cta"
          onClick={handleMobileLinkClick}
        >
          Book Screening
        </a>
      </div>
    </nav>
  )
}
