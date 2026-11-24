import styles from "./FormularioProducto.module.css";
export function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  modoEdicion = false,
  onCancelar,
}) {
  return (
    <form className={styles.FormularioProducto} onSubmit={manejarEnvio}>
      <h3>{modoEdicion ? "Editar producto" : "Agregar nuevo producto"}</h3>
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
          placeholder="Ej: Teclado Mecánico"
          name="nombre"
          value={datosForm.nombre}
          onChange={manejarCambio}
          required
        />
      </div>
      <div>
        <label htmlFor="precio">Precio:</label>
        <input
          id="precio"
          type="number"
          placeholder="Ej: 95"
          name="precio"
          value={datosForm.precio}
          onChange={manejarCambio}
          min="0.01"
          step="0.01"
          required
        />
      </div>
      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          id="stock"
          type="number"
          placeholder="Ej: 5"
          name="stock"
          value={datosForm.stock}
          onChange={manejarCambio}
          min="0"
          step="1"
          required
        />
      </div>
      <div>
        <label htmlFor="imagen">Imagen (URL):</label>
        <input
          id="imagen"
          type="url"
          placeholder="https://..."
          name="imagen"
          value={datosForm.imagen}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label htmlFor="detalles">Detalles:</label>
        <textarea
          id="detalles"
          name="detalles"
          value={datosForm.detalles}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label htmlFor="oferta">Producto en oferta:</label>
        <input
          id="oferta"
          type="checkbox"
          name="oferta"
          checked={datosForm.oferta}
          onChange={manejarCambio}
        />
      </div>

      <button type="submit">
        {modoEdicion ? "Actualizar producto" : "Guardar producto"}
      </button>

      {modoEdicion && (
        <button type="button" onClick={onCancelar}>
          Cancelar edición
        </button>
      )}
    </form>
  );
}
