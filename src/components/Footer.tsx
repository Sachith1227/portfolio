import { githubUrl } from '../data/portfolio'
import Brand from './Brand'

export default function Footer() {
  return (
    <footer className="portfolio-footer container">
      <div>
        <Brand />
        <span>© {new Date().getFullYear()} CHAMALKA SENAVIRATHNA</span>
      </div>
      <nav aria-label="Footer navigation">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href="#home">Back to top ↑</a>
      </nav>
    </footer>
  )
}
