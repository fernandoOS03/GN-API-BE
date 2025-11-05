import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";
import m_sedeNacional from "../models/m_sedeNacional.js";

export const getSedeNacional = async () => {
    try {
        const database = await connectDB();
        const sedeNacional = await database.collection('sedesNacionales').find().toArray();
        return sedeNacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener las sedes Nacionales de la DB: ", error);
        throw error;
    }
};

export const createSedeNacional = async (datosSedeNacional) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('sedesNacionales').insertOne(datosSedeNacional);
        return resultado.insertedId;
    } catch (error) {
        console.error(" [Servicio] Error al crear sede Nacional en la DB: ", error);
        throw error;
    }
};

export const updateSedeNacional = async (id, datosSedeNacional) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('sedesNacionales').updateOne(
            { _id: new ObjectId(id) }, 
            { $set: datosSedeNacional }  
        );
        return resultado.modifiedCount; 
    } catch (error) {
        console.error(" [Servicio] Error al editar sedeNacional en la DB: ", error);
        throw error;
    }
};

export const deleteSedeNacional = async (id) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('sedesNacionales').deleteOne(
            { _id: new ObjectId(id) }
        );
        return resultado.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar sedeNacional en la DB: ", error);
        throw error;
    }
};

export const getSedeNacionalById = async (id) => {
    try {
        const database = await connectDB();
        const sedeNacional = await database.collection('sedesNacionales').findOne(
            { _id: new ObjectId(id) });
        return sedeNacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener sedeNacional de la DB: ", error);
        throw error;
    }
};

export const getSedeConMinistro = async (idSede) =>{
    try{
        const sedeConMinistro = await m_sedeNacional.findById(idSede).populate('id_ministro');
        return sedeConMinistro;

    }catch(error){
        console.error("[Servicio] Error al obtener sede con ministro de la DB: ", error);
        throw error;
    }
};
