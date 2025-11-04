import * as sedeInternacionalService from "../services/sedeInternacionalService.js";

export const getSedesInternacionales = async (req, res) => {
  try {
    const data = await sedeInternacionalService.getSedeInternacional();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener las sedes internacionales : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const getSedeInternacionalById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await sedeInternacionalService.getSedeInternacionalById(id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Sede internacional no encontrada." });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener la sede internacional : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const createSedeInternacional = async (req, res) => {
  try {
    const data = await sedeInternacionalService.createSedeInternacional(req.body);
    res.status(201).json({ success: true, message: "Sede Internacional creada Exitosamente.", id:data});
  } catch (error) {
    console.error("Error al crear la sede Internacional : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const updateSedeInternacional = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await sedeInternacionalService.updateSedeInternacional(id, req.body);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Sede Internacional no encontrada." });
    }
    res.status(200).json({ success: true, message: "Sede Internacional actualizada correctamente." });
  } catch (error) {
    console.error("Error al editar la sede internacional", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const deleteSedeInternacional = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await sedeInternacionalService.deleteSedeInternacional(id);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Sede Internacional no encontrada." });
    }
    res.status(200).json({ success: true, message: "Sede Internacional eliminada correctamente." });
  } catch (error) {
    console.error("Error al eliminar la sede Internacional.", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};
