import styles from "./ItemList.module.css";
import { Item } from "../Item/Item";
export function ItemList({ productos, favoritos, setFavoritos, cantidades, setCantidades,
}) {
  return (
    <div className={styles.ItemList}>
      {productos.map((prod) => (
        <Item
          key={prod.id}
          {...prod}
          favorito={favoritos[prod.id]}
          setFavoritos={setFavoritos}
          cantidad={cantidades[prod.id] || 0}
          setCantidades={setCantidades}
        />
      ))}
    </div>
  );
}
