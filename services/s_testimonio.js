import m_testimonio from "../models/m_testimonio.js";

export const getAllTestimonios = async () => {
    try {
        const testimonios = await m_testimonio.find();
        return testimonios;
    } catch (error) {
        console.error(" [Servicio] Error al obtener los testimonios de la DB: ", error);
        throw error;
    }
};

export const createTestimonio = async (datosTestimonio) => {
    try {
        const resultado = await m_testimonio.create(datosTestimonio);
        return resultado._id;
    } catch (error) {
        console.error(" [Servicio] Error al crear testimonio en la DB: ", error);
        throw error;
    }
};

export const updateTestimonio = async (id, datosTestimonio) => {
    try {
        const resultado = await m_testimonio.findByIdAndUpdate(id, datosTestimonio, { new: true });
        if (!resultado) {
            return 0
        }
        return 1;
    } catch (error) {
        console.error(" [Servicio] Error al editar testimonio en la DB: ", error);
        throw error;
    }
};

export const deleteTestimonio = async (id) => {
    try {
        const resultado = await m_testimonio.deleteOne({_id:id});
        return resultado.deletedCount;
    } catch (error) {
        console.error(" [Servicio] Error al eliminar testimonio en la DB: ", error);
        throw error;
    }
};

export const getTestimonioById = async (id) => {
    try {
        const testimonio = await m_testimonio.findById(id);
        return testimonio;
    } catch (error) {
        console.error(" [Servicio] Error al obtener usuario de la DB: ", error);
        throw error;
    }
};
