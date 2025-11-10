// models/HoraPiadosa.js
import { DataTypes } from "sequelize";
import database from '../config/db.js';

const HoraPiadosa = database.define('HoraPiadosa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        
    },
    urlVideo: {
        type: DataTypes.STRING(80),
        allowNull: false 
    },
    ministroId: { 
        type: DataTypes.INTEGER,
        allowNull: false 
    }
}, {
    tableName: 'horasPiadosas', // Nombre de la tabla en MySQL (usamos plural)
    timestamps: false 
});

export default HoraPiadosa;