import styles from "./Inicio.module.css";
import { ItemListContainer } from "../TarjetaProducto/ItemListContainer/ItemListContainer";

export function Inicio({}) {
  return (
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

      <section className={styles.section_div3}>
        <ItemListContainer
          Mensaje={"Ofertas de la semana"}
          soloOfertas={true}
        />
      </section>

      <h1 style={{ fontSize: "30px", lineHeight: "1.5", color: "#184E52" }}>
        ¿Por qué elegir SmartCook?
      </h1>

      <section className={styles.section_div2}>
        <p>
          SmartCook ofrece una experiencia culinaria única, combinando la
          comodidad de la comida lista con la calidad de los ingredientes
          frescos y naturales. Nuestros platos son cuidadosamente preparados y
          sellados al vacío para mantener su sabor y frescura, permitiéndote
          disfrutar de comidas caseras y prácticas en tan solo 15 minutos.
        </p>
      </section>
    </div>
  );
}
