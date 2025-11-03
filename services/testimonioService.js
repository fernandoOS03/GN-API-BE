import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";

export const gettestimonios = async () => {
    try {
        const database = await connectDB();
        const testimonios = await database.collection('testimonios').find().toArray();
        return testimonios;
    } catch (error) {
        console.error(" [Servicio] Error al obtener los testimonios de la DB: ", error);
        throw error;
    }
};

export const createTestimonio = async (datosTestimonio) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('testimonios').insertOne(datosTestimonio);
        return resultado.insertedId;
    } catch (error) {
        console.error(" [Servicio] Error al crear testimonio en la DB: ", error);
        throw error;
    }
};

export const updateTestimonio = async (id, datosTestimonio) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('testimonios').updateOne(
            { _id: new ObjectId(id) }, 
            { $set: datosTestimonio }  
        );
        return resultado.modifiedCount; 
    } catch (error) {
        console.error(" [Servicio] Error al editar testimonio en la DB: ", error);
        throw error;
    }
};

export const deleteTestimonio = async (id) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('testimonios').deleteOne(
            { _id: new ObjectId(id) }
        );
        return resultado.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar testimonio en la DB: ", error);
        throw error;
    }
};

export const getTestimonioById = async (id) => {
    try {
        const database = await connectDB();
        const testimonio = await database.collection('testimonios').findOne(
            {
                _id: new ObjectId(id)
            });
        return testimonio;
    } catch (error) {
        console.error(" [Servicio] Error al obtener usuario de la DB: ", error);
        throw error;
    }
};
