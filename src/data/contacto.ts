// Requisito: Datos tipados de canales de contacto
import type { CanalContacto } from '../types/Contenido'

export const canalesContacto: CanalContacto[] = [
  {
    id: 1,
    icono: 'fa-solid fa-location-dot',
    titulo: 'Nuestra Ubicación',
    lineas: [{ texto: 'Av. Principal #123, Ciudad de Ejemplo, Chile.' }],
    nota: 'Estacionamiento gratuito para clientes',
  },
  {
    id: 2,
    icono: 'fa-solid fa-phone',
    titulo: 'Teléfonos de Atención',
    lineas: [
      { texto: '+56 9 5673 890', enlace: 'tel:+5695673890' },
      { texto: '+56 2 2334 455', enlace: 'tel:+5622334455' },
    ],
    nota: 'Lunes a Viernes: 08:30 - 18:30 hrs',
  },
  {
    id: 3,
    icono: 'fa-solid fa-envelope',
    titulo: 'Soporte por Email',
    lineas: [
      { texto: 'contacto@miespacio.com', enlace: 'mailto:contacto@miespacio.com' },
      { texto: 'ventas@miespacio.com', enlace: 'mailto:ventas@miespacio.com' },
    ],
    nota: 'Respondemos en menos de 2 horas',
  },
  {
    id: 4,
    icono: 'fa-solid fa-comments',
    titulo: 'Redes Sociales',
    lineas: [
      { texto: 'Facebook', enlace: 'https://facebook.com', icono: 'fa-brands fa-facebook' },
      { texto: 'Instagram', enlace: 'https://instagram.com', icono: 'fa-brands fa-instagram' },
      { texto: 'WhatsApp', enlace: 'https://wa.me/5695673890', icono: 'fa-brands fa-whatsapp' },
    ],
  },
]
