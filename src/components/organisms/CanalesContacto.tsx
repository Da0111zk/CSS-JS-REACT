// Requisito: Organismo - grilla de canales de contacto
import type { CanalContacto } from '../../types/Contenido'
import CanalContactoCard from '../molecules/CanalContactoCard'

interface CanalesContactoProps {
  canales: CanalContacto[]
}

const CanalesContacto = ({ canales }: CanalesContactoProps) => (
  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 my-3">
    {canales.map((canal) => (
      <div className="col" key={canal.id}>
        <CanalContactoCard canal={canal} />
      </div>
    ))}
  </div>
)

export default CanalesContacto
