import m_horaPiadosa from "../models/m_horaPiadosa.js";

export const getHorasPiadosas = async () => {
    try {
        const horaPiadosa = await m_horaPiadosa.findAll({
            include: ['ministro']
        });
        return horaPiadosa;
    } catch (error) {
        console.error(" [Servicio] Error al obtener las horas Piadosas de la DB: ", error);
        throw error;
    }
};

export const getHoraPiadosaById = async (id) => {
    try {
        const horaPiadosa = await m_horaPiadosa.findByPk(id, {
            include: ['ministro']
        });
        return horaPiadosa;
    } catch (error) {
        console.error(" [Servicio] Error al obtener la hora Piadosa de la DB: ", error);
        throw error;
    }
};

export const createHoraPiadosa = async (datosHoraPiadosa) => {
    try {
        const resultado = await m_horaPiadosa.create(datosHoraPiadosa);
        return resultado.id;
    } catch (error) {
        console.error(" [Servicio] Error al crear la hora Piadosa en la DB: ", error);
        throw error;
    }
};

export const updateHoraPiadosa = async (id, datosHoraPiadosa) => {
    try {
        const resultado = await m_horaPiadosa.update(datosHoraPiadosa, {
            where: { id: id }
        });
        return resultado[0];
    } catch (error) {
        console.error(" [Servicio] Error al editar la hora Piadosa en la DB: ", error);
        throw error;
    }
};

export const deleteHoraPiadosa = async (id) => {
    try {
        const resultado = await m_horaPiadosa.destroy({
            where: { id: id }
        });
        return resultado;
    } catch (error) {
        console.error(" [Servicio] Error al eliminar la hora Piadosa en la DB: ", error);
        throw error;
    }
};

// Esta función se fusiona con getHoraPiadosaById y getHorasPiadosas al usar 'include'
export const getHoraPiadosaConMinistro = async(idHoraPiadosa) =>{
    try {
        const hraPConMinistro = await m_horaPiadosa.findByPk(idHoraPiadosa, {
            include: ['ministro']
        });
        return hraPConMinistro;
    } catch (error) {
        console.error("[Servicio] Error al obtener la hora Piadosa con ministro de la DB: ", error);
        throw error;
    } 
};