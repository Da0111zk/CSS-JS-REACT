// Requisito: Catálogo con mínimo cuatro elementos (id, nombre, descripción, categoría, tamaño, imagen)
import type { Servicio } from '../types/Servicio'

export const servicios: Servicio[] = [
  {
    id: 1,
    nombre: 'Locker',
    descripcion: 'Ofrecemos espacios seguros y confiables tipo lockers para almacenar tus pertenencias.',
    categoria: 'Almacenamiento de pertenencias',
    tamano: '50cm x 50cm',
    imagen: '/img/locker.jpg',
  },
  {
    id: 2,
    nombre: 'Mini bodega',
    descripcion: 'Bodegas de tamaño pequeño para almacenar objetos de dimensiones reducidas.',
    categoria: 'Mini bodega',
    tamano: '1.5mt x 1.5mt',
    imagen: '/img/bodega-mini.jpg',
  },
  {
    id: 3,
    nombre: 'Bodega grande',
    descripcion: 'Bodegas de tamaño amplio para almacenar objetos de dimensiones mayores.',
    categoria: 'Bodega grande',
    tamano: '3mt x 3mt',
    imagen: '/img/bodega-grande.jpg',
  },
  {
    id: 4,
    nombre: 'Bodega a medida',
    descripcion: 'Espacio adaptado a tus necesidades. Nuestro equipo te asesora según el volumen de tus pertenencias.',
    categoria: 'Asesoría personalizada',
    tamano: 'Según cotización',
    imagen: '/img/bodega-medida.jpg',
  },
]
