import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/normalize.css'
import './assets/css/styles.css'
import 'animate.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
