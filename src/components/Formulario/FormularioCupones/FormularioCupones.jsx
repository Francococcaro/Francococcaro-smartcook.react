import styles from "./FormularioCupones.module.css";
export function FormularioCupones({
  datosForm,
  manejarCambio,
  manejarEnvio,
  modoEdicion = false,
  onCancelar,
}) {
  return (
    <form className={styles.FormularioCupones} onSubmit={manejarEnvio}>
      <h3>{modoEdicion ? "Guardar cupón" : "Agregar cupón"}</h3>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          id="id"
          type="text"
          placeholder="Ej: 123452"
          name="id"
          value={datosForm.id}
          onChange={manejarCambio}
          disabled={modoEdicion}
          required
        />
      </div>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          placeholder="SmartCook15"
          name="nombre"
          value={datosForm.nombre}
          onChange={manejarCambio}
          required
        />
      </div>
      <div>
        <label htmlFor="precio">Porcentaje:</label>
        <input
          id="Porcentaje"
          type="number"
          placeholder="15%"
          name="Porcentaje"
          value={datosForm.Porcentaje}
          onChange={manejarCambio}
          min="0.01"
          step="0.01"
          required
        />
      </div>

      <button type="submit">
        {modoEdicion ? "Guardar cupón" : "Agregar cupón"}
      </button>

      {modoEdicion && (
        <button type="button" onClick={onCancelar}>
          Cancelar edición
        </button>
      )}
    </form>
  );
}