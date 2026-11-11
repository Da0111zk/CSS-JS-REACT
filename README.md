# Mi Espacio

React + Vite + TypeScript + Bootstrap + React Router, organizado con Atomic Design.
Mantiene la identidad visual de la versión HTML/CSS (paleta café/rojo, logo, textos).

## Ejecutar

    npm install
    npm run dev

## Estructura

- `src/components/atoms`: Boton, Etiqueta, Entrada
- `src/components/molecules`: NavItem, ServicioCard, CampoFormulario, ItemFaq, CanalContactoCard, SucursalCard
- `src/components/organisms`: BarraNavegacion, PiePagina, CatalogoServicios, ListaFaq, CanalesContacto, ListaSucursales, TablaResenas, FormularioCotizacion, FormularioContacto, FormularioLogin, FormularioRegistro
- `src/pages`: Inicio, Acerca, Contacto, Servicios, DetalleServicio, Cotiza, Faq, Resenas, Sucursales, Login, Registro, NoEncontrada
- `src/hooks/useFormulario.ts`: estado y validación compartidos por todos los formularios
- `src/styles/mi-espacio.css`: paleta y estilos del sitio original sobre Bootstrap

## Rutas

- `/` Inicio
- `/acerca` Acerca de
- `/servicios` Catálogo
- `/servicios/:id` Detalle (useParams)
- `/cotiza` Formulario con validación (acepta `?servicio=ID`)
- `/faq` Preguntas frecuentes
- `/contacto`, `/resenas`, `/sucursales`
- `/login`, `/registro` (validación en el cliente, sin servidor)
