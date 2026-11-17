import { githubUrl } from '../data/portfolio'
import Icon from '../components/Icon'

export default function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-greeting enter">Hi, I’m</p>
        <h1 className="enter" id="hero-title">
          CHAMALKA <span>SENAVIRATHNA</span>
        </h1>
        <div className="role-line enter">
          <Icon name="code" size={21} />
          <span>
            Full-stack <b>&</b> mobile developer
          </span>
        </div>
        <p className="hero-description enter">
          I build web platforms, mobile apps, and games.
        </p>
        <div className="hero-actions enter">
          <a
            className="button"
            href={`${githubUrl}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            View projects <Icon name="arrow" size={16} />
          </a>
          <a
            className="button button-outline"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={15} /> My GitHub
          </a>
        </div>
      </div>
      <div className="portrait-wrap enter">
        <div className="portrait-stage">
          <div className="portrait-grid" />
          <div className="portrait-ring" />
          <div className="portrait-ring ring-two" />
          <span className="portrait-watermark" aria-hidden="true">
            CS
          </span>
          <img
            src="/chamalka-portrait.png"
            alt="Chamalka Senavirathna in a navy suit and white shirt"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
