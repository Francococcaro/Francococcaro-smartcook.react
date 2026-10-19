// En /components/Layout/Layout.jsx
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

export function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <section className={styles.section}>
          <h1>Comida lista en 15 minutos</h1>
          <p>Sellada al vacío · Casera · Práctica</p>
        </section>
        <section className={styles.section_div1}>
          <div className={styles.mini_menu}>
            <div className={styles.mini_item}>
              <img
                className={styles.mini_item_img}
                src="./images/menu/clientes.png"
              />
              <span>Clientes</span>
            </div>

            <div className={styles.mini_item}>
              <img
                className={styles.mini_item_img}
                src="./images/menu/envios.png"
              />
              <span>Envios</span>
            </div>

            <div className={styles.mini_item}>
              <img
                className={styles.mini_item_img}
                src="./images/menu/pagos.png"
              />
              <span>Pagos</span>
            </div>

            <div className={styles.mini_item}>
              <img
                className={styles.mini_item_img}
                src="./images/menu/vinos.png"
              />
              <span>Vinos</span>
            </div>

            <div className={styles.mini_item}>
              <img
                className={styles.mini_item_img}
                src="./images/menu/platos.png"
              />
              <span>Mas Platos</span>
            </div>
          </div>
        </section>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
