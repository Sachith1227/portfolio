import { githubUrl } from '../data/portfolio'
import Icon from '../components/Icon'

export default function Connect() {
  return (
    <section className="connect container" id="connect">
      <div className="connect-grid" aria-hidden="true" />
      <div className="reveal">
        <p className="eyebrow">
          <span>03</span> / KEEP IN TOUCH
        </p>
        <h2>
          LET'S <em>CONNECT.</em>
        </h2>
        <p>Explore my latest work on GitHub.</p>
        <a className="button" href={githubUrl} target="_blank" rel="noreferrer">
          <Icon name="github" size={17} /> Find me on GitHub{' '}
          <Icon name="arrow" size={17} />
        </a>
        <a
          className="connect-handle"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          @Sachith1227 <Icon name="external" size={12} />
        </a>
      </div>
      <div className="connect-art" aria-hidden="true">
        <span>
          {'{'}
          <span>✳</span>
          {'}'}
        </span>
        <small>ALWAYS A WORK IN PROGRESS.</small>
      </div>
    </section>
  )
}
