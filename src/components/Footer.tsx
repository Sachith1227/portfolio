import { githubUrl } from '../data/portfolio'
import Brand from './Brand'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer container">
      <Brand />
      <p>
        © {new Date().getFullYear()} CHAMALKA SENAVIRATHNA
        <span>Built with intention. Always evolving.</span>
      </p>
      <a
        className="footer-source"
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="github" size={14} /> @Sachith1227
      </a>
      <a className="back-top" href="#home">
        BACK TO TOP <span>↑</span>
      </a>
    </footer>
  )
}
