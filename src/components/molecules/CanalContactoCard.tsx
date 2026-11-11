// Requisito: Molécula - tarjeta de canal de contacto reutilizable
import type { CanalContacto } from '../../types/Contenido'

interface CanalContactoCardProps {
  canal: CanalContacto
}

const CanalContactoCard = ({ canal }: CanalContactoCardProps) => (
  <article className="tarjeta">
    <div className="tarjeta-cuerpo text-center">
      <i className={`${canal.icono} fa-2x icono-me`} />
      <h3>{canal.titulo}</h3>
      {canal.lineas.map((linea) => (
        <p key={linea.texto} className="mb-1">
          {linea.enlace ? (
            <a href={linea.enlace} className="enlace-plano" target={linea.enlace.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {linea.icono && <i className={`${linea.icono} me-1`} />}
              {linea.texto}
            </a>
          ) : (
            linea.texto
          )}
        </p>
      ))}
      {canal.nota && <small>{canal.nota}</small>}
    </div>
  </article>
)

export default CanalContactoCard
