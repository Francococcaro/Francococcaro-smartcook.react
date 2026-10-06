import styles from "./Equipo.module.css";
export function Equipo({ imagen, nombre, cargo, email }) {

  return (
    <div className={styles.Equipo}>      
      <li className={styles.li}>
        <img src={imagen} alt="" className={styles.Equipo_img} />
        <h3>{nombre}</h3>        
        <p>{cargo}</p>
        <p>{email}</p>
      </li>
    </div>
  );
}
