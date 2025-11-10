
import m_tipoEvento from "../models/m_tipoEvento.js";

export const getTipoEventos = async () => {
    try {
        const tipos = await m_tipoEvento.findAll();
        return tipos;
    } catch (error) {
        console.error(" [Servicio] Error al obtener los tipos de eventos de la DB: ", error);
        throw error;
    }
};

export const getTipoEventoById = async (id) => {
    try {
        const tipo = await m_tipoEvento.findByPk(id);
        return tipo;
    } catch (error) {
        console.error(" [Servicio] Error al obtener el tipo de evento de la DB: ", error);
        throw error;
    }
};

export const createTipoEvento = async (datosTipoEvento) => {
    try {
        const resultado = await m_tipoEvento.create(datosTipoEvento);
        return resultado.id;
    } catch (error) {
        console.error(" [Servicio] Error al crear tipo de evento en la DB: ", error);
        throw error;
    }
};

export const updateTipoEvento = async (id, datosTipoEvento) => {
    try {
        const resultado = await m_tipoEvento.update(datosTipoEvento, {
            where: { id: id }
        });
        return resultado[0];
    } catch (error) {
        console.error(" [Servicio] Error al editar tipo de evento en la DB: ", error);
        throw error;
    }
};

export const deleteTipoEvento = async (id) => {
    try {
        const resultado = await m_tipoEvento.destroy({
            where: { id: id }
        });
        return resultado;
    } catch (error) {
        console.error(" [Servicio] Error al eliminar tipo de evento en la DB: ", error);
        throw error;
    }
};