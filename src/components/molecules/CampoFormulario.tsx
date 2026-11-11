// Requisito: Molécula - etiqueta + control + mensaje de error de validación
import Entrada, { type OpcionSelector, type TipoCampo } from '../atoms/Entrada'

interface CampoFormularioProps {
  id: string
  etiqueta: string
  tipo?: TipoCampo
  valor: string
  error?: string
  tocado: boolean
  onCambio: (valor: string) => void
  onBlur: () => void
  placeholder?: string
  opciones?: OpcionSelector[]
}

const CampoFormulario = ({ id, etiqueta, tipo, valor, error, tocado, onCambio, onBlur, placeholder, opciones }: CampoFormularioProps) => {
  const invalido = tocado && !!error
  return (
    <div className="grupo-campo">
      <label htmlFor={id}>{etiqueta}</label>
      <Entrada id={id} tipo={tipo} valor={valor} onCambio={onCambio} onBlur={onBlur} invalido={invalido} placeholder={placeholder} opciones={opciones} />
      {invalido && <div className="mensaje-error">{error}</div>}
    </div>
  )
}

export default CampoFormulario
