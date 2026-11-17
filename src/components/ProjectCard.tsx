import type { Project } from '../data/portfolio'
import Icon from './Icon'

function ProjectArt({ id }: { id: string }) {
  if (id === 'roadrescue')
    return (
      <div className="project-art road-art">
        <div className="browser-frame">
          <div className="browser-bar">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>roadrescue / live website</span>
            <Icon name="external" size={11} />
          </div>
          <img
            src="/projects/roadrescue.png"
            alt="Screenshot of the live RoadRescue homepage showing roadside assistance and request tracking"
            loading="lazy"
          />
        </div>
        <span className="art-caption">REACT + TYPESCRIPT / FULL-STACK WEB</span>
      </div>
    )
  if (id === 'spendsmart')
    return (
      <div className="project-art spend-art">
        <span className="art-grid" />
        <div className="spend-orbit" />
        <div className="spend-orbit orbit-two" />
        <div className="spend-brand">
          <img
            src="/projects/spendsmart-logo.png"
            alt="SpendSmart app icon from the project repository"
            loading="lazy"
          />
          <span>
            SpendSmart<span>Every little bit adds up.</span>
          </span>
        </div>
        <span className="float-tag tag-budget">
          ↗ &nbsp; Budget with purpose
        </span>
        <span className="float-tag tag-cloud">
          <span className="status-dot" /> Cloud-synced
        </span>
        <span className="art-caption">FLUTTER + FIREBASE / MOBILE APP</span>
      </div>
    )
  return (
    <div className="project-art game-art">
      <img
        className="court"
        src="/projects/volleyball-court.jpg"
        alt="Beach court artwork from Beach Volleyball Mini"
        loading="lazy"
      />
      <span className="game-title">
        BEACH
        <br />
        <strong>VOLLEYBALL</strong>
        <span>MINI</span>
      </span>
      <div className="net" />
      <img
        className="game-player"
        src="/projects/volleyball-player.png"
        alt=""
        loading="lazy"
      />
      <img
        className="game-ball"
        src="/projects/volleyball-ball.png"
        alt=""
        loading="lazy"
      />
      <span className="art-caption">PYTHON + PYGAME / GAME ARTWORK</span>
    </div>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-card ${project.id === 'roadrescue' ? 'featured' : ''}`}
    >
      <ProjectArt id={project.id} />
      <div className="project-info">
        <div className="project-meta">
          <span>
            /{project.number} — {project.category.toUpperCase()} DEVELOPMENT
          </span>
          <span className="project-open-source">
            <Icon name="github" size={11} /> PUBLIC SOURCE
          </span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <ul className="highlights">
          {project.highlights.map((item) => (
            <li key={item}>
              <span>↗</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.repository} target="_blank" rel="noreferrer">
            <Icon name="github" size={15} /> Source code{' '}
            <Icon name="external" size={12} />
            <span className="sr-only"> for {project.title}</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="demo-link"
            >
              Live demo <Icon name="external" size={13} />
              <span className="sr-only"> of {project.title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
