// Requisito: Organismo - lista de sucursales
import type { Sucursal } from '../../types/Contenido'
import SucursalCard from '../molecules/SucursalCard'

interface ListaSucursalesProps {
  sucursales: Sucursal[]
}

const ListaSucursales = ({ sucursales }: ListaSucursalesProps) => (
  <>
    {sucursales.map((s) => (
      <SucursalCard key={s.id} sucursal={s} />
    ))}
  </>
)

export default ListaSucursales
