// Requisito: Molécula - ficha de sucursal con mapa embebido
import type { Sucursal } from '../../types/Contenido'
import Boton from '../atoms/Boton'

interface SucursalCardProps {
  sucursal: Sucursal
}

const SucursalCard = ({ sucursal }: SucursalCardProps) => (
  <article className="caja">
    <div className="row g-3 align-items-center">
      <div className="col-12 col-md-6">
        <h3 className="titulo-sucursal">{sucursal.nombre}</h3>
        <p className="texto-sucursal">
          <strong>Dirección:</strong> {sucursal.direccion}
        </p>
        <p className="texto-sucursal">
          <strong>Horario de atención:</strong> {sucursal.horario}
        </p>
        <p className="texto-sucursal">
          <strong>Acceso a bodegas:</strong> {sucursal.acceso}
        </p>
        <p className="texto-sucursal">
          <strong>Teléfono:</strong> {sucursal.telefono}
        </p>
        <Boton to="/cotiza" variante="rojo">
          Cotizar en esta sucursal
        </Boton>
      </div>
      <div className="col-12 col-md-6">
        <iframe
          src={sucursal.mapaUrl}
          title={`Mapa de ${sucursal.nombre}`}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </article>
)

export default SucursalCard
