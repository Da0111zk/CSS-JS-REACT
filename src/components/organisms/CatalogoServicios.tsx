// Requisito: Organismo - catálogo responsivo con Bootstrap usando el mismo componente reutilizable
import type { Servicio } from '../../types/Servicio'
import ServicioCard from '../molecules/ServicioCard'

interface CatalogoServiciosProps {
  servicios: Servicio[]
}

const CatalogoServicios = ({ servicios }: CatalogoServiciosProps) => (
  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
    {servicios.map((servicio) => (
      <div className="col" key={servicio.id}>
        <ServicioCard servicio={servicio} />
      </div>
    ))}
  </div>
)

export default CatalogoServicios
