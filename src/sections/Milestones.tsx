import { milestones } from '../data/portfolio'
import Icon from '../components/Icon'

// Retained for restoration; this section is not currently rendered.
export default function Milestones() {
  return (
    <>
      <div className="journey-heading reveal">
        <span className="command-label">
          <b>❯</b> git log --my-journey
        </span>
        <span>MILESTONES</span>
      </div>
      <div className="timeline">
        {milestones.map((item) => (
          <article className="timeline-item reveal" key={item.date}>
            <span className="timeline-dot" />
            <span className="timeline-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              <span>❯ {item.command}</span>
              <Icon name="external" size={12} />
            </a>
          </article>
        ))}
      </div>
    </>
  )
}
