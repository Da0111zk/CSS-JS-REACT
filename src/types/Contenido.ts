// Requisito: Uso de TypeScript - interfaces para sucursales, reseñas y canales de contacto
export interface Sucursal {
  id: number
  nombre: string
  direccion: string
  horario: string
  acceso: string
  telefono: string
  mapaUrl: string
}

export interface Resena {
  id: number
  nombre: string
  texto: string
  evaluacion: number
}

export interface LineaContacto {
  texto: string
  enlace?: string
  icono?: string
}

export interface CanalContacto {
  id: number
  icono: string
  titulo: string
  lineas: LineaContacto[]
  nota?: string
}
