// Requisito: Átomo reutilizable - botón / enlace con apariencia de botón
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface BotonProps {
  children: ReactNode
  variante?: 'primario' | 'rojo'
  to?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  bloque?: boolean
}

const Boton = ({ children, variante = 'primario', to, type = 'button', onClick, bloque }: BotonProps) => {
  const clases = `btn-me btn-me-${variante}${bloque ? ' btn-me-bloque' : ''}`
  if (to) {
    return (
      <Link to={to} className={clases}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} className={clases} onClick={onClick}>
      {children}
    </button>
  )
}

export default Boton
