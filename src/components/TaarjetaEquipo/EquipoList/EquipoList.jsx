import styles from "./EquipoList.module.css";
import { Equipo } from "../Equipo/Equipo";

export function EquipoList({ equipo }) {
  return (
    <div className={styles.EquipoList}>
      {equipo?.map((integrante) => (
        <Equipo key={integrante.id} {...integrante} />
      ))}
    </div>
  );
}
