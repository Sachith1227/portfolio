import { githubUrl } from '../data/portfolio'
import Icon from '../components/Icon'

export default function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-greeting enter">Hi, I’m</p>
        <h1 className="enter" id="hero-title">
          <span className="hero-name-line hero-first-name">
            CHAMALKA
            <span className="hero-letter-glint" aria-hidden="true">
              CHAMALKA
            </span>
            <span className="hero-name-spark" aria-hidden="true" />
          </span>
          <span className="hero-name-line hero-last-name">
            SENAVIRATHNA
            <span className="hero-letter-glint" aria-hidden="true">
              SENAVIRATHNA
            </span>
            <span className="hero-name-spark" aria-hidden="true" />
          </span>
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
          <div className="portrait-ring" aria-hidden="true" />
          <div className="portrait-ring ring-two" aria-hidden="true" />
          <span className="portrait-watermark" aria-hidden="true">
            CS
            <span className="watermark-glint">CS</span>
          </span>
          <img
            src="/chamalka-portrait.png"
            alt="Chamalka Senavirathna in a navy suit and white shirt"
            fetchPriority="high"
          />
          <div className="portrait-tracers" aria-hidden="true">
            <div className="tracer-track">
              <span className="ring-spark" />
              <span className="ring-spark ring-spark-third" />
              <span className="ring-spark ring-spark-two-third" />
            </div>
            <div className="tracer-track tracer-track-inner">
              <span className="ring-spark ring-spark-reverse" />
            </div>
            <span className="portrait-cs-trace">
              CS<span className="cs-spark" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
