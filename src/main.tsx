// Requisito: Punto de entrada React + Vite + Bootstrap + BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/mi-espacio.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
