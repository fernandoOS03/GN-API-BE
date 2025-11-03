import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";

export const getNoticias = async () => {
    try {
        const database = await connectDB();
        const noticias = await database.collection('noticias').find().toArray();
        return noticias;
    } catch (error) {
        console.error('[Servicio] Error al obtener las noticias de la DB:', error);
        throw error;
    }
};

export const getNoticiaById = async (id) => {
    try {
        const database = await connectDB();
        const noticia = await database.collection('noticias').findOne(
            {
                _id: new ObjectId(id)
            });
        return noticia;
    } catch (error) {
        console.error("[Servicio] Error al obtener la noticia de la DB: ", error);
        throw error;
    }
};

export const createNoticia = async (datosNoticia) => {
    try{
        const database = await connectDB();
        const resultado = await database.collection('noticias').insertOne(datosNoticia);
        return resultado.insertedId;

    }catch (error){
        console.error("[Servicio] Error al crear la noticia en la DB: ", error);
        throw error;

    }
};

export const updateNoticia = async (id, datosNoticia) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('noticias').updateOne(
            { _id: new ObjectId(id) },
            { $set: datosNoticia }
        );
        return resultado.modifiedCount;

    } catch (error) {
        console.error("[Servicio] Error al editar la noticia en la DB: ", error);
        throw error;
    }
};

export const deleteNoticia = async (id) => {
    try {
        const database = await connectDB();
        const resultado = await database.collection('noticias').deleteOne(
            { _id: new ObjectId(id) }
        );
        return resultado.deletedCount;

    } catch (error) {
        console.error('[Servicio] Error al eliminar la noticia de la DB: ', error);
        throw error;
    }
};


