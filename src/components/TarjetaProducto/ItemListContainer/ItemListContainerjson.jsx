import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from "react";

export function ItemListContainer({ Mensaje }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [favoritos, setFavoritos] = useState({});
  const [cantidades, setCantidades] = useState({});

  useEffect(() => {
    console.log("Se actualizaron los estados de los favoritos!")
  }, [favoritos]);

  useEffect(() => {
  console.log("Se actualizaron los estados del carrito!");
}, [cantidades]);
  
  useEffect(() => {
  const obtenerProductos = async () => {

    try {
      const respuesta = await fetch("/data/productos.json");
      if (!respuesta.ok) {
        throw new Error("No se pudo cargar la información de los productos");
      }
      const datos = await respuesta.json();
      setProductos(datos);

    } catch (error) {
      setError(error.message);
    } finally {
      setCargando(false);
    }
  };
  obtenerProductos();
}, []);

    /*fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });

  }, []);*/

  if (cargando) {
    return <p>Cargando productos, por favor espere...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const productosFiltrados = productos.filter((prod) => prod.stock > 5);
  return (
    <>
      <h2 className={styles.subtitulo}>{Mensaje}</h2>
      <div className={styles.productos}>
        <ItemList
          productos={productosFiltrados}
          favoritos={favoritos}
          setFavoritos={setFavoritos}
          cantidades={cantidades}
          setCantidades={setCantidades}
        />
      </div>
    </>
  );
}
