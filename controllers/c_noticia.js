import * as noticiaService from "../services/s_noticia.js";

export const getAllNoticias = async (req, res) => {
  try {
    const data = await noticiaService.getNoticias();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener las noticias : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const getNoticiaById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await noticiaService.getNoticiaById(id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Noticia no encontrada." });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener la noticia : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const createNoticia = async (req, res) => {
  try {
    const data = await noticiaService.createNoticia(req.body);
    res.status(201).json({ success: true, message: "Noticia creada Exitosamente.", id:data});
  } catch (error) {
    console.error("Error al crear la noticia : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const updateNoticia = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await noticiaService.updateNoticia(id, req.body);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Noticia no encontrada" });
    }
    res.status(200).json({ success: true, message: "Noticia actualizada correctamente." });
  } catch (error) {
    console.error("Error al editar la noticia : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};

export const deleteNoticia = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await noticiaService.deleteNoticia(id);
    if (data === 0) {
      return res.status(404).json({ success: false, message: "Noticia no encontrado" });
    }
    res.status(200).json({ success: true, message: "Noticia eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar la noticia : ", error);
    res.status(500).json({ success: false, message: "Error..." });
  }
};
