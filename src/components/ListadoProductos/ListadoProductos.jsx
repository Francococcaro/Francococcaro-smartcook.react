import styles from "./ListadoProductos.module.css";

function ListadoProductos({ productos, onEditar, onEliminar }) {
  if (productos.length === 0) {
    return <p>No hay productos cargados.</p>;
  }

  return (
    <ul className={styles.lista}>
      {productos.map((producto) => (
        <li key={producto.id} className={styles.item}>
          <div className={styles.info}>
            <span>{producto.nombre}</span>
            <span>{producto.detalles}</span>
            <span>${producto.precio}</span>
            <span>Stock: {producto.stock}</span>
            <span>Oferta: {producto.oferta ? "Sí" : "No"}</span>
          </div>

          <div className={styles.acciones}>
            <button type="button" onClick={() => onEditar(producto)}>
              Editar
            </button>

            <button
              type="button"
              className={styles.eliminar}
              onClick={() => onEliminar(producto.id)}>
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListadoProductos;
