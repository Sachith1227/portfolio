import { githubUrl } from '../data/portfolio'
import Icon from '../components/Icon'

export default function About() {
  return (
    <section className="section container about" id="about">
      <div className="about-top">
        <div className="reveal">
          <p className="eyebrow">
            <span>01</span> / THE PERSON BEHIND THE CODE
          </p>
          <h2>
            ABOUT <em>ME.</em>
          </h2>
          <p className="section-copy lead">
            I turn ideas into working products.
          </p>
          <p className="section-copy">
            I work with React, Flutter, and Python to solve everyday problems.
          </p>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Find the story in my code <Icon name="arrow" size={15} />
          </a>
        </div>
        <div className="developer-file reveal">
          <div className="window-bar">
            <span>
              <Icon name="code" size={13} /> developer.ts
            </span>
            <span>ABOUT ME</span>
          </div>
          <div className="file-body">
            <p>
              <span className="line-number">01</span>
              <span className="syntax-comment">
                // A little context, in code.
              </span>
            </p>
            <p>
              <span className="line-number">02</span>
              <span>
                <span className="syntax-purple">const</span> developer = {'{'}
              </span>
            </p>
            <p>
              <span className="line-number">03</span>
              <span>
                &nbsp; name:{' '}
                <span className="syntax-string">'Chamalka Senavirathna'</span>,
              </span>
            </p>
            <p>
              <span className="line-number">04</span>
              <span>
                &nbsp; github:{' '}
                <span className="syntax-string">'@Sachith1227'</span>,
              </span>
            </p>
            <p>
              <span className="line-number">05</span>
              <span>
                &nbsp; builds: [
                <span className="syntax-string">'web', 'mobile', 'games'</span>
                ],
              </span>
            </p>
            <p>
              <span className="line-number">06</span>
              <span>
                &nbsp; approach:{' '}
                <span className="syntax-string">'learn by building'</span>,
              </span>
            </p>
            <p>
              <span className="line-number">07</span>
              <span>
                &nbsp; curiosity: <span className="syntax-purple">true</span>
              </span>
            </p>
            <p>
              <span className="line-number">08</span>
              <span>{'}'};</span>
            </p>
            <p>
              <span className="line-number">09</span>&nbsp;
            </p>
            <p>
              <span className="line-number">10</span>
              <span className="syntax-comment">
                // The next commit is a new beginning.
              </span>
            </p>
          </div>
          <div className="file-bottom">
            <span>
              <span className="status-dot" /> LEARNING NEVER STOPS
            </span>
            <span>UTF-8</span>
          </div>
        </div>
      </div>
    </section>
  )
}
