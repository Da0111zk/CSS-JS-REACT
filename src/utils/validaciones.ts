// Requisito: Formularios con validación - reglas por campo
export type DatosCotizacion = { nombre: string; email: string; servicioId: string; mensaje: string }
export type DatosContacto = { nombre: string; email: string; mensaje: string }
export type DatosLogin = { email: string; password: string }
export type DatosRegistro = { nombre: string; email: string; password: string; confirmacion: string }

export const cotizacionInicial: DatosCotizacion = { nombre: '', email: '', servicioId: '', mensaje: '' }
export const contactoInicial: DatosContacto = { nombre: '', email: '', mensaje: '' }
export const loginInicial: DatosLogin = { email: '', password: '' }
export const registroInicial: DatosRegistro = { nombre: '', email: '', password: '', confirmacion: '' }

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const validarCampo = (campo: string, valor: string, datos: Record<string, string>): string => {
  const texto = valor.trim()
  switch (campo) {
    case 'nombre':
      if (!texto) return 'El nombre es obligatorio.'
      if (texto.length < 3) return 'El nombre debe tener al menos 3 caracteres.'
      return ''
    case 'email':
      if (!texto) return 'El correo es obligatorio.'
      if (!regexEmail.test(texto)) return 'Ingresa un correo válido.'
      return ''
    case 'servicioId':
      return texto ? '' : 'Selecciona un servicio.'
    case 'mensaje':
      if (!texto) return 'El mensaje es obligatorio.'
      if (texto.length < 10) return 'El mensaje debe tener al menos 10 caracteres.'
      if (texto.length > 200) return 'El mensaje no puede superar los 200 caracteres.'
      return ''
    case 'password':
      if (!valor) return 'La contraseña es obligatoria.'
      if (valor.length < 6) return 'La contraseña debe tener al menos 6 caracteres.'
      return ''
    case 'confirmacion':
      if (!valor) return 'Confirma tu contraseña.'
      if (valor !== datos.password) return 'Las contraseñas no coinciden.'
      return ''
    default:
      return ''
  }
}
