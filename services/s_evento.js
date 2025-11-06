import m_evento from "../models/m_evento.js";

export const geteventos = async () => {
    try {
        const eventos = await m_evento.find();
        return eventos;
    } catch (error) {
        console.error('[Servicio] Error al obtener los eventos de la DB:', error);
        throw error;
    }
};

"Mongoose maneja la conversión de 'id' (string) a ObjectId por mi, a diferencia de Mnogodb Driver, es por eso que ya no se necesita"
"Es por eso que ya no se necesita convertir desde el código"

export const getEventoById = async (id) => {
    try {
        const evento = await m_evento.findById(id);
        return evento;
    } catch (error) {
        console.error("[Servicio] Error al obtener la evento de la DB: ", error);
        throw error;
    }
};

export const createEvento = async (datosEvento) => {
    try {
        const resultado = await m_evento.create(datosEvento);
        return resultado._id;

    } catch (error) {
        console.error("[Servicio] Error el crear la evento en la DB: ", error);
        throw error;

    }
};

export const updateEvento = async (id, datosEvento) => {
    try {
        const resultado = await m_evento.findByIdAndUpdate(id, datosEvento, { new: true });
        if (!resultado) {
            return 0
        }
        return 1;

    } catch (error) {
        console.error("[Servicio] Error al editar el evento en la DB: ", error);
        throw error;
    }
};

export const deleteEvento = async (id) => {
    try {
        const resultado = await m_evento.deleteOne({ _id: id });
        return resultado.deletedCount;

    } catch (error) {
        console.error('[Servicio] Error al eliminar el evento de la DB: ', error);
        throw error;
    }
};


