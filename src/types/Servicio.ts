// Requisito: Uso de TypeScript - interfaces para los datos y las props
export interface Servicio {
  id: number
  nombre: string
  descripcion: string
  categoria: string
  tamano: string
  imagen: string
}

export interface PreguntaFrecuente {
  id: number
  pregunta: string
  respuesta: string
}
