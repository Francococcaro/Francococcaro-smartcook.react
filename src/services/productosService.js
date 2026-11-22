import { collection, getDocs, getDoc, setDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firestore/config";

const productosDB = collection(db, "productos");

// Read - Obtener todos los documentos de nuestra colección productos
export const readProductos = () => {
    return getDocs(productosDB).then((resp) => {
        return resp.docs.map((producto) => ({
            ...producto.data(),
            id: producto.id
        }));
    });
};

export const crearProducto = async (producto) => {
    const { id, ...datosProducto } = producto;

    if (!id?.trim()) {
		    throw new Error("El ID es obligatorio.");
		}

		const idLimpio = id.trim();
    const docRef = doc(db, "productos", idLimpio);
    const documentoExistente = await getDoc(docRef);    

    if (documentoExistente.exists()) {
        return null;
    }   

    await setDoc(docRef, datosProducto);

    return { ...datosProducto, id: idLimpio };
};

export const actualizarProducto = async (producto) => {
    const { id, ...datosProducto } = producto;
    
    if (!id?.trim()) {
        throw new Error("El ID es obligatorio.");
    }

    const idLimpio = id.trim();
    const docRef = doc(db, "productos", idLimpio);

    await updateDoc(docRef, datosProducto);

    return { ...datosProducto, id: idLimpio };
};

export const eliminarProducto = async (id) => {
    const docRef = doc(db, "productos", id);

    await deleteDoc(docRef);
};