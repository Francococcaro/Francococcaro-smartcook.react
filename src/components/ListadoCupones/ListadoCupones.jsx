import styles from "./ListadoCupones.module.css";

function ListadoCupones({ cupones, onEliminar }) {
  if (cupones.length === 0) {
    return <p>No hay cupones cargados.</p>;
  }

  return (
    <ul className={styles.lista}>
      {cupones.map((cupon) => (
        <li key={cupon.id} className={styles.item}>
          <div className={styles.info}>
            <span>{cupon.nombre}</span>
            <span>{cupon.Porcentaje}%</span>
          </div>
          <button
              type="button"
              className={styles.eliminar}
              onClick={() => onEliminar(cupon.id)}>
              Eliminar
            </button>
        </li>
      ))}
    </ul>
  );
}

export default ListadoCupones;
