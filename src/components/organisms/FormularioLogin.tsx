// Requisito: Organismo - formulario de inicio de sesión con validación
import { useState } from 'react'
import { useFormulario } from '../../hooks/useFormulario'
import { loginInicial, validarCampo, type DatosLogin } from '../../utils/validaciones'
import Boton from '../atoms/Boton'
import CampoFormulario from '../molecules/CampoFormulario'

const FormularioLogin = () => {
  const { props, enviar } = useFormulario<DatosLogin>(loginInicial, validarCampo)
  const [valido, setValido] = useState(false)

  return (
    <>
      {valido && (
        <div className="exito" role="alert">
          Datos válidos. El inicio de sesión es una simulación: aún no hay servidor conectado.
        </div>
      )}
      <form onSubmit={enviar(() => setValido(true))} noValidate className="formulario-me">
        <CampoFormulario {...props('email')} etiqueta="Correo electrónico" tipo="email" placeholder="tucorreo@ejemplo.com" />
        <CampoFormulario {...props('password')} etiqueta="Contraseña" tipo="password" placeholder="••••••••" />
        <Boton type="submit" bloque>
          Ingresar
        </Boton>
      </form>
    </>
  )
}

export default FormularioLogin
