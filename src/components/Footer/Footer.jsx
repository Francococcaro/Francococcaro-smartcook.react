import { EquipoListContainer } from "../TaarjetaEquipo/EquipoListContainer/EquipoListContainer";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <EquipoListContainer Mensaje="Nuestro Equipo" />
        <h3>SmartCook</h3>
        <p>Comida casera lista en minutos.</p>
      </div>

      <div className={styles.footer_bottom}>
        <p>© 2026 SmartCook - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
export default Footer;
