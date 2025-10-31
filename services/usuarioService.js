import { connectDB } from "../config/connect";
import { ObjectId } from "mongodb";

export const getUsuarios = async () => {
  try {
    const database = await connectDB();
    const usuarios = await database.collection("usuarios").find().toArray();
    console.table(usuarios);
  } catch {
    console.error("Erro al conectar a MongoDB", error);
    throw error;
  }
};

export const getUsariosById = async (id) => {
  try {
    const database = await connectDB();
    const usuarios = await database.collection("usuarios").findOne({
      _id: new ObjectId(id),
    });
    return usuarios;
  } catch (error) {
    console.error("Error al obtener el usuario", error);
  }
};

export const createUsuario = async (datosUsuario) => {
  try {
    const database = await connectDB();
    const resultado = await database.collection("usuarios").insertOne(datosUsuario);
    return resultado.insertId;
  } catch (error) {
    console.error("Error al crear usuario", error);
    throw error;
  }
};

/*export const updateUsuario = await connectDB
const database = await connectDB();*/
