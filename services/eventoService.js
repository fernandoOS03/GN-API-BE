import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";

export const geteventos = async () => {
    try {
        const database = await connectDB();
        const eventos = await database.collection('eventos').find().toArray();
        return eventos;
    } catch (error) {
        console.error('[Servicio] Error al obtener los eventos de la DB:', error);
        throw error;
    }
};

export const getEventoById = async (id) => {
    try {
        const database = await connectDB();
        const evento = await database.collection('eventos').findOne(
            {
                _id: new ObjectId(id)
            });
        return evento;
    } catch (error) {
        console.error("[Servicio] Error al obtener la evento de la DB: ", error);
        throw error;
    }
};

export const createEvento = async (datosevento) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('eventos').insertOne(datosevento);
        return resultado.insertedId;

    } catch (error) {
        console.error("[Servicio] Error el crear la evento en la DB: ", error);
        throw error;

    }
};

export const updateEvento = async (id, datosEvento) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('eventos').updateOne(
            { _id: new ObjectId(id) },
            { $set: datosEvento }
        );
        return resultado.modifiedCount;

    } catch (error) {
        console.error("[Servicio] Error al editar el evento en la DB: ", error);
        throw error;
    }
};

export const deleteEvento = async (id) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('eventos').deleteOne(
            { _id: new ObjectId(id) }
        );
        return resultado.deletedCount;

    } catch (error) {
        console.error('[Servicio] Error al eliminar el evento de la DB: ', error);
        throw error;
    }
};


