import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";
import m_sedeInternacional from '../models/m_sedeInternacional.js';

export const getSedeInternacional = async () => {
    try {
        const sedeInternacional = await m_sedeInternacional.find();
        return sedeInternacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener las sedes InterNacionales de la DB: ", error);
        throw error;
    }
};

export const createSedeInternacional = async (datosSedeInternacional) => {
    try {
        const resultado = await m_sedeInternacional.create(datosSedeInternacional);
        return resultado._id;
    } catch (error) {
        console.error(" [Servicio] Error al crear sede Internacional en la DB: ", error);
        throw error;
    }
};

export const updateSedeInternacional = async (id, datosSedeInternacional) => {
    try {
        const resultado = await m_sedeInternacional.findByIdAndUpdate(id, datosSedeInternacional, { new: true });
        if (!resultado) {
            return 0
        }
        return 1;
    } catch (error) {
        console.error(" [Servicio] Error al editar sede Internacional en la DB: ", error);
        throw error;
    }
};

export const deleteSedeInternacional = async (id) => {
    try {
        const resultado = await m_sedeInternacional.deleteOne({ _id: id });
        return resultado.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar sede Internacional en la DB: ", error);
        throw error;
    }
};

export const getSedeInternacionalById = async (id) => {
    try {
        const sedeInternacional = await m_sedeInternacional.findById(id);
        return sedeInternacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener sede Internacional de la DB: ", error);
        throw error;
    }
};
