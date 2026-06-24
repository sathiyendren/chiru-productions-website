import './AwardsRibbon.css'
import { AWARDS } from '../data'

export default function AwardsRibbon() {
  const doubled = [...AWARDS, ...AWARDS]
  return (
    <div className="awards-ribbon" aria-hidden="true">
      <div className="awards-inner">
        {doubled.map((text, i) => (
          <div className="award-item" key={i}>
            <span className="award-icon">◆</span>
            <span className="award-text" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        ))}
      </div>
    </div>
  )
}
