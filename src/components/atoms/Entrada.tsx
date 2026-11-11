// Requisito: Átomo reutilizable - control de formulario (input, textarea, select)
import type { ChangeEvent } from 'react'

export interface OpcionSelector {
  valor: string
  texto: string
}

export type TipoCampo = 'text' | 'email' | 'password' | 'textarea' | 'select'

interface EntradaProps {
  id: string
  tipo?: TipoCampo
  valor: string
  onCambio: (valor: string) => void
  onBlur: () => void
  invalido: boolean
  placeholder?: string
  opciones?: OpcionSelector[]
}

const Entrada = ({ id, tipo = 'text', valor, onCambio, onBlur, invalido, placeholder, opciones = [] }: EntradaProps) => {
  const clases = `campo${invalido ? ' invalido' : ''}`
  const manejarCambio = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    onCambio(e.target.value)

  if (tipo === 'textarea') {
    return <textarea id={id} name={id} rows={4} className={clases} value={valor} onChange={manejarCambio} onBlur={onBlur} placeholder={placeholder} />
  }
  if (tipo === 'select') {
    return (
      <select id={id} name={id} className={clases} value={valor} onChange={manejarCambio} onBlur={onBlur}>
        <option value="">Selecciona una opción</option>
        {opciones.map((o) => (
          <option key={o.valor} value={o.valor}>
            {o.texto}
          </option>
        ))}
      </select>
    )
  }
  return <input id={id} name={id} type={tipo} className={clases} value={valor} onChange={manejarCambio} onBlur={onBlur} placeholder={placeholder} />
}

export default Entrada
