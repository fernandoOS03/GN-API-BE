// models/Testimonio.js
import { DataTypes } from "sequelize";
import database from '../config/db.js';

const Testimonio = database.define('Testimonio', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreMiembro: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    testimonio: {
        type: DataTypes.TEXT,
        allowNull: false
    }, 
    cargosId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'testimonios',
    timestamps: false
});

export default Testimonio;