import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from "react";

import {readProductos} from "../../../services/productosService.js";

export function ItemListContainer({ Mensaje, soloOfertas = false }) {
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
  
  /*useEffect(() => {
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
}, []);*/
  useEffect(() => {
    
    /* const productosDB = collection(db, "productos");
    getDocs(productosDB).then((res) => {
      setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));*/

    setCargando(true);
    readProductos()
      .then((datos) => {
        if (soloOfertas) {
          const filtrados = datos.filter((producto) => producto.oferta === true);
          setProductos(filtrados);
        } else {
          setProductos(datos);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [soloOfertas]);

  if (cargando) {
    return <p>Cargando productos, por favor espere...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2 className={styles.subtitulo}>{Mensaje}</h2>
      <div className={styles.productos}>
        <ItemList
          productos={productos}
          favoritos={favoritos}
          setFavoritos={setFavoritos}
          cantidades={cantidades}
          setCantidades={setCantidades}
        />
      </div>
    </>
  );
}
