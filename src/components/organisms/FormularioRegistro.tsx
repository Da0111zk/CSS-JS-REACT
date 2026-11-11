// Requisito: Organismo - formulario de registro con validación (incluye confirmación de contraseña)
import { useState } from 'react'
import { useFormulario } from '../../hooks/useFormulario'
import { registroInicial, validarCampo, type DatosRegistro } from '../../utils/validaciones'
import Boton from '../atoms/Boton'
import CampoFormulario from '../molecules/CampoFormulario'

const FormularioRegistro = () => {
  const { props, enviar } = useFormulario<DatosRegistro>(registroInicial, validarCampo)
  const [nombre, setNombre] = useState<string | null>(null)

  return (
    <>
      {nombre && (
        <div className="exito" role="alert">
          Datos válidos, {nombre}. El registro es una simulación: aún no hay servidor conectado.
        </div>
      )}
      <form onSubmit={enviar((d) => setNombre(d.nombre))} noValidate className="formulario-me">
        <CampoFormulario {...props('nombre')} etiqueta="Nombre completo" placeholder="Tu nombre" />
        <CampoFormulario {...props('email')} etiqueta="Correo electrónico" tipo="email" placeholder="tucorreo@ejemplo.com" />
        <CampoFormulario {...props('password')} etiqueta="Contraseña" tipo="password" placeholder="••••••••" />
        <CampoFormulario {...props('confirmacion')} etiqueta="Confirmar contraseña" tipo="password" placeholder="••••••••" />
        <Boton type="submit" bloque>
          Crear cuenta
        </Boton>
      </form>
    </>
  )
}

export default FormularioRegistro
