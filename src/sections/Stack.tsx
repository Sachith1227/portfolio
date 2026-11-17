import { stack } from '../data/portfolio'
import Icon from '../components/Icon'

export default function Stack() {
  return (
    <section
      className="portfolio-section container"
      id="stack"
      aria-labelledby="stack-title"
    >
      <div className="portfolio-heading reveal">
        <div>
          <p className="portfolio-kicker">
            <span>03</span> / MY TOOLKIT
          </p>
          <h2 id="stack-title">
            Tools of the <em>trade.</em>
          </h2>
        </div>
        <p>
          Technologies I’ve used to bring my projects from idea to working
          product.
        </p>
      </div>
      <div className="toolkit-grid">
        {stack.map((group) => (
          <article className="toolkit-card reveal" key={group.title}>
            <span className="toolkit-icon">
              <Icon name={group.icon} size={20} />
            </span>
            <h3>{group.title}</h3>
            <p>{group.note}</p>
            <div className="toolkit-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
