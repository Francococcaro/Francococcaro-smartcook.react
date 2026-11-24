import { collection, getDocs, getDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firestore/config";

const cuponesDB = collection(db, "cupones");

// Read - Obtener todos los documentos de nuestra colección cupones
export const readCupones = () => {
    return getDocs(cuponesDB).then((resp) => {
        return resp.docs.map((cupon) => ({
            ...cupon.data(),
            id: cupon.id
        }));
    });
};

export const crearCupon = async (cupon) => {
    const { id, ...datosCupon } = cupon;

    if (!id?.trim()) {
            throw new Error("El ID es obligatorio.");
        }

    const idLimpio = id.trim();
    const docRef = doc(db, "cupones", idLimpio);
    const documentoExistente = await getDoc(docRef);

    if (documentoExistente.exists()) {
        return null;
    }   

    await setDoc(docRef, datosCupon);

    return { ...datosCupon, id: idLimpio };
};

export const eliminarCupon = async (id) => {
    const docRef = doc(db, "cupones", id);

    await deleteDoc(docRef);
};

