import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { submitScore } from './data.js'

// TEMPORARY: Lab 3 Week 1 removes this.
window.app = { submitScore }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
