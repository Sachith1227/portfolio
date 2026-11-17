import { githubUrl } from '../data/portfolio'
import Brand from './Brand'
import Icon from './Icon'

type HeaderProps = {
  paused: boolean
  toggleMotion: () => void
}

export default function Header({ paused, toggleMotion }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <Brand showCaption />
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#stack">Skills</a>
          <a href="#connect">Contact</a>
        </nav>
        <div className="header-actions">
          <button
            className="motion-button"
            onClick={toggleMotion}
            aria-pressed={paused}
            aria-label={paused ? 'Enable animations' : 'Pause animations'}
            title={paused ? 'Enable animations' : 'Pause animations'}
          >
            <Icon name={paused ? 'play' : 'pause'} size={14} />
          </button>
          <a
            className="github-button"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chamalka on GitHub (opens in a new tab)"
          >
            <Icon name="github" size={17} />
          </a>
        </div>
      </div>
    </header>
  )
}
