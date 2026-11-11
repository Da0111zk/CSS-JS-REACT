// Requisito: Página Servicios - catálogo completo
import CatalogoServicios from '../components/organisms/CatalogoServicios'
import { servicios } from '../data/servicios'

const Servicios = () => (
  <>
    <h2>Nuestros servicios</h2>
    <div className="container-xl mt-4">
      <CatalogoServicios servicios={servicios} />
    </div>
  </>
)

export default Servicios
