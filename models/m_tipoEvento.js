import { DataTypes } from "sequelize";
import database from "../config/db.js";

const TipoEvento = database.define('TipoEvento', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
    },
    evento: { 
        type: DataTypes.STRING(80) 
    }
}, {
    tableName: 'tipoEventos',
    timestamps: false
}

);

export default TipoEvento;