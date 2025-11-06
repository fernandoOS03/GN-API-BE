
import m_ministro from '../models/m_ministro.js'

export const getMinistros = async () => {
    try {
        const ministros = await m_ministro.find();
        return ministros;
    } catch (error) {
        console.error(" [Servicio] Error al obtener los ministros de la DB: ", error);
        throw error;
    }
};

export const createMinistro = async (datosMinistro) => {
    try {
        const resultado = await m_ministro.create(datosMinistro);
        return resultado._id;
    } catch (error) {
        console.error(" [Servicio] Error al crear ministro en la DB: ", error);
        throw error;
    }
};

export const updateMinistro = async (id, datosMinistro) => {
    try {
        const resultado = await m_ministro.findByIdAndUpdate(id, datosMinistro, { new: true });
        if (!resultado) {
            return 0
        }
        return 1;
    } catch (error) {
        console.error(" [Servicio] Error al editar ministro en la DB: ", error);
        throw error;
    }
};

export const deleteMinistro = async (id) => {
    try {
        const resultado = await m_ministro.deleteOne( { _id: id });
        return resultado.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar ministro en la DB: ", error);
        throw error;
    }
};

export const getMinistroById = async (id) => {
    try {
        const ministro = await m_ministro.findById(id);
        return ministro;
    } catch (error) {
        console.error(" [Servicio] Error al obtener ministro de la DB: ", error);
        throw error;
    }
};
