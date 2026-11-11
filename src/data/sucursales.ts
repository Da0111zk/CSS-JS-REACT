// Requisito: Datos tipados de sucursales
import type { Sucursal } from '../types/Contenido'

export const sucursales: Sucursal[] = [
  {
    id: 1,
    nombre: "Sucursal Norte - Quilicura",
    direccion: "Av. Américo Vespucio 1234, Quilicura",
    horario: "Lunes a Viernes 8:00 - 19:00 hrs",
    acceso: "24/7 con tarjeta digital",
    telefono: "+56 9 1234 5678",
    mapaUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.221764372225!2d-70.7325608!3d-33.3653181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c1404113cb63%3A0xb3ff7ed01c706d9a!2sQuilicura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1710000000000!5m2!1ses!2scl",
  },
  {
    id: 2,
    nombre: "Sucursal Centro - Santiago",
    direccion: "Av. Libertador Bernardo O'Higgins 2500, Santiago",
    horario: "Lunes a Sábado 9:00 - 18:00 hrs",
    acceso: "24/7 con tarjeta digital",
    telefono: "+56 9 8765 4321",
    mapaUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3108985923985!2d-70.6653199!3d-33.4447387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a22f3050bd%3A0x1d37c8a6f874c728!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1710000000000!5m2!1ses!2scl",
  },
]
