import m_sedeInternacional from '../models/m_sedeInternacional.js';

export const getSedeInternacional = async () => {
    try {
        const sedeInternacional = await m_sedeInternacional.findAll();
        return sedeInternacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener las sedes InterNacionales de la DB: ", error);
        throw error;
    }
};

export const getSedeInternacionalById = async (id) => {
    try {
        const sedeInternacional = await m_sedeInternacional.findByPk(id);
        return sedeInternacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener sede Internacional de la DB: ", error);
        throw error;
    }
};

export const createSedeInternacional = async (datosSedeInternacional) => {
    try {
        const resultado = await m_sedeInternacional.create(datosSedeInternacional);
        return resultado.id;
    } catch (error) {
        console.error(" [Servicio] Error al crear sede Internacional en la DB: ", error);
        throw error;
    }
};

export const updateSedeInternacional = async (id, datosSedeInternacional) => {
    try {
        const resultado = await m_sedeInternacional.update(datosSedeInternacional, {
            where: { id: id }
        });
        return resultado[0]
    } catch (error) {
        console.error(" [Servicio] Error al editar sede Internacional en la DB: ", error);
        throw error;
    }
};

export const deleteSedeInternacional = async (id) => {
    try {
        const resultado = await m_sedeInternacional.destroy({ where: { id: id } });
        return resultado;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar sede Internacional en la DB: ", error);
        throw error;
    }
};

