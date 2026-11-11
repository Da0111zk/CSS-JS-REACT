// Requisito: Página Inicio - presenta el propósito de la aplicación
import Boton from '../components/atoms/Boton'

const Inicio = () => (
  <div className="caja">
    <p>
      ¡Bienvenido a nuestro espacio! Aquí encontrarás todo lo que necesitas para almacenar tus pertenencias de manera segura y conveniente. Nuestro objetivo es brindarte un servicio de calidad y confianza. Explora nuestras opciones y descubre cómo podemos ayudarte a mantener tu espacio organizado.
    </p>
    <p>
      En Mi Espacio, ofrecemos una variedad de servicios diseñados para satisfacer tus necesidades de almacenamiento. A continuación, te presentamos algunos de nuestros servicios destacados:
    </p>
    <ul>
      <li>Almacenamiento seguro: Contamos con instalaciones modernas y seguras para proteger tus pertenencias.</li>
      <li>Acceso conveniente: Puedes acceder a tu espacio de almacenamiento en horarios flexibles.</li>
      <li>Variedad de tamaños: Ofrecemos diferentes tamaños de unidades para adaptarnos a tus necesidades.</li>
      <li>Asesoramiento personalizado: Nuestro equipo está disponible para ayudarte a elegir la mejor opción de almacenamiento para ti.</li>
    </ul>
    <div className="text-center">
      <Boton to="/servicios">Ver servicios</Boton>
    </div>
    <img src="/img/bodega-medida.jpg" alt="Servicios de almacenamiento" />
  </div>
)

export default Inicio
