import styles from "./Carrito.module.css";
import { useCart } from "../../context/CartContext.jsx";
export function Carrito({children}) {
  const { cart, clearCart, getCartQuantity, getCartTotal, clearItem } = useCart();

  // 1. Condición temprana si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className={styles.Carrito}>
        <h1 className={styles.h1}>Carrito de Compras</h1>
        <p className={styles.p}>El carrito está vacío.</p>
      </div>
    );
  }

  // 2. Renderizado normal cuando el carrito SI tiene productos
  return (
    <div className={styles.Carrito}>
      <h1 className={styles.h1}>Carrito de Compras</h1>

      {cart.map((item) => (
        <div key={item.id} className={styles.CartItem}>
          <img src={item.imagen} alt={item.nombre} className={styles.CartItemImage} />
          <h4>{item.nombre}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.precio}</p>
          <p>Subtotal: ${item.precio * item.quantity}</p>
          <button className={styles.eliminar} onClick={() => clearItem(item.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <hr />
      <h3>Total de Items: {getCartQuantity()}</h3>
      <h3>Total a pagar: ${getCartTotal()}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
}