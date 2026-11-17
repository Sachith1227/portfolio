import { githubUrl, stack } from '../data/portfolio'
import Icon from '../components/Icon'

export default function Stack() {
  return (
    <section className="section container stack" id="stack">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">
            <span>02</span> / THE TOOLKIT
          </p>
          <h2>
            MY <em>STACK.</em>
          </h2>
        </div>
        <p className="section-copy">
          Technologies I’ve put to work
          <br />
          in my public projects.
        </p>
      </div>
      <div className="stack-grid">
        {stack.map((group) => (
          <article className="stack-card reveal" key={group.title}>
            <div className="stack-card-top">
              <span className="stack-icon">
                <Icon name={group.icon} size={21} />
              </span>
              <span>{group.file}</span>
            </div>
            <h3>{group.title}</h3>
            <div className="stack-items">
              {group.items.map((item) => (
                <span key={item}>
                  <i />
                  {item}
                </span>
              ))}
            </div>
            <p>{group.note}</p>
          </article>
        ))}
      </div>
      <div className="stack-footnote">
        <span>
          <span className="status-dot" /> VERIFIED IN THE BUILD, NOT JUST ON THE
          LIST.
        </span>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          Explore the source <Icon name="external" size={11} />
        </a>
      </div>
    </section>
  )
}
