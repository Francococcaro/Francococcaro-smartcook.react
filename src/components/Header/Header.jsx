import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contenedor} to="/">
        <a href="/"><img
          className={styles.img}
          src="/images/menu/smartcook-logo.png"
          alt="SmartCook Logo"
        /></a>
        <a href="/" className={styles.a}><h1>SmartCook</h1></a>
      </div>
      <nav className={styles.NavBar}>
        <a href="/" className={styles.a}>
          Inicio
        </a>
        <a href="/productos" className={styles.a}>
          Productos
        </a>
        <a href="/nosotros" className={styles.a}>
          Nosotros
        </a>
        <a href="/carrito" className={styles.carrito}>
          Carrito 🛒
        </a>
      </nav>
    </header>
  );
}
export default Header;
