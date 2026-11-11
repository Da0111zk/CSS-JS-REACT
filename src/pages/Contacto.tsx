// Requisito: Página Contacto - canales de atención y formulario validado
import CanalesContacto from '../components/organisms/CanalesContacto'
import FormularioContacto from '../components/organisms/FormularioContacto'
import { canalesContacto } from '../data/contacto'

const Contacto = () => (
  <>
    <h2>Contacto</h2>
    <p>¿Tienes dudas sobre nuestras bodegas o necesitas asesoría personalizada? Contáctanos a través de cualquiera de nuestros canales de atención o envíanos un mensaje.</p>
    <div className="container-xl">
      <CanalesContacto canales={canalesContacto} />
    </div>
    <FormularioContacto />
  </>
)

export default Contacto
