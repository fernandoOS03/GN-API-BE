import { connectDB } from "../config/connect.js";
import { ObjectId } from "mongodb";

export const getUsuarios = async () => {
    try {
        const database = await connectDB();
        const usuarios = await database.collection('usuarios').find().toArray();
        return usuarios;

    } catch (error) {
        console.error(" [Servicio] Error al obtener los usuarios de la DB: ", error);
        throw error;
    }
    //HOL YO ESTOY AQUI
};

export const getUsuarioById = async (id) => {
    try {
        const database = await connectDB();
        const usuario = await database.collection('usuarios').findOne(
            {
                _id : new ObjectId(id)
            });
        return usuario;

    } catch (error) {
        console.error(" [Servicio] Error al obtener el usuario de la DB: ", error);
        throw error;
    }
};

export const createUsuario = async (datosUsuario) => {
    try {
        const database = await connectDB();
        const usuario = await database.collection('usuarios').insertOne(datosUsuario);
        return usuario.insertedId;

    } catch (error) {
        console.error(" [Servicio] Error al crear usuario en la DB: ", error);
        throw error;
    }
};

export const updateUsuario = async (id, datosUsuario) => {
    try {
        const database = await connectDB();
        const usuario = await database.collection('usuarios').updateOne(
            { _id: new ObjectId(id) },
            { $set: datosUsuario }
        );
        return usuario.modifiedCount;

    } catch (error) {
        console.error(" [Servicio] Error al editar usuario en la DB: ", error);
        throw error;
    }
};

export const deleteUsuario = async (id) => {
    try {
        const database = await connectDB();
        const usuario = await database.collection('usuarios').deleteOne(
            { _id: new ObjectId(id) }
        );
        return usuario.deletedCount;

    } catch (error) {
        console.error(" [Servicio] Error al eliminar usuario en la DB: ", error);
        throw error;
    }
};