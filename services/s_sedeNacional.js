import m_sedeNacional from "../models/m_sedeNacional.js";

export const getSedeNacional = async () => {
    try {
        const sedeNacional = await m_sedeNacional.find();
        return sedeNacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener las sedes Nacionales de la DB: ", error);
        throw error;
    }
};

export const createSedeNacional = async (datosSedeNacional) => {
    try {
        const resultado = await m_sedeNacional.create(datosSedeNacional);
        return resultado._id;
    } catch (error) {
        console.error(" [Servicio] Error al crear sede Nacional en la DB: ", error);
        throw error;
    }
};

export const updateSedeNacional = async (id, datosSedeNacional) => {
    try {
        const resultado = await m_sedeNacional.findByIdAndUpdate(
            id,  //Como se dio en el comentario de s_evento, este es el id a convertirse
            datosSedeNacional,  //datos a actualizar, 
            { new: true } //Esto asegura que devuelva el documento actualizado
        );
        if (!resultado) {
            return 0
        }
        return 1;
    } catch (error) {
        console.error(" [Servicio] Error al editar sedeNacional en la DB: ", error);
        throw error;
    }
};

export const deleteSedeNacional = async (id) => {
    try {
        const resultado = await m_sedeNacional.deleteOne({ _id: id });
        return resultado.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar sedeNacional en la DB: ", error);
        throw error;
    }
};

export const getSedeNacionalById = async (id) => {
    try {
        const sedeNacional = await m_sedeNacional.findById(id);
        return sedeNacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener sedeNacional de la DB: ", error);
        throw error;
    }
};

export const getSedeConMinistro = async (idSede) => {
    try {
        const sedeConMinistro = await m_sedeNacional.findById(idSede).populate('id_ministro');
        return sedeConMinistro;

    } catch (error) {
        console.error("[Servicio] Error al obtener sede con ministro de la DB: ", error);
        throw error;
    }
};
