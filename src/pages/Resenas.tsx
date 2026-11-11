// Requisito: Página Reseñas
import TablaResenas from '../components/organisms/TablaResenas'
import { resenas } from '../data/resenas'

const Resenas = () => (
  <>
    <h2>Reseñas</h2>
    <p>Aquí encontrarás opiniones y comentarios de nuestros clientes sobre su experiencia con Mi Espacio.</p>
    <TablaResenas resenas={resenas} />
  </>
)

export default Resenas
