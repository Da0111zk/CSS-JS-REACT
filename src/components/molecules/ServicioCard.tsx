// Requisito: Molécula - tarjeta reutilizable que recibe los datos por Props y navega al detalle con Link
import type { Servicio } from '../../types/Servicio'
import Boton from '../atoms/Boton'
import Etiqueta from '../atoms/Etiqueta'

interface ServicioCardProps {
  servicio: Servicio
}

const ServicioCard = ({ servicio }: ServicioCardProps) => (
  <article className="tarjeta">
    <img src={servicio.imagen} alt={servicio.nombre} />
    <div className="tarjeta-cuerpo">
      <div>
        <Etiqueta texto={servicio.categoria} />
      </div>
      <h3>{servicio.nombre}</h3>
      <p>{servicio.descripcion}</p>
      <p className="fw-bold">Tamaño: {servicio.tamano}</p>
      <Boton to={`/servicios/${servicio.id}`} bloque>
        Ver detalle
      </Boton>
    </div>
  </article>
)

export default ServicioCard
