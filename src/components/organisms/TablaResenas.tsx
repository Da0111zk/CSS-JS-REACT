// Requisito: Organismo - tabla de reseñas de clientes
import type { Resena } from '../../types/Contenido'

interface TablaResenasProps {
  resenas: Resena[]
}

const TablaResenas = ({ resenas }: TablaResenasProps) => (
  <div className="table-responsive mt-4">
    <table className="tabla-me">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Reseña</th>
          <th>Evaluación</th>
        </tr>
      </thead>
      <tbody>
        {resenas.map((r) => (
          <tr key={r.id}>
            <td>{r.nombre}</td>
            <td>{r.texto}</td>
            <td>{'⭐'.repeat(r.evaluacion)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default TablaResenas
