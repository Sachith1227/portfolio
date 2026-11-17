import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/portfolio.css'
import './styles/responsive.css'
import './styles/theme.css'
import './styles/rain.css'
import './styles/intro.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
