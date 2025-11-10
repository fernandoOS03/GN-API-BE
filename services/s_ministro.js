
import m_ministro from '../models/m_ministro.js'

export const getMinistros = async () => {
    try {
        const ministros = await m_ministro.findAll({
            include: ['cargo', 'sedeNacional']
        });
        return ministros;
    } catch (error) {
        console.error(" [Servicio] Error al obtener los ministros de la DB: ", error);
        throw error;
    }
};

export const getMinistroById = async (id) => {
    try {
        const ministro = await m_ministro.findByPk(id, {
            include: ['cargo', 'sedeNacional']
        });
        return ministro;
    } catch (error) {
        console.error(" [Servicio] Error al obtener ministro de la DB: ", error);
        throw error;
    }
};

export const createMinistro = async (datosMinistro) => {
    try {
        const resultado = await m_ministro.create(datosMinistro);
        return resultado.id;
    } catch (error) {
        console.error(" [Servicio] Error al crear ministro en la DB: ", error);
        throw error;
    }
};

export const updateMinistro = async (id, datosMinistro) => {
    try {
        const resultado = await m_ministro.update(datosMinistro, {
            where: { id: id }
        })
        return resultado[0];
    } catch (error) {
        console.error(" [Servicio] Error al editar ministro en la DB: ", error);
        throw error;
    }
};

export const deleteMinistro = async (id) => {
    try {
        const resultado = await m_ministro.destroy({
            where: { id: id }
        });
        return resultado;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar ministro en la DB: ", error);
        throw error;
    }
};

