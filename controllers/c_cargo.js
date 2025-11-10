import * as cargoService from "../services/s_cargo.js";

export const getAllCargos = async (req, res) => {
    try {
        const data = await cargoService.getCargos();
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Error al obtener los cargos: ", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
};

export const getCargoById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await cargoService.getCargoById(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Cargo no encontrado." });
        }   
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Error al obtener el cargo: ", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
};

export const createCargo = async (req, res) => {
    try {
        const data = await cargoService.createCargo(req.body);
        res.status(201).json({ success: true, message: "Cargo creado exitosamente.", id: data});
    } catch (error) {
        console.error("Error al crear el cargo: ", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
};

export const updateCargo = async (req, res) => {
    const { id } = req.params;
    try {
        const filasActualizadas = await cargoService.updateCargo(id, req.body);
        if (filasActualizadas === 0) {
            return res.status(404).json({ success: false, message: "Cargo no encontrado para actualizar." });
        }
        res.status(200).json({ success: true, message: "Cargo actualizado correctamente." });
    } catch (error) {
        console.error("Error al editar el cargo: ", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
};

/*export const deleteCargo = async (req, res) => {
    const { id } = req.params;
    try {
        const filasEliminadas = await cargoService.deleteCargo(id);
        if (filasEliminadas === 0) {
            return res.status(404).json({ success: false, message: "Cargo no encontrado para eliminar." });
        }
        res.status(200).json({ success: true, message: "Cargo eliminado correctamente." });
    } catch (error) {
        console.error("Error al eliminar el cargo", error);
        const status = error.name === 'SequelizeForeignKeyConstraintError' ? 409 : 500; 
        res.status(status).json({ success: false, message: "Error al eliminar: existen ministros asociados." });
    }
}*/