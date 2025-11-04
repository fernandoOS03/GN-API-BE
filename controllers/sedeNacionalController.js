import * as sedeNacionalService from "../services/sedeNacionalService.js";

export const getAllSedesNacionales = async (req, res) => {
  try {
    const data = await sedeNacionalService.getSedeNacional();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener las sedes Nacionales : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const getSedeNacionalById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await sedeNacionalService.getSedeNacionalById(id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Sede Nacional no encontrada" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener la sede Nacional : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const createSedeNacional = async (req, res) => {
  try {
    const data = await sedeNacionalService.createSedeNacional(req.body);
    res.status(201).json({ success: true, message: "Sede Nacional creado Exitosamente.", id:data});
  } catch (error) {
    console.error("Error al crear la sede Nacional : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const updateSedeNacional = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await sedeNacionalService.updateSedeNacional(id, req.body);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Sede Nacional no encontrada" });
    }
    res.status(200).json({ success: true, message: "Sede Nacional actualizada correctamente." });
  } catch (error) {
    console.error("Error al editar la sede nacional : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const deleteSedeNacional = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await sedeNacionalService.deleteSedeNacional(id);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Sede Nacional no encontrada" });
    }
    res.status(200).json({ success: true, message: "Sede Nacional eliminada correctamente." });
  } catch (error) {
    console.error("Error al eliminar la sede nacional : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};
