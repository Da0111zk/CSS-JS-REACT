// Requisito: Átomo reutilizable - etiqueta de categoría
interface EtiquetaProps {
  texto: string
}

const Etiqueta = ({ texto }: EtiquetaProps) => <span className="etiqueta">{texto}</span>

export default Etiqueta
