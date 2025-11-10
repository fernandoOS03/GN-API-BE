import m_usuario from "../models/m_usuario.js";

export const getUsuarios = async () => {
    try {
        const usuarios = await m_usuario.findAll();
        return usuarios;
    } catch (error) {
        console.error(" [Servicio] Error al obtener los usuarios de la DB: ", error);
        throw error;
    }
};

export const getUsuarioById = async (id) => {
    try {
        const usuario = await m_usuario.findByPk(id);
        return usuario;
    } catch (error) {
        console.error(" [Servicio] Error al obtener el usuario de la DB: ", error);
        throw error;
    }
};

export const createUsuario = async (datosUsuario) => {
    try {
        const usuario = await m_usuario.create(datosUsuario);
        return usuario.id;
    } catch (error) {
        console.error(" [Servicio] Error al crear usuario en la DB: ", error);
        throw error;
    }
};

export const updateUsuario = async (id, datosUsuario) => {
    try {
        const resultado = await m_usuario.update(datosUsuario, {
            where: { id: id }
        });
        return resultado[0];
    } catch (error) {
        console.error(" [Servicio] Error al editar usuario en la DB: ", error);
        throw error;
    }
};

export const deleteUsuario = async (id) => {
    try {
        const resultado = await m_usuario.destroy({
            where: { id: id }
        });
        return resultado;
    } catch (error) {
        console.error(" [Servicio] Error al eliminar usuario en la DB: ", error);
        throw error;
    }
};