import { EquipoList } from "../EquipoList/EquipoList";
import styles from "./EquipoListContainer.module.css";
import { useState, useEffect } from "react";

export function EquipoListContainer({ Mensaje }) {
  const [equipos, setEquipos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setEquipos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando equipo, por favor espere...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2 className={styles.subtitulo}>{Mensaje}</h2>
      <div className={styles.equipo}>
        <EquipoList equipo={equipos} />
      </div>
    </>
  );
}
