// Requisito: Página de preguntas frecuentes con acordeón
import ListaFaq from '../components/organisms/ListaFaq'
import { preguntasFrecuentes } from '../data/faq'

const Faq = () => (
  <>
    <h2>Preguntas Frecuentes</h2>
    <p>Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios y cómo funciona Mi Espacio.</p>
    <ListaFaq preguntas={preguntasFrecuentes} />
  </>
)

export default Faq
