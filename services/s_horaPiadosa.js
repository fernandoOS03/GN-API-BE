import m_horaPiadosa from "../models/m_horaPiadosa.js";

export const getHorasPiadosas = async () => {
    try {
        const horaPiadosa = await m_horaPiadosa.find();
        return horaPiadosa;
    } catch (error) {
        console.error(" [Servicio] Error al obtener las horas Piadosas de la DB: ", error);
        throw error;
    }
};

export const createHoraPiadosa = async (datosHoraPiadosa) => {
    try {
        const resultado = await m_horaPiadosa.create(datosHoraPiadosa);
        return resultado._id;
    } catch (error) {
        console.error(" [Servicio] Error al crear la hora Piadosa en la DB: ", error);
        throw error;
    }
};

export const updateHoraPiadosa = async (id, datosHoraPiadosa) => {
    try {
        const resultado = await m_horaPiadosa.findByIdAndUpdate(id, datosHoraPiadosa, { new: true });
        if (!resultado) {
            return 0
        }
        return 1;
    } catch (error) {
        console.error(" [Servicio] Error al editar la hora Piadosa en la DB: ", error);
        throw error;
    }
};

export const deleteHoraPiadosa = async (id) => {
    try {
        const resultado = await m_horaPiadosa.deleteOne({ _id: id });
        return resultado.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar la hora Piadosa en la DB: ", error);
        throw error;
    }
};

export const getHoraPiadosaById = async (id) => {
    try {
        const ministro = await m_horaPiadosa.findById(id);
        return ministro;
    } catch (error) {
        console.error(" [Servicio] Error al obtener la hora Piadosa de la DB: ", error);
        throw error;
    }
};

export const getHoraPiadosaConMinistro = async(idHoraPiadosa) =>{
       try {
           const hraPConMinistro = await m_horaPiadosa.findById(idHoraPiadosa).populate('id_ministro');
           return hraPConMinistro;
   
       } catch (error) {
           console.error("[Servicio] Error al obtener la hora Piadosa con ministro de la DB: ", error);
           throw error;
       } 
};
