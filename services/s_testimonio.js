import m_testimonio from "../models/m_testimonio.js";

export const getAllTestimonios = async () => {
    try {
        const testimonios = await m_testimonio.findAll();
        return testimonios;
    } catch (error) {
        console.error(" [Servicio] Error al obtener los testimonios de la DB: ", error);
        throw error;
    }
};

export const createTestimonio = async (datosTestimonio) => {
    try {
        const resultado = await m_testimonio.create(datosTestimonio);
        return resultado.id;
    } catch (error) {
        console.error(" [Servicio] Error al crear testimonio en la DB: ", error);
        throw error;
    }
};

export const updateTestimonio = async (id, datosTestimonio) => {
    try {
        const resultado = await m_testimonio.update(datosTestimonio, {
            where: { id: id }
        });
        return resultado[0];
    } catch (error) {
        console.error(" [Servicio] Error al editar testimonio en la DB: ", error);
        throw error;
    }
};

export const deleteTestimonio = async (id) => {
    try {
        const resultado = await m_testimonio.destroy({
            where: { id: id }
        });
        return resultado;
    } catch (error) {
        console.error(" [Servicio] Error al eliminar testimonio en la DB: ", error);
        throw error;
    }
};

export const getTestimonioById = async (id) => {
    try {
        const testimonio = await m_testimonio.findByPk(id);
        return testimonio;
    } catch (error) {
        // Corregido el mensaje de error de 'usuario' a 'testimonio'
        console.error(" [Servicio] Error al obtener testimonio de la DB: ", error);
        throw error;
    }
};