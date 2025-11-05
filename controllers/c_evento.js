import * as eventoService from "../services/s_evento.js";

export const getAllEventos = async (req, res) => {
    try {
        const data = await eventoService.geteventos();
        res.status(200).json({ success: true, data });

    } catch (error) {
        console.error("Error al obtener los eventos : ", error);
        res.status(500).json({ success: false, message: "Error.." });
    }
};

export const getEventoById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await eventoService.getEventoById(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Evento no encontrado. " });
        }
        res.status(200).json({ success: true, data });

    } catch (error) {
        console.error("Erro al obtener el evento : ", error);
        res.status(500).json({ success: false, message: "Error..." });
    }
};

export const createEvento = async (req, res) => {
    try {
        const data = await eventoService.createEvento(req.body);
        res.status(201).json({ success: true, message: "Evento creado exitosamente.", id: data});
    } catch (error) {
        console.error("Erro al crear el evento : ", error);
        res.status(500).json({ success: false, message: "Error..." });
    }
};

export const updateEvento = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await eventoService.updateEvento(id, req.body);
        if (data === 0) {
            return res.status(404).json({ success: false, message: "Evento no encontrado. " });
        }
        res.status(200).json({ success: true, message: "Evento actualizado correctamente." });
    } catch (error) {
        console.error("Error al editar el evento : ", error);
        res.status(500).json({ success: false, message: "Error..." });
    }
};

export const deleteEvento = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await eventoService.deleteEvento(id);
        if (data === 0) {
            return res.status(404).json({ success: false, message: "Evento no encontrado. " });
        }
        res.status(200).json({ success: true, message: "Evento eliminado correctamente." });
    } catch (error) {
        console.error("Error al eliminar el evento", error);
        res.status(500).json({ success: false, message: "Error..." });

    }
};