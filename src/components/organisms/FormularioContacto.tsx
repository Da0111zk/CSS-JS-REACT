// Requisito: Organismo - formulario de contacto con validación
import { useState } from 'react'
import { useFormulario } from '../../hooks/useFormulario'
import { contactoInicial, validarCampo, type DatosContacto } from '../../utils/validaciones'
import Boton from '../atoms/Boton'
import CampoFormulario from '../molecules/CampoFormulario'

const FormularioContacto = () => {
  const { props, enviar } = useFormulario<DatosContacto>(contactoInicial, validarCampo)
  const [enviado, setEnviado] = useState<DatosContacto | null>(null)

  return (
    <>
      {enviado && (
        <div className="exito" role="alert">
          Mensaje enviado: gracias {enviado.nombre}, te responderemos a {enviado.email}.
        </div>
      )}
      <form onSubmit={enviar(setEnviado)} noValidate className="formulario-me">
        <h3>Escríbenos un mensaje</h3>
        <CampoFormulario {...props('nombre')} etiqueta="Nombre Completo" />
        <CampoFormulario {...props('email')} etiqueta="Correo Electrónico" tipo="email" />
        <CampoFormulario {...props('mensaje')} etiqueta="Mensaje" tipo="textarea" />
        <Boton type="submit" bloque>
          Enviar Mensaje
        </Boton>
      </form>
    </>
  )
}

export default FormularioContacto
