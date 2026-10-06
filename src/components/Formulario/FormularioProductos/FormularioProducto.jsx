
import styles from "./FormularioProducto.module.css";
export function FormularioProducto({ datosForm, manejarCambio, manejarCambioImagen, manejarEnvio }) {
  return (
    <form className={styles.FormularioProducto} onSubmit={manejarEnvio}>
      <h3>Agregar Nuevo Producto</h3>
      <div>
        <label htmlFor="id">ID_Producto:
          <input 
            type="text" 
            placeholder="Ej: 123452"
            name="id" 
            onChange={manejarCambio} 
          />
        </label>
      </div>
      <div>
        <label htmlFor="nombre">Nombre del Producto:</label>
        <input
          type="text"
          placeholder="Ej: Teclado Mecánico"
          name="nombre"
          value={datosForm}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          placeholder="Ej: 95"
          name="precio"
          value={datosForm}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          placeholder="Ej: 5"
          name="stock"
          value={datosForm}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label htmlFor="urlImagen">Imagen:</label>
        <input
          type="file"
          placeholder="https://..." 
          name="urlImagen"
          value={datosForm}
          onChange={manejarCambioImagen}          
        />
      </div>
      <button type="submit">Guardar Producto</button>
    </form>
  );
}
