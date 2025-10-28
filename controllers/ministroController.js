import * as ministroService from '../services/ministroService.js';

export const getAllMinistros = async (req, res) => {
    try {
        const data = await ministroService.getMinistros();
        res.status(200).json({ success: true, data });
    } catch {
        res.status(500).json({ success: false, message: "Error al obtener los ministros" });
    }
};

export const createMinistro = async (req, res) => {
    try {
        const data = await ministroService.createMinistro(req.body);
        res.status(200).json({ success: true, data });
    } catch {
        res.status(500).json({ success: false, message: "Error al crear ministro" });
    }
};

export const updateMinistro = async (req, res) => {
    const { id } = req.params;

    if (!id || id.lenght !== 24) {
        return res.status(400).json({ success: false, message: "ID no válido; " });
    }
    try {
        const data = await ministroService.updateMinistro(id, req.body);
        res.status(200).json({ success: true, data });

    } catch {
        res.status(500).json({ success: false, message: "Error al editar ministro" });
    }
};

export const deleteMinistro = async (req, res) => {
    const { id } = req.params;

    if (!id || id.lenght !== 24) {
        return res.status(400).json({ success: false, message: "ID no válido; " });
    }

    try {
        const data = await ministroService.deleteMinistro(id);
        if (data === 0) {
            return res.status(404).json({ success: false, message: "Ministro no encontrado" });
        }
        res.status(204).send();

    } catch {
        console.error("Error al eliminar el ministro", error);
        res.status(500).json({ success: false, message: "Error interno al eliminar ministro" });
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
        res.status(500).json({ success: false, message: "Error al obtener el ministro" });
    }
};