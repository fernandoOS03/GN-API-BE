import m_evento from "../models/m_evento.js";

export const geteventos = async () => {
    try {
        const eventos = await m_evento.findAll({
            include: ['tipoEvento']
        });
        return eventos;
    } catch (error) {
        console.error('[Servicio] Error al obtener los eventos de la DB: ', error);
        throw error;
    }
};


export const getEventoById = async (id) => {
    try {
        const evento = await m_evento.findByPk(id, {
            include: ['tipoEvento']
        });
        return evento;
    } catch (error) {
        console.error("[Servicio] Error al obtener la evento de la DB: ", error);
        throw error;
    }
};

export const createEvento = async (datosEvento) => {
    try {
        const resultado = await m_evento.create(datosEvento);
        return resultado.id;

    } catch (error) {
        console.error("[Servicio] Error el crear la evento en la DB: ", error);
        throw error;

    }
};

export const updateEvento = async (id, datosEvento) => {
    try {
        const resultado = await m_evento.update(datosEvento, {
            where: { id: id }
        });
        return resultado[0];

    } catch (error) {
        console.error("[Servicio] Error al editar el evento en la DB: ", error);
        throw error;
    }
};

export const deleteEvento = async (id) => {
    try {
        const resultado = await m_evento.destroy({ where: { id: id } });
        return resultado;

    } catch (error) {
        console.error('[Servicio] Error al eliminar el evento de la DB: ', error);
        throw error;
    }
};


