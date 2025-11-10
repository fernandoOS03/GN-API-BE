import m_noticia from "../models/m_noticia.js";

export const getNoticias = async () => {
    try {
        const noticias = await m_noticia.findAll();
        return noticias;
    } catch (error) {
        console.error('[Servicio] Error al obtener las noticias de la DB:', error);
        throw error;
    }
};

export const getNoticiaById = async (id) => {
    try {
        const noticia = await m_noticia.findByPk(id);
        return noticia;
    } catch (error) {
        console.error("[Servicio] Error al obtener la noticia de la DB: ", error);
        throw error;
    }
};

export const createNoticia = async (datosNoticia) => {
    try {
        const resultado = await m_noticia.create(datosNoticia);
        return resultado.id;

    } catch (error) {
        console.error("[Servicio] Error al crear la noticia en la DB: ", error);
        throw error;

    }
};

export const updateNoticia = async (id, datosNoticia) => {
    try {
        const resultado = await m_noticia.update(datosNoticia, { where: { id: id } });
        resultado[0]
    } catch (error) {
        console.error("[Servicio] Error al editar la noticia en la DB: ", error);
        throw error;
    }
};

export const deleteNoticia = async (id) => {
    try {
        const resultado = await m_noticia.destroy({ where: { id: id } });
        return resultado;

    } catch (error) {
        console.error('[Servicio] Error al eliminar la noticia de la DB: ', error);
        throw error;
    }
};


