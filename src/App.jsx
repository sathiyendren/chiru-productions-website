import { useState, lazy, Suspense } from 'react'
import Nav           from './components/Nav'
import Hero          from './components/Hero'
import Ticker        from './components/Ticker'
import Films         from './components/Films'
import Reels         from './components/Reels'
import Upcoming      from './components/Upcoming'
import AwardsRibbon  from './components/AwardsRibbon'
import Team          from './components/Team'
import Audio         from './components/Audio'
import Footer        from './components/Footer'

// Lazy load components for code splitting
const Announcements = lazy(() => import('./components/Announcements'))
const AllFilms = lazy(() => import('./components/AllFilms'))
const AllReels = lazy(() => import('./components/AllReels'))
const ComingSoon = lazy(() => import('./components/ComingSoon'))
const AwardsPage = lazy(() => import('./components/AwardsPage'))
const InfoPage = lazy(() => import('./components/InfoPage'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh',
    color: 'var(--smoke)'
  }}>
    <div>Loading...</div>
  </div>
)

const INFO_PAGES = new Set([
  'about', 'team', 'facilities', 'careers', 'press-kit',
  'screenings', 'distribution', 'co-productions', 'media-enquiries',
  'casting', 'archive', 'international',
])

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (target) => {
    setPage(target)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    if (page === 'announcements') {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <Announcements navigate={navigate} />
        </Suspense>
      )
    }
    if (page === 'films') {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <AllFilms navigate={navigate} />
        </Suspense>
      )
    }
    if (page === 'reels') {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <AllReels navigate={navigate} />
        </Suspense>
      )
    }
    if (page === 'coming-soon') {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <ComingSoon navigate={navigate} />
        </Suspense>
      )
    }
    if (page === 'awards') {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <AwardsPage navigate={navigate} />
        </Suspense>
      )
    }
    if (INFO_PAGES.has(page)) {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <InfoPage pageKey={page} navigate={navigate} />
        </Suspense>
      )
    }
    return (
      <>
        <Hero />
        <Ticker />
        <Films navigate={navigate} />
        <div className="gold-rule" />
        <Reels navigate={navigate} />
        <div className="gold-rule" />
        <Upcoming />
        <AwardsRibbon />
        <Team />
        <div className="gold-rule" />
        <Audio />
      </>
    )
  }

  return (
    <>
      <Nav page={page} navigate={navigate} />
      {renderPage()}
      <Footer navigate={navigate} />
    </>
  )
}
