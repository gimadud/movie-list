import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("에러메시지");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
