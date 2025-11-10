import * as tipoEventoService from "../services/s_tipoEvento.js";

export const getAllTipoEventos = async (req, res) => {
    try {
        const data = await tipoEventoService.getTipoEventos();
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Error al obtener los tipos de eventos: ", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
};

export const getTipoEventoById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await tipoEventoService.getTipoEventoById(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Tipo de evento no encontrado." });
        }
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Error al obtener el tipo de evento: ", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
};

export const createTipoEvento = async (req, res) => {
    try {
        const data = await tipoEventoService.createTipoEvento(req.body);
        res.status(201).json({ success: true, message: "Tipo de evento creado exitosamente.", id: data});
    } catch (error) {
        console.error("Error al crear el tipo de evento: ", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
};

export const updateTipoEvento = async (req, res) => {
    const { id } = req.params;
    try {
        const filasActualizadas = await tipoEventoService.updateTipoEvento(id, req.body);
        if (filasActualizadas === 0) {
            return res.status(404).json({ success: false, message: "Tipo de evento no encontrado para actualizar." });
        }
        res.status(200).json({ success: true, message: "Tipo de evento actualizado correctamente." });
    } catch (error) {
        console.error("Error al editar el tipo de evento: ", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
};

export const deleteTipoEvento = async (req, res) => {
    const { id } = req.params;
    try {
        const filasEliminadas = await tipoEventoService.deleteTipoEvento(id);
        if (filasEliminadas === 0) {
            return res.status(404).json({ success: false, message: "Tipo de evento no encontrado para eliminar." });
        }
        res.status(200).json({ success: true, message: "Tipo de evento eliminado correctamente." });
    } catch (error) {
        console.error("Error al eliminar el tipo de evento", error);
        const status = error.name === 'SequelizeForeignKeyConstraintError' ? 409 : 500; 
        res.status(status).json({ success: false, message: "Error al eliminar: existen eventos asociados." });
    }
};