import { useState } from "react";
//import { FormularioProducto } from "../FormularioProductos/FormularioProducto";
import { FormularioProducto } from "../FormularioProductos/FormularioProducto.jsx";
export function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    id: "",
    nombre: "",
    precio: "",
    stock: "",
  });

  const [imagenFile, setImagenFile] = useState(null);

  const manejarCambio = (evento) => {
    let { name, value } = evento.target;

    if (name === "precio" || name === "stock") {
      value = parseFloat(value);
    }

    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }
    const apiKey = "74be755e77786cd6854e0c620ab3641f";
    const formData = new FormData();
    formData.append("image", imagenFile);
    try {
      console.log("Subiendo imagen a Imgbb...");
      const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );
      const datosImgbb = await respuestaImgbb.json();
      if (datosImgbb.success) {
        console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url,
        };
        console.log(
          "Enviando los siguientes datos COMPLETOS a la API:",
          productoCompleto,
        );
      } else {
        throw new Error("La subida de la imagen a Imgbb falló.");
      }
    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
    }
  };

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
    />
  );
}
