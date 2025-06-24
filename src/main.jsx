import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './market_frontend_app.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
