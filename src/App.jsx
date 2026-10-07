// /src/App.jsx
import "./App.css";
//import "bootswatch/dist/Sandstone/bootstrap.min.css";
import styles from "./components/Layout/Layout.module.css";
import { ItemListContainer } from "./components/TarjetaProducto/ItemListContainer/ItemListContainer";
import { Layout } from "./components/Layout/Layout";
import { FormularioContainer } from "./components/Formulario/FormularioContainer/FormularioContainer";

function App() {
  return (
    <Layout>
      <div className={styles.cuerpo}>
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
        <div>
          <ItemListContainer Mensaje="Nuestros productos destacados" />
        </div>
        <div>
          <FormularioContainer />
        </div>
      </div>      
    </Layout>
  );
}
export default App;
