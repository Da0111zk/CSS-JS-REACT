// Requisito: Datos tipados para el acordeón de preguntas frecuentes
import type { PreguntaFrecuente } from '../types/Servicio'

export const preguntasFrecuentes: PreguntaFrecuente[] = [
  { id: 1, pregunta: '¿Qué servicios ofrece Mi Espacio?', respuesta: 'Ofrecemos almacenamiento seguro, alquiler de espacios y servicios de logística para tus necesidades.' },
  { id: 2, pregunta: '¿Cómo puedo registrarme?', respuesta: 'Puedes registrarte haciendo clic en el enlace "Registrarse" en la parte superior de la página y completando el formulario de registro.' },
  { id: 3, pregunta: '¿Cuáles son los horarios de atención?', respuesta: 'Nuestro horario de atención es de lunes a viernes, de 9:00 a 18:00 horas.' },
  { id: 4, pregunta: '¿Puedo solicitar una cotización?', respuesta: 'Sí, puedes solicitar una cotización personalizada haciendo clic en "Cotiza Aquí" y completando el formulario correspondiente.' },
  { id: 5, pregunta: '¿Cómo puedo contactar al soporte?', respuesta: 'Puedes contactarnos a través del formulario de contacto en la sección "Contacto" o enviando un correo electrónico a soporte@miespacio.com' },
  { id: 6, pregunta: '¿Qué medidas de seguridad tienen mis pertenencias?', respuesta: 'Nuestro espacio cuenta con sistemas de seguridad avanzados, incluyendo cámaras de vigilancia y acceso controlado para garantizar la seguridad de tus pertenencias.' },
  { id: 7, pregunta: '¿Puedo cancelar mi cuenta?', respuesta: 'Sí, puedes cancelar tu cuenta en cualquier momento. Por favor, contacta a nuestro equipo de soporte para obtener asistencia con el proceso de cancelación.' },
  { id: 8, pregunta: '¿Dónde están ubicados?', respuesta: 'Estamos ubicados en la calle Principal #123, ciudad de Ejemplo. Puedes encontrar nuestra dirección completa en la sección "Contacto".' },
]
