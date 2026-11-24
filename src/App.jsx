import "./App.css";
//import "bootswatch/dist/Sandstone/bootstrap.min.css";
import { ItemListContainer } from "./components/TarjetaProducto/ItemListContainer/ItemListContainer";
import { Inicio } from "./components/Inicio/Inicio";
import { Layout } from "./components/Layout/Layout";
import { EquipoListContainer } from "./components/TaarjetaEquipo/EquipoListContainer/EquipoListContainer.jsx";
import { Routes, Route } from "react-router-dom";
import { ItemDetalle } from "./components/ItemDetalle/ItemDetalle";
import { Carrito } from "./components/Carrito/Carrito";
import Gestion from "./components/Gestion/Gestion.jsx";
import GestionCupones from "./components/GestionCupones/GestionCupones.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer Mensaje={"Productos destacados"}/>} />
        <Route path="/productos/:id" element={<ItemDetalle Mensaje={"Detalle del producto"}/>}  />
        <Route path="/nosotros" element={<EquipoListContainer Mensaje={"Nuestro equipo"} />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/cupones" element={<GestionCupones />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Route>
    </Routes>
  );
}
export default App;

/*         
      <Route path="/productos/categoria/:categoria" element={<h1>Productos por categoría</h1>} />
      <Route path="/productos/busqueda/:termino" element={<h1>Resultados de búsqueda</h1>} />
      <Route path="/nosotros/historia" element={<h1>Historia de SmartCook</h1>} /> 
      <Route path="/formulario/contacto" element={<h1>Formulario de contacto</h1>} />
      <Route path="/formulario/sugerencias" element={<h1>Formulario de sugerencias</h1>} />
      <Route path="/carrito/checkout" element={<h1>Checkout del carrito</h1>} />
      <Route path="/carrito/historial" element={<h1>Historial de compras</h1>} />
      <Route path="/carrito/detalle/:id" element={<h1>Detalle del carrito</h1>} />
      <Route path="/productos/nuevo" element={<h1>Agregar nuevo producto</h1>} />
      <Route path="/productos/editar/:id" element={<h1>Editar producto</h1>} />
      <Route path="/nosotros/mision" element={<h1>Misión de SmartCook</h1>} />
      <Route path="/nosotros/vision" element={<h1>Visión de SmartCook</h1>} />
      <Route path="/formulario/feedback" element={<h1>Formulario de feedback</h1>} />
      <Route path="/formulario/soporte" element={<h1>Formulario de soporte</h1>} />
      <Route path="/carrito/confirmacion" element={<h1>Confirmación de compra</h1>} />
      <Route path="/carrito/seguimiento" element={<h1>Seguimiento del pedido</h1>} />
      <Route path="/productos/ofertas" element={<h1>Ofertas y promociones</h1>} />
      <Route path="/productos/novedades" element={<h1>Novedades en productos</h1>} />
      <Route path="/nosotros/testimonios" element={<h1>Testimonios de clientes</h1>} />
      <Route path="/nosotros/faq" element={<h1>Preguntas frecuentes</h1>} />
      <Route path="/formulario/suscripcion" element={<h1>Formulario de suscripción</h1>} />
      <Route path="/formulario/reclamos" element={<h1>Formulario de reclamos</h1>} />
      <Route path="/carrito/cupones" element={<h1>Aplicar cupones de descuento</h1>} />
      <Route path="/carrito/devoluciones" element={<h1>Política de devoluciones</h1>} />
      <Route path="/productos/recetas" element={<h1>Recetas con nuestros productos</h1>} />
      <Route path="/productos/ingredientes" element={<h1>Información sobre ingredientes</h1>} />
      <Route path="/nosotros/blog" element={<h1>Blog de SmartCook</h1>} />
      <Route path="/nosotros/eventos" element={<h1>Eventos y actividades</h1>} />
      <Route path="/formulario/encuestas" element={<h1>Encuestas de satisfacción</h1>} />
      <Route path="/formulario/recomendaciones" element={<h1>Formulario de recomendaciones</h1>} />
      <Route path="/carrito/estadisticas" element={<h1>Estadísticas de compras</h1>} />
      <Route path="/carrito/analisis" element={<h1>Análisis de ventas</h1>} />
      <Route path="/productos/colaboraciones" element={<h1>Colaboraciones con chefs</h1>} />
      <Route path="/productos/ediciones-limitadas" element={<h1>Ediciones limitadas</h1>} />
      <Route path="/nosotros/sostenibilidad" element={<h1>Compromiso con la sostenibilidad</h1>} />
      <Route path="/nosotros/responsabilidad-social" element={<h1>Responsabilidad social corporativa</h1>} />
      <Route path="/formulario/inscripcion-eventos" element={<h1>Inscripción a eventos</h1>} />
      <Route path="/formulario/solicitud-colaboracion" element={<h1>Solicitud de colaboración</h1>} />
      <Route path="/carrito/gestion-inventario" element={<h1>Gestión de inventario</h1>} />
      <Route path="/carrito/reportes" element={<h1>Reportes de ventas</h1>} />
      <Route path="/productos/recetas-sugeridas" element={<h1>Recetas sugeridas por usuarios</h1>} />
      <Route path="/productos/valoraciones" element={<h1>Valoraciones de productos</h1>} />
      <Route path="/nosotros/alianzas" element={<h1>Alianzas estratégicas</h1>} />
      <Route path="/nosotros/premios" element={<h1>Premios y reconocimientos</h1>} />
      <Route path="/formulario/solicitud-empleo" element={<h1>Solicitud de empleo</h1>} />
      */