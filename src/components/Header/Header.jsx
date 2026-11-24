import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
function Header() {
  const { getCartQuantity } = useCart();

  const totalItems = getCartQuantity();

  return (
    <header className={styles.header}>
      <div className={styles.contenedor} to="/">
        <Link to="/">
          <img
            className={styles.img}
            src="/images/menu/smartcook-logo.png"
            alt="SmartCook Logo"
          />
        </Link>
        <Link to="/" className={styles.a}><h1>SmartCook</h1></Link>
      </div>
      <nav className={styles.NavBar}>
        <Link to="/" className={styles.a}>Inicio</Link>
        <Link to="/productos" className={styles.a}>Productos</Link>
        <Link to="/nosotros" className={styles.a}>Nosotros</Link>
        <Link to="/gestion" className={styles.a}>Gestion de Productos</Link>
        <Link to="/cupones" className={styles.a}>Cupones</Link>
        <Link to="/carrito" className={styles.carrito}>🛒 {totalItems > 0 && <span>{totalItems}</span>}</Link>
      </nav>
    </header>
  );
}
export default Header;
