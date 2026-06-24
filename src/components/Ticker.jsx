import './Ticker.css'
import { TICKER_ITEMS } from '../data'

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker-wrap" aria-label="Latest announcements">
      <div className="ticker-label">Latest</div>
      <div className="ticker-content">
        <div className="ticker-inner">
          {doubled.map((item, i) => (
            <span className="ticker-item" key={i}>
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
