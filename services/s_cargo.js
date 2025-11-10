import m_cargo from "../models/m_cargo.js";

export const getCargos = async () => {
    try {
        const cargos = await m_cargo.findAll();
        return cargos;
    } catch (error) {
        console.error(" [Servicio] Error al obtener los cargos de la DB: ", error);
        throw error;
    }
};

export const getCargoById = async (id) => {
    try {
        const cargo = await m_cargo.findByPk(id);
        return cargo;
    } catch (error) {
        console.error(" [Servicio] Error al obtener el cargo de la DB: ", error);
        throw error;
    }
};

export const createCargo = async (datosCargo) => {
    try {
        const resultado = await m_cargo.create(datosCargo);
        return resultado.id;
    } catch (error) {
        console.error(" [Servicio] Error al crear cargo en la DB: ", error);
        throw error;
    }
};

export const updateCargo = async (id, datosCargo) => {
    try {
        const resultado = await m_cargo.update(datosCargo, {
            where: { id: id }
        });
        return resultado[0];
    } catch (error) {
        console.error(" [Servicio] Error al editar cargo en la DB: ", error);
        throw error;
    }
};

/*export const deleteCargo = async (id) => {
    try {
        const resultado = await m_cargo.destroy({
            where: { id: id }
        });
        return resultado;
    } catch (error) {
        // Nota: MySQL/Sequelize fallará aquí si hay Ministros asociados a este Cargo (FK constraint).
        console.error(" [Servicio] Error al eliminar cargo en la DB: ", error);
        throw error;
    }
};*/