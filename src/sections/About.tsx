import { githubUrl } from '../data/portfolio'
import Icon from '../components/Icon'

export default function About() {
  return (
    <section
      className="portfolio-section container about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-intro reveal">
        <p className="portfolio-kicker">
          <span>02</span> / ABOUT ME
        </p>
        <h2 id="about-title">
          Curious by nature.
          <br />
          <em>Builder by practice.</em>
        </h2>
      </div>
      <div className="about-content reveal">
        <p className="about-lead">
          Hi, I’m Chamalka — a developer who enjoys turning ideas into useful
          digital experiences.
        </p>
        <p>
          I build web platforms, mobile apps, and games. From a roadside
          assistance platform to personal finance and a volleyball game, each
          project is a chance to solve a problem and learn something new.
        </p>
        <a
          className="portfolio-text-link"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          Get to know my work <Icon name="arrow" size={16} />
        </a>
        <div className="about-focus">
          <div>
            <span>01</span>
            <strong>Web development</strong>
          </div>
          <div>
            <span>02</span>
            <strong>Mobile apps</strong>
          </div>
          <div>
            <span>03</span>
            <strong>Creative projects</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
