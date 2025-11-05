import * as horaPiadosaService from "../services/horaPiadosaService.js";

export const getAllHorasPiadosas = async (req, res) => {
  try {
    const data = await horaPiadosaService.getHorasPiadosas();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener las Horas Piadosas : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const getHoraPiadosaById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await horaPiadosaService.getHoraPiadosaById(id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Hora Piadosa no encontrada" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener la Hora Piadosa : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const createHoraPiadosa = async (req, res) => {
  try {
    const data = await horaPiadosaService.createHoraPiadosa(req.body);
    res.status(201).json({ success: true, message: "Hora Piadosa creado Exitosamente.", id:data});
  } catch (error) {
    console.error("Error al crear el Hora Piadosa : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const updateHoraPiadosa = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await horaPiadosaService.updateHoraPiadosa(id, req.body);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Hora Piadosa no encontrada" });
    }
    res.status(200).json({ success: true, message: "Hora Piadosa actualizado correctamente." });
  } catch (error) {
    console.error("Error al editar la Hora Piadosa", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const deleteHoraPiadosa = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await horaPiadosaService.deleteHoraPiadosa(id);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Hora Piadosa no encontrada." });
    }
    res.status(200).json({ success: true, message: "Hora Piadosa eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar el Hora Piadosa", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};
