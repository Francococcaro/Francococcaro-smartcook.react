import { useParams } from "react-router-dom";
import styles from "./ItemDetalle.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function ItemDetalle({ Mensaje }) {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState([false]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const productoId = productos.find((producto) => producto.id == id);

  if (!productoId) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
    <h2>{Mensaje}</h2>
    <div className={styles.ItemDetalle}>
        
        <img
          src={productoId?.imagen}
          alt={productoId?.nombre}
          className={styles.li_img}
        />
        <p>{productoId?.nombre}</p>
        <p>Precio: ${productoId?.precio}</p>
        <p>{productoId?.descripcion}</p>
        <Link className={styles.Link} to='/productos'>Volver a Productos</Link>
    </div>
    </>
  );
}