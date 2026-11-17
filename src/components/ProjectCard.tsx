import type { Project } from '../data/portfolio'
import Icon from './Icon'

function ProjectArt({ id, title }: { id: string; title: string }) {
  if (id === 'roadrescue')
    return (
      <div className="work-image work-image-web">
        <div className="work-browser">
          <span />
          <span />
          <span />
          <small>ROADRESCUE</small>
        </div>
        <img
          src="/projects/roadrescue-screenshot.png"
          alt="RoadRescue project screenshot"
          loading="lazy"
        />
      </div>
    )
  if (id === 'volleyball')
    return (
      <div className="work-image work-image-game">
        <img
          src="/projects/volleyball-screenshot.png"
          alt="Beach Volleyball Mini game screenshot"
          loading="lazy"
        />
      </div>
    )
  if (id === 'smartlog' || id === 'doctor-appointment')
    return (
      <div className={`work-image work-image-concept work-image-${id}`}>
        <div className="work-concept-icon" aria-hidden="true">
          <Icon name={id === 'smartlog' ? 'layers' : 'phone'} size={30} />
        </div>
        <div className="work-concept-copy">
          <span>
            {id === 'smartlog' ? 'FINAL-YEAR GROUP PROJECT' : 'HEALTHCARE APP'}
          </span>
          <strong>{title}</strong>
        </div>
      </div>
    )
  return (
    <div className="work-image work-image-app">
      <div className="work-app-icon">
        <img src="/projects/spendsmart-logo.png" alt="" loading="lazy" />
      </div>
      <div>
        <span>MOBILE APP</span>
        <strong>{title}</strong>
        <small>Personal finance, made simpler.</small>
      </div>
    </div>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`work-card${project.id === 'roadrescue' ? ' work-card-featured' : ''}`}
    >
      <ProjectArt id={project.id} title={project.title} />
      <div className="work-info">
        <div className="work-meta">
          <span>
            {project.category.toUpperCase()} / {project.number}
          </span>
          <span>
            {project.id === 'smartlog' ? 'GROUP CONTRIBUTOR' : 'PROJECT'}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="work-tags" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="work-links">
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              aria-label={
                project.id === 'doctor-appointment'
                  ? "Visit Chamalka's GitHub profile"
                  : `View ${project.title} source code on GitHub`
              }
            >
              <Icon name="github" size={16} />{' '}
              {project.id === 'doctor-appointment'
                ? 'View GitHub profile'
                : 'Source code'}{' '}
              <Icon name="external" size={12} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} live demo`}
            >
              Live demo <Icon name="arrow" size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
