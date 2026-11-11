// Requisito: Organismo - formulario con validación (cotización de servicios)
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { servicios } from '../../data/servicios'
import { useFormulario } from '../../hooks/useFormulario'
import { cotizacionInicial, validarCampo, type DatosCotizacion } from '../../utils/validaciones'
import Boton from '../atoms/Boton'
import CampoFormulario from '../molecules/CampoFormulario'

const FormularioCotizacion = () => {
  const [params] = useSearchParams()
  const idParam = params.get('servicio')
  const preseleccion = servicios.some((s) => String(s.id) === idParam) ? (idParam as string) : ''

  const { props, enviar } = useFormulario<DatosCotizacion>({ ...cotizacionInicial, servicioId: preseleccion }, validarCampo)
  const [enviado, setEnviado] = useState<DatosCotizacion | null>(null)

  const opciones = servicios.map((s) => ({ valor: String(s.id), texto: `${s.nombre} (${s.tamano})` }))
  const servicioElegido = enviado ? servicios.find((s) => String(s.id) === enviado.servicioId) : undefined

  return (
    <>
      {enviado && servicioElegido && (
        <div className="exito" role="alert">
          Cotización solicitada: {enviado.nombre}, te contactaremos a {enviado.email} con información sobre <strong>{servicioElegido.nombre}</strong>.
        </div>
      )}
      <form onSubmit={enviar(setEnviado)} noValidate className="formulario-me">
        <CampoFormulario {...props('nombre')} etiqueta="Nombre completo" placeholder="Tu nombre" />
        <CampoFormulario {...props('email')} etiqueta="Correo electrónico" tipo="email" placeholder="tucorreo@ejemplo.com" />
        <CampoFormulario {...props('servicioId')} etiqueta="Servicio" tipo="select" opciones={opciones} />
        <CampoFormulario {...props('mensaje')} etiqueta="Escriba su mensaje" tipo="textarea" placeholder="Escriba su mensaje" />
        <Boton type="submit" bloque>
          Solicitar cotización
        </Boton>
      </form>
    </>
  )
}

export default FormularioCotizacion
