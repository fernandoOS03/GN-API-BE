import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";

export const getSedeInternacional = async () => {
    try {
        const database = await connectDB();
        const sedeInternacional = await database.collection('sedesInternacionales').find().toArray();
        return sedeInternacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener las sedes InterNacionales de la DB: ", error);
        throw error;
    }
};

export const createSedeInternacional = async (datosSedeInternacional) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('sedesInternacionales').insertOne(datosSedeInternacional);
        return resultado.insertedId;
    } catch (error) {
        console.error(" [Servicio] Error al crear sede Internacional en la DB: ", error);
        throw error;
    }
};

export const updateSedeInternacional = async (id, datosSedeInternacional) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('sedesInternacionales').updateOne(
            { _id: new ObjectId(id) }, 
            { $set: datosSedeInternacional }  
        );
        return resultado.modifiedCount; 
    } catch (error) {
        console.error(" [Servicio] Error al editar sede Internacional en la DB: ", error);
        throw error;
    }
};

export const deleteSedeInternacional = async (id) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('sedesInternacionales').deleteOne(
            { _id: new ObjectId(id) }
        );
        return resultado.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar sede Internacional en la DB: ", error);
        throw error;
    }
};

export const getSedeInternacionalById = async (id) => {
    try {
        const database = await connectDB();
        const sedeInternacional = await database.collection('sedesInternacionales').findOne(
            {
                _id: new ObjectId(id)
            });
        return sedeInternacional;
    } catch (error) {
        console.error(" [Servicio] Error al obtener sede Internacional de la DB: ", error);
        throw error;
    }
};
