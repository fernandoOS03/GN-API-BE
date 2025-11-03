import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";

export const getHorasPiadosas = async () => {
    try {
        const database = await connectDB();
        const horaPiadosa = await database.collection('horasPiadosas').find().toArray();
        return horaPiadosa;
    } catch (error) {
        console.error(" [Servicio] Error al obtener las horas Piadosas de la DB: ", error);
        throw error;
    }
};

export const createHoraPiadosa = async (datosHoraPiadosa) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('horasPiadosas').insertOne(datosHoraPiadosa);
        return resultado.insertedId;
    } catch (error) {
        console.error(" [Servicio] Error al crear la hora Piadosa en la DB: ", error);
        throw error;
    }
};

export const updateHoraPiadosa = async (id, datosHoraPiadosa) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('horasPiadosas').updateOne(
            { _id: new ObjectId(id) },
            { $set: datosHoraPiadosa }
        );
        return resultado.modifiedCount;
    } catch (error) {
        console.error(" [Servicio] Error al editar la hora Piadosa en la DB: ", error);
        throw error;
    }
};

export const deleteHoraPiadosa = async (id) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('horasPiadosas').deleteOne(
            { _id: new ObjectId(id) }
        );
        return resultado.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar la hora Piadosa en la DB: ", error);
        throw error;
    }
};

export const getHoraPiadosaById = async (id) => {
    try {
        const database = await connectDB();
        const ministro = await database.collection('horasPiadosas').findOne(
            {
                _id: new ObjectId(id)
            });
        return ministro;
    } catch (error) {
        console.error(" [Servicio] Error al obtener la hora Piadosa de la DB: ", error);
        throw error;
    }
};
