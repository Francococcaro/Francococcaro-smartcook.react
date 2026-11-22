import styles from "./Item.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext.jsx";

export function Item({
  id,
  nombre,
  precio,
  stock,
  imagen,
  favorito,
  setFavoritos,
  cantidad,
  setCantidades,
}) {
  const { addToCart, getCantidadActual } = useCart();

  const handelAgregarAlCarrito = () => {
    if (cantidad > 0) {
      addToCart({ id, nombre, precio, stock, imagen }, cantidad);
    }
    alert(`¡Agregaste ${cantidad} unidades de ${nombre} al chango!`);
  };

  const marcarComoFavorito = () => {
    setFavoritos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidades((prev) => ({
        ...prev,
        [id]: cantidad + 1,
      }));
    }
  };

  const decrementar = () => {
    if (cantidad > 0) {
      setCantidades((prev) => ({
        ...prev,
        [id]: cantidad - 1,
      }));
    }
  };

  return (
    <div className={styles.Item}>
      <h3>{nombre}</h3>
      <span onClick={marcarComoFavorito} style={{ fontSize: "40px" }}>
        {" "}
        {favorito ? "⭐" : "☆"}
      </span>
      <li>
        <img src={imagen} alt={nombre} className={styles.li_img} />
        <p>Precio: ${precio}</p>
        <p>Stock disponible: {stock}</p>
        <button onClick={decrementar} className={styles.btn_control}>
          -
        </button>
        <span style={{ margin: "0 10px" }}>{cantidad}</span>
        <button onClick={incrementar} className={styles.btn_control}>
          +
        </button>
      </li>
      <button onClick={handelAgregarAlCarrito}>Agregar al Carrito</button>
      <span>
        {getCantidadActual(id) === 0
          ? "Todavía no agregaste elementos"
          : `Tenés ${getCantidadActual(id)} items en el carrito de este producto`}
      </span>
      <Link to={`/productos/${id}`}>Detalle Producto...</Link>
    </div>
  );
}
