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
    try {
        const data = await ministroService.updateMinistro(req.params.id, req.body);
        res.status(200).json({ success: true, data });

    } catch {
        res.status(500).json({ success: false, message: "Error al editar ministro" });

    }
};

export const deleteMinistro = async (req, res) => {
    try {
        const data = await ministroService.deleteMinistro(req.params.id);
        res.status(200).json({ success: true, data });
    } catch {
        res.status(500).json({ success: false, message: "Error al eliminar ministro" });
    }
};

export const getMinistroById = async (req, res) => {
    try {
        const data = await ministroService.getMinistroById(req.params.id);
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al eliminar ministro" });
    }
};