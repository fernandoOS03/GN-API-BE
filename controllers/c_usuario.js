import * as usuarioService from "../services/s_usuario.js";

export const getAllUsuarios = async (req, res) => {
  try {
    const data = await usuarioService.getUsuarios();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener los Usuarios : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const getUsuarioById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await usuarioService.getUsuarioById(id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Usuario no encontrado." });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener el Usuario : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const data = await usuarioService.createUsuario(req.body);
    res.status(201).json({ success: true, message: "Usuario creado Exitosamente.", id:data});
  } catch (error) {
    console.error("Error al crear el usuario : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const updateUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await usuarioService.updateUsuario(id, req.body);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Usuario no encontrado" });
    }
    res.status(200).json({ success: true, message: "Usuario actualizado correctamente." });
  } catch (error) {
    console.error("Error al editar el usuario : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await usuarioService.deleteUsuario(id);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Usuario no encontrado." });
    }
    res.status(200).json({ success: true, message: "Usuario eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar el usuario : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};
