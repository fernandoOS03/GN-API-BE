import * as testimonioService from "../services/s_testimonio.js";

export const getAllTestimonios = async (req, res) => {
    try {
        const data = await testimonioService.getAllTestimonios();
        res.status(200).json({ success: true, data });

    } catch (error) {
        console.error(" Error al obtener los  testimonios : ", error);
        res.status(500).json({ success: false, message: "Error..." });
    }
};

export const getTestimonioById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await testimonioService.getTestimoniosById(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Testimonio no encontrado." });
        }
        res.status(200).json({ success: true, data });

    } catch (error) {
        console.error("Error al obtener el testimonio : ", error);
        res.status(500).json({ success: false, message: "Error..." });
    }
};

export const createTestimonio = async (req, res) => {
    try {
        const data = await testimonioService.createTestimonio(req.body);
        res.status(201).json({ success: true, message: "Testimonio creado Exitosamente.", id: data });
    } catch (error) {
        console.error("Error al crear el Testimonio : ", error);
        res.status(500).json({ success: false, message: "Error..." });
    }
};

export const updateTestimonio = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await testimonioService.updateTestimonio(id, req.body);
        if (data === 0) {
            return res.status(404).json({ success: false, message: "Testimonio no encontrado" });
        }
        res.status(200).json({ success: true, message: "Testimonio actualizado correctamente." });
    } catch (error) {
        console.error("Error al editar el Testimonio : ", error);
        res.status(500).json({ success: false, message: "Error..." });
    }
};

export const deleteTestimonio = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await testimonioService.deleteTestimonio(id);
        if (data === 0) {
            return res.status(404).json({ success: false, message: "Testimonio no encontrado. " });
        }
        res.status(200).json({ success: true, message: "Testimonio eliminado correctamente." });


    } catch (error) {
        console.error("Error al eliminar el testimonio : ", error);
        res.status(500).json({ success: false, message: "Error..." });
    }
};
