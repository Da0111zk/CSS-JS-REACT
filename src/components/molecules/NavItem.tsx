// Requisito: Molécula - elemento de navegación
import { NavLink } from 'react-router-dom'

interface NavItemProps {
  to: string
  texto: string
}

const NavItem = ({ to, texto }: NavItemProps) => (
  <li>
    <NavLink to={to} end={to === '/'} className="enlace-nav">
      {texto}
    </NavLink>
  </li>
)

export default NavItem
