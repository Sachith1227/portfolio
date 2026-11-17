import { githubUrl } from '../data/portfolio'
import Icon from '../components/Icon'

export default function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker enter">
          <span /> DESIGN. DEVELOP. BUILD.
        </p>
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
          I build thoughtful web platforms, mobile apps, and games — turning
          ideas into useful digital experiences.
        </p>
        <div className="hero-actions enter">
          <a className="button" href="#projects">
            Explore my work <Icon name="arrow" size={16} />
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
          <div className="portrait-code" aria-hidden="true">
            <div className="portrait-code-column portrait-code-left">
              <div className="portrait-code-label">
                <span /> SOURCE / 01
              </div>
              <div className="portrait-code-stream">
                <span>
                  <i>01</i> const developer = {'{'}
                </span>
                <span>
                  <i>02</i> &nbsp; name: 'Chamalka',
                </span>
                <span>
                  <i>03</i> &nbsp; craft: 'code',
                </span>
                <span>
                  <i>04</i> {'}'}
                </span>
                <span>
                  <i>05</i>{' '}
                </span>
                <span>
                  <i>06</i> function create(idea) {'{'}
                </span>
                <span>
                  <i>07</i> &nbsp; return idea.build()
                </span>
                <span>
                  <i>08</i> {'}'}
                </span>
              </div>
            </div>
            <div className="portrait-code-column portrait-code-right">
              <div className="portrait-code-label">
                <span /> CREATIVE / 02
              </div>
              <div className="portrait-code-stream">
                <span>
                  <i>01</i> import {'{'} ideas {'}'}
                </span>
                <span>
                  <i>02</i> from 'imagination'
                </span>
                <span>
                  <i>03</i>{' '}
                </span>
                <span>
                  <i>04</i> const project = {'{'}
                </span>
                <span>
                  <i>05</i> &nbsp; design: true,
                </span>
                <span>
                  <i>06</i> &nbsp; develop: true
                </span>
                <span>
                  <i>07</i> {'}'}
                </span>
                <span>
                  <i>08</i> create(project)
                </span>
              </div>
            </div>
            <div className="portrait-code-scan" />
          </div>
          <div className="portrait-ring" aria-hidden="true">
            <span className="ring-spark" />
            <span className="ring-spark ring-spark-delayed" />
          </div>
          <div className="portrait-ring ring-two" aria-hidden="true">
            <span className="ring-spark ring-spark-reverse" />
          </div>
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
