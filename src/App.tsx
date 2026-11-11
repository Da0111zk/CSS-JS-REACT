// Requisito: React Router - definición de rutas estáticas y dinámica
import { Route, Routes } from 'react-router-dom'
import BarraNavegacion from './components/organisms/BarraNavegacion'
import PiePagina from './components/organisms/PiePagina'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import Cotiza from './pages/Cotiza'
import DetalleServicio from './pages/DetalleServicio'
import Faq from './pages/Faq'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import NoEncontrada from './pages/NoEncontrada'
import Registro from './pages/Registro'
import Resenas from './pages/Resenas'
import Servicios from './pages/Servicios'
import Sucursales from './pages/Sucursales'

const App = () => (
  <>
    <BarraNavegacion />
    <main className="contenido">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:id" element={<DetalleServicio />} />
        <Route path="/cotiza" element={<Cotiza />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/resenas" element={<Resenas />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </main>
    <PiePagina />
  </>
)

export default App
