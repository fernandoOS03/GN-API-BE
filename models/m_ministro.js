import { DataTypes } from "sequelize";
import database from '../config/db.js';

const Ministro = database.define('Ministro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreMinis: {
        type: DataTypes.STRING(50),
        allowNull: false 
    },
    apellidosMinis: {
        type: DataTypes.STRING(80),
    },
    fotoMinis: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    nroTelefono: {
        type: DataTypes.STRING(11),
        allowNull: true
    },
    cargosId: { 
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    sedeNacionalId: { 
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false 
    }
}, {
    tableName: 'ministros',
    timestamps: false
});

export default Ministro;