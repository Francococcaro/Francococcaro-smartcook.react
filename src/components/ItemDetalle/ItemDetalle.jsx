import { useParams } from "react-router-dom";
import styles from "./ItemDetalle.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { readProductos } from "../../services/productosService.js";

export function ItemDetalle({ Mensaje }) {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    readProductos()
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
    return <p>Cargando productos, por favor espere...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const productoId = productos.find(
    (producto) => String(producto.id) === String(id),
  );

  if (!productoId) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className={styles.container}>
      <h2>{Mensaje}</h2>
      <div className={styles.ItemDetalle}>        
        <img
          src={productoId?.imagen}
          alt={productoId?.nombre}
          className={styles.li_img}
        />
        <p>{productoId?.nombre}</p>
        <p>Precio: ${productoId?.precio}</p>
        <p>{productoId.detalles || productoId.descripcion}</p>
        <Link className={styles.Link} to="/productos">
          Volver a Productos
        </Link>
      </div>
    </div>
  );
}
