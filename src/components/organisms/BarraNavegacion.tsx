// Requisito: Organismo - encabezado con logo, título, navegación y botones de sesión
import { Link } from 'react-router-dom'
import Boton from '../atoms/Boton'
import NavItem from '../molecules/NavItem'

const BarraNavegacion = () => (
  <header className="encabezado">
    <Link to="/">
      <img src="/img/logo.png" alt="Logo de Mi Espacio" className="logo" />
    </Link>
    <h1>Bienvenido a Mi Espacio</h1>
    <p className="mb-2">Nuestro espacio, tu bodega.</p>
    <nav>
      <ul>
        <NavItem to="/" texto="Inicio" />
        <NavItem to="/acerca" texto="Acerca de" />
        <NavItem to="/contacto" texto="Contacto" />
        <NavItem to="/servicios" texto="Servicios" />
        <NavItem to="/cotiza" texto="Cotiza Aquí" />
        <NavItem to="/faq" texto="Preguntas Frecuentes" />
        <NavItem to="/resenas" texto="Reseñas" />
        <NavItem to="/sucursales" texto="Sucursales" />
      </ul>
    </nav>
    <div className="botones-auth">
      <Boton to="/login">Iniciar Sesión</Boton>
      <Boton to="/registro" variante="rojo">
        Registrarse
      </Boton>
    </div>
  </header>
)

export default BarraNavegacion
