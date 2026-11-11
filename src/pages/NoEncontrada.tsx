// Requisito: Ruta comodín para direcciones inexistentes
import Boton from '../components/atoms/Boton'

const NoEncontrada = () => (
  <div className="caja text-center">
    <h2>Página no encontrada</h2>
    <Boton to="/">Ir al inicio</Boton>
  </div>
)

export default NoEncontrada
