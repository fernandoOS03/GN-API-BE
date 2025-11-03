import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";

export const getMinistros = async () => {
    try {
        const database = await connectDB();
        const ministros = await database.collection('ministros').find().toArray();
        return ministros;
    } catch (error) {
        console.error(" [Servicio] Error al obtener los ministros de la DB: ", error);
        throw error;
    }
};

export const createMinistro = async (datosMinistro) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('ministros').insertOne(datosMinistro);
        return resultado.insertedId;
    } catch (error) {
        console.error(" [Servicio] Error al crear ministro en la DB: ", error);
        throw error;
    }
};

export const updateMinistro = async (id, datosMinistro) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('ministros').updateOne(
            { _id: new ObjectId(id) }, 
            { $set: datosMinistro }  
        );
        return resultado.modifiedCount; 
    } catch (error) {
        console.error(" [Servicio] Error al editar ministro en la DB: ", error);
        throw error;
    }
};

export const deleteMinistro = async (id) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('ministros').deleteOne(
            { _id: new ObjectId(id) }
        );
        return resultado.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar ministro en la DB: ", error);
        throw error;
    }
};

export const getMinistroById = async (id) => {
    try {
        const database = await connectDB();
        const ministro = await database.collection('ministros').findOne(
            {
                _id: new ObjectId(id)
            });
        return ministro;
    } catch (error) {
        console.error(" [Servicio] Error al obtener ministro de la DB: ", error);
        throw error;
    }
};
