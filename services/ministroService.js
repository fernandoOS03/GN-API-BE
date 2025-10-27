import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";

export const getMinistros = async () => {
    try {
        const database = await connectDB();
        const ministros = await database.collection('ministros').find().toArray();
        console.table(ministros);
        // console.log("Ministros fetched successfully");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    }
};

export const createMinistro = async (datosMinistro) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('ministros').insertOne(datosMinistro);
        return resultado.insertId;
    } catch (error) {
        console.error("Error al crear un ministro", error);
        throw error;
    }
};

export const updateMinistro = async (id, datosMinistro) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('ministros').updateOne(
            { _id: new ObjectId(id) }, //convierte el ID a un ObjectId
            { $set: datosMinistro }  //Sirve par actualizar 
        );
        return resultado.modifiedCount; //retorna el numero de documentos modificados
    } catch (error) {
        console.error("Error al actualizar el ministro", error);
        throw error;
    }
};

export const deleteMinistro = async (id) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('ministros').deleteOne(
            {_id: new ObjectId(id)}
        );
        return resultado.deletedCount;

    } catch (error) {
        console.error("Error al eliminar el ministro", error);
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
        console.error("Error al obtener el ministro", error);
        throw error;
    }
};