// Requisito: Molécula - ítem de acordeón con estado propio (abierto / cerrado)
import { useState } from 'react'
import type { PreguntaFrecuente } from '../../types/Servicio'

interface ItemFaqProps {
  item: PreguntaFrecuente
}

const ItemFaq = ({ item }: ItemFaqProps) => {
  const [abierto, setAbierto] = useState(false)
  return (
    <div className="faq-item">
      <button type="button" className="faq-pregunta" aria-expanded={abierto} onClick={() => setAbierto(!abierto)}>
        {item.pregunta}
      </button>
      {abierto && (
        <div className="faq-respuesta">
          <p>{item.respuesta}</p>
        </div>
      )}
    </div>
  )
}

export default ItemFaq
