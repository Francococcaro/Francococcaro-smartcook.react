import { useEffect, useState } from "react";
import styles from "./GestionCupones.module.css";
import ListadoCupones from "../ListadoCupones/ListadoCupones.jsx";
import { FormularioCupones } from "../Formulario/FormularioCupones/FormularioCupones.jsx";
import {
  readCupones,
  crearCupon,
  eliminarCupon,
} from "../../services/cuponesService.js";

const estadoInicialForm = {
  id: "",
  nombre: "",
  Porcentaje: "",
};

function GestionCupones() {
  const [datosForm, setDatosForm] = useState(estadoInicialForm);
  const [cupones, setCupones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value, type, checked } = evento.target;

    setDatosForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    const nuevoCupon = {
      id: datosForm.id.trim(),
      nombre: datosForm.nombre.trim(),
      Porcentaje: Number(datosForm.Porcentaje),
    };

    if (
      !nuevoCupon.id ||
      !nuevoCupon.nombre ||
      datosForm.Porcentaje.trim() === "" ||
      !Number.isFinite(nuevoCupon.Porcentaje) ||
      nuevoCupon.Porcentaje <= 0
    ) {
      alert("Verifique los datos ingresados.");
      return;
    }

    try {
      const creado = await crearCupon(nuevoCupon);

      if (!creado) {
        alert("Ya existe un cupón con ese ID.");
        return;
      }

      setCupones((prev) => [...prev, creado]);
      setDatosForm(estadoInicialForm);
      alert("Cupón creado correctamente.");
    } catch (error) {
      console.error(error);
      alert("No se pudo guardar el cupón.");
    }
  };

  const manejarEliminar = async (id) => {
    const confirmar = window.confirm(
      "¿Desea eliminar este cupon? Esta acción no se puede deshacer.",
    );

    if (!confirmar) {
      return;
    }

    try {
      await eliminarCupon(id);

      setCupones((prev) => prev.filter((cupon) => cupon.id !== id));

      alert("Cupon eliminado correctamente.");
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar el cupon.");
    }
  };

  useEffect(() => {
    const cargarCupones = async () => {
      try {
        const datos = await readCupones();
        setCupones(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    cargarCupones();
  }, []);

  if (cargando) {
    return <p>Cargando cupones...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <h2>Gestión de Cupones</h2>
      <br />
      <h2>Listado de cupones</h2>
      <br />
      <ListadoCupones cupones={cupones} onEliminar={manejarEliminar} />
      <FormularioCupones
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
      />
    </div>
  );
}

export default GestionCupones;
