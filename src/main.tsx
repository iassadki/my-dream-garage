import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import HomePage from './pages/homepage.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HomePage /> */}
    <App />
  </StrictMode>,
)
