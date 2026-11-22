import { useEffect, useState } from "react";
import styles from "./Gestion.module.css";
import ListadoProductos from "../ListadoProductos/ListadoProductos.jsx";
import { FormularioProducto } from "../Formulario/FormularioProductos/FormularioProducto.jsx";
import {
  readProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from "../../services/productosService.js";

const estadoInicialForm = {
  id: "",
  nombre: "",
  precio: "",
  stock: "",
  imagen: "",
  detalles: "",
  oferta: false,
};

const manejarCambio = (evento) => {
  const { name, value, type, checked } = evento.target;

  setDatosForm((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

const manejarEnvio = async (evento) => {
  evento.preventDefault();

  const producto = {
    id: datosForm.id.trim(),
    nombre: datosForm.nombre.trim(),
    precio: Number(datosForm.precio),
    stock: Number(datosForm.stock),
    imagen: datosForm.imagen.trim(),
    detalles: datosForm.detalles.trim(),
    oferta: datosForm.oferta,
  };

  if (
    !producto.id ||
    !producto.nombre ||
    datosForm.precio.trim() === "" ||
    !Number.isFinite(producto.precio) ||
    producto.precio <= 0 ||
    datosForm.stock.trim() === "" ||
    !Number.isInteger(producto.stock) ||
    producto.stock < 0
  ) {
    alert("Verifique los datos ingresados.");
    return;
  }

  try {
    if (productoAEditar) {
      const actualizado = await actualizarProducto(producto);

      setProductos((prev) =>
        prev.map((prod) => (prod.id === actualizado.id ? actualizado : prod)),
      );

      setProductoAEditar(null);

      alert("Producto actualizado correctamente.");
    } else {
      const creado = await crearProducto(producto);

      if (!creado) {
        alert("Ya existe un producto con ese ID.");
        return;
      }

      setProductos((prev) => [...prev, creado]);

      alert("Producto creado correctamente.");
    }

    setDatosForm(estadoInicialForm);
  } catch (error) {
    console.error(error);
    alert("No se pudo guardar el producto.");
  }
};
const manejarCambioImagen = (evento) => {
  setImagenFile(evento.target.files[0]);
};
const manejarEditar = (producto) => {
  setProductoAEditar({ ...producto });
};

const cancelarEdicion = () => {
  setProductoAEditar(null);
};

const manejarEliminar = async (id) => {
  const confirmar = window.confirm(
    "¿Desea eliminar este producto? Esta acción no se puede deshacer.",
  );

  if (!confirmar) {
    return;
  }

  try {
    await eliminarProducto(id);

    setProductos((prev) => prev.filter((prod) => prod.id !== id));

    if (productoAEditar?.id === id) {
      setProductoAEditar(null);
    }

    alert("Producto eliminado correctamente.");
  } catch (error) {
    console.error(error);
    alert("No se pudo eliminar el producto.");
  }
};

function Gestion() {
  const [datosForm, setDatosForm] = useState(estadoInicialForm);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [productoAEditar, setProductoAEditar] = useState(null);
  const modoEdicion = Boolean(productoAEditar);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const datos = await readProductos();
        setProductos(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  useEffect(() => {
    if (productoAEditar) {
      setDatosForm({
        id: productoAEditar.id,
        nombre: productoAEditar.nombre ?? "",
        precio: String(productoAEditar.precio ?? ""),
        stock: String(productoAEditar.stock ?? ""),
        imagen: productoAEditar.imagen ?? "",
        detalles: productoAEditar.detalles ?? "",
        oferta: productoAEditar.oferta ?? false,
      });
    } else {
      setDatosForm(estadoInicialForm);
    }
  }, [productoAEditar]);

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <h2>Gestión de productos</h2>
      <ListadoProductos
        productos={productos}
        onEditar={manejarEditar}
        onEliminar={manejarEliminar}
      />
      <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        manejarCambioImagen={manejarCambioImagen}
        modoEdicion={modoEdicion}
        onCancelar={cancelarEdicion}
      />
    </div>
  );
}

export default Gestion;
