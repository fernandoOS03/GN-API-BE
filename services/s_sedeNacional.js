import m_sedeNacional from "../models/m_sedeNacional.js";

export const getSedeNacional = async () => {
    try {
        const sedeNacional = await m_sedeNacional.findAll({
            include: ['ministro']
        });
        return sedeNacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener las sedes Nacionales de la DB: ", error);
        throw error;
    }
};

export const createSedeNacional = async (datosSedeNacional) => {
    try {
        const resultado = await m_sedeNacional.create(datosSedeNacional);
        return resultado.id;
    } catch (error) {
        console.error(" [Servicio] Error al crear sede Nacional en la DB: ", error);
        throw error;
    }
};

export const updateSedeNacional = async (id, datosSedeNacional) => {
    try {
        const resultado = await m_sedeNacional.update(datosSedeNacional, {
            where: { id: id }
        });
        return resultado[0];
    } catch (error) {
        console.error(" [Servicio] Error al editar sedeNacional en la DB: ", error);
        throw error;
    }
};

export const deleteSedeNacional = async (id) => {
    try {
        const resultado = await m_sedeNacional.destroy({ where: { id: id } });
        return resultado;
    } catch (error) {
        console.error(" [Servicio] Error al eliminar sedeNacional en la DB: ", error);
        throw error;
    }
};

export const getSedeNacionalById = async (id) => {
    try {
        const sedeNacional = await m_sedeNacional.findByPk(id, {
            include: ['ministro']
        });
        return sedeNacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener sedeNacional de la DB: ", error);
        throw error;
    }
};

export const getSedeConMinistro = async (idSede) => {
    try {
        const sedeConMinistro = await m_sedeNacional.findByPk(idSede, {
            include: ['ministro']
        });
        return sedeConMinistro;
    } catch (error) {
        console.error("[Servicio] Error al obtener sede con ministro de la DB: ", error);
        throw error;
    }
};