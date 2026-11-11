// Requisito: Página Sucursales
import ListaSucursales from '../components/organisms/ListaSucursales'
import { sucursales } from '../data/sucursales'

const Sucursales = () => (
  <>
    <h2>Nuestras Sucursales</h2>
    <p>Encuentra la ubicación más cercana a ti con acceso seguro las 24 horas.</p>
    <ListaSucursales sucursales={sucursales} />
  </>
)

export default Sucursales
