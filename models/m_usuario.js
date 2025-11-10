// models/Usuario.js
import { DataTypes } from "sequelize";
import database from '../config/db.js';

const Usuario = database.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombres: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING(8),
        unique: true,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(30), 
        unique: true,
        allowNull: false
    }, 
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    rol: {
        type: DataTypes.STRING(15),
        defaultValue: 'user'
    }, 
}, {
    tableName: 'usuarios',
    timestamps: false
});

export default Usuario;