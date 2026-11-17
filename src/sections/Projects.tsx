import { useState } from 'react'
import { githubUrl, projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import Icon from '../components/Icon'

export default function Projects() {
  const [filter, setFilter] = useState('All builds')
  const visibleProjects = projects.filter(
    (project) => filter === 'All builds' || project.category === filter,
  )
  return (
    <section className="section container projects" id="projects">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">
            <span>02</span> / SELECTED WORK
          </p>
          <h2>
            SELECTED <em>WORK.</em>
          </h2>
        </div>
        <p className="section-copy">Web platforms, mobile apps, and games.</p>
      </div>
      <div className="project-controls">
        <span className="command-label">
          <b>❯</b> ls ./projects
        </span>
        <div
          className="filters"
          role="group"
          aria-label="Filter projects by type"
        >
          {['All builds', 'Web', 'Mobile', 'Games'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {category}
              <span>{category === 'All builds' ? '03' : '01'}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid" aria-live="polite">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="repository-footer">
        <span>
          <Icon name="code" size={16} /> More on GitHub.
        </span>
        <a
          href={`${githubUrl}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
        >
          All repositories <Icon name="arrow" size={15} />
        </a>
      </div>
    </section>
  )
}
