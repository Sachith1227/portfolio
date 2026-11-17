import { githubUrl } from '../data/portfolio'
import Icon from '../components/Icon'

export default function Connect() {
  return (
    <section
      className="portfolio-section container contact-section"
      id="connect"
      aria-labelledby="connect-title"
    >
      <div className="contact-panel reveal">
        <div>
          <p className="portfolio-kicker">
            <span>04</span> / LET’S CONNECT
          </p>
          <h2 id="connect-title">
            Have an idea?
            <br />
            <em>Let’s build something.</em>
          </h2>
          <p>
            Take a look at what I’m working on and connect with me on GitHub.
          </p>
          <a
            className="contact-button"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={18} /> Visit my GitHub{' '}
            <Icon name="arrow" size={16} />
          </a>
        </div>
        <div className="contact-decoration" aria-hidden="true">
          <span>LET’S</span>
          <strong>
            CREATE<span>.</span>
          </strong>
          <small>IDEAS / CODE / CREATION</small>
        </div>
      </div>
    </section>
  )
}
