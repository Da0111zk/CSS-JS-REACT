// Requisito: Página Detalle - ruta dinámica /servicios/:id resuelta con useParams
import { useParams } from 'react-router-dom'
import Boton from '../components/atoms/Boton'
import Etiqueta from '../components/atoms/Etiqueta'
import { servicios } from '../data/servicios'

const DetalleServicio = () => {
  const { id } = useParams<{ id: string }>()
  const servicio = servicios.find((s) => s.id === Number(id))

  if (!servicio) {
    return (
      <div className="caja text-center">
        <h2>Servicio no encontrado</h2>
        <p>El servicio solicitado no existe.</p>
        <Boton to="/servicios">Volver a Servicios</Boton>
      </div>
    )
  }

  return (
    <div className="caja">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <img src={servicio.imagen} alt={servicio.nombre} className="img-fluid rounded m-0" />
        </div>
        <div className="col-12 col-md-6">
          <Etiqueta texto={servicio.categoria} />
          <h2 className="mt-2">{servicio.nombre}</h2>
          <p>{servicio.descripcion}</p>
          <ul className="detalle-datos">
            <li>
              <strong>Tipo:</strong> {servicio.categoria}
            </li>
            <li>
              <strong>Tamaño:</strong> {servicio.tamano}
            </li>
          </ul>
          <div className="d-flex flex-wrap gap-2">
            <Boton to={`/cotiza?servicio=${servicio.id}`} variante="rojo">
              Cotizar este servicio
            </Boton>
            <Boton to="/servicios">Volver a Servicios</Boton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleServicio
