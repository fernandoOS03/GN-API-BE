import * as ministroService from "../services/ministroService.js";

export const getAllMinistros = async (req, res) => {
  try {
    const data = await ministroService.getMinistros();
    res.status(200).json({ success: true, data });
  } catch(error) {
    console.error("Error al obtener los ministros : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const getMinistroById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await ministroService.getMinistroById(id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Ministro no encontrado" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener el ministro : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const createMinistro = async (req, res) => {
  try {
    const data = await ministroService.createMinistro(req.body);
    res.status(201).json({ success: true, data });
  } catch(error) {
    console.error("Error al crear el ministro : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const updateMinistro = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await ministroService.updateMinistro(id, req.body);
    if(data === 0){
      return res.status(404).json({ success: false, message: "Ministro no encontrado" });
    }
    res.status(200).json({ success: true, data });
  } catch(error) {
    console.error("Error al editar el ministro", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const deleteMinistro = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await ministroService.deleteMinistro(id);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Ministro no encontrado" });
    }
    res.status(200).json({success:true, message: "Ministro eliminado correctamente" });
  } catch(error) {
    console.error("Error al eliminar el ministro", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};
