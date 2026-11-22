import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import { useLocation, Outlet, matchPath } from "react-router-dom";

export function Layout() {
  const location = useLocation();

    // 2. Usamos matchPath para la ruta con :id, y comparaciones simples para las fijas
  const esRutaProductoDinamica = matchPath("/productos/:id", location.pathname);

  const ocultarEnRuta =
    location.pathname === "/productos" ||
    !!esRutaProductoDinamica || // El !! lo transforma a un valor verdadero (true) si hay coincidencia
    location.pathname === "/nosotros" ||
    location.pathname === "/formulario" ||
    location.pathname === "/carrito";

  return (
    <div>
      <Header />

      {!ocultarEnRuta && (
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
      )}

      <main>
        <Outlet />
      </main>

      {!ocultarEnRuta && (
        <div>
          <section className={styles.section_div2}>
            <p>
              SmartCook ofrece una experiencia culinaria única, combinando la
              comodidad de la comida lista con la calidad de los ingredientes
              frescos y naturales. Nuestros platos son cuidadosamente preparados
              y sellados al vacío para mantener su sabor y frescura,
              permitiéndote disfrutar de comidas caseras y prácticas en tan solo
              15 minutos.
            </p>
          </section>
        </div>
      )}

      <Footer />
    </div>
  );
}
