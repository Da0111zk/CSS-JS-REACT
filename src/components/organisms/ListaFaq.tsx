// Requisito: Organismo - lista de preguntas frecuentes
import type { PreguntaFrecuente } from '../../types/Servicio'
import ItemFaq from '../molecules/ItemFaq'

interface ListaFaqProps {
  preguntas: PreguntaFrecuente[]
}

const ListaFaq = ({ preguntas }: ListaFaqProps) => (
  <div className="faq-contenedor">
    {preguntas.map((p) => (
      <ItemFaq key={p.id} item={p} />
    ))}
  </div>
)

export default ListaFaq
