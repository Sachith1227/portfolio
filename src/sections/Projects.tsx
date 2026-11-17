import { githubUrl, projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import Icon from '../components/Icon'

export default function Projects() {
  return (
    <section
      className="portfolio-section container"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="portfolio-heading reveal">
        <div>
          <p className="portfolio-kicker">
            <span>01</span> / SELECTED WORK
          </p>
          <h2 id="projects-title">
            Ideas brought <em>to life.</em>
          </h2>
        </div>
        <p>
          A selection of web, mobile, and game projects built through curiosity
          and hands-on learning.
        </p>
      </div>
      <div className="work-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <a
        className="portfolio-text-link work-more"
        href={`${githubUrl}?tab=repositories`}
        target="_blank"
        rel="noreferrer"
      >
        Explore all repositories <Icon name="arrow" size={16} />
      </a>
    </section>
  )
}
