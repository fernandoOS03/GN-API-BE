import { DataTypes } from "sequelize";
import database from '../config/db.js';

const Evento = database.define('Evento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(200), 
        allowNull: false
    },
    fechaInicio: {
        type: DataTypes.DATE
    },
    fechaFin: {
        type: DataTypes.DATE
    },
    lugar: {
        type: DataTypes.STRING(150)
    },
    descripCard: {
        type: DataTypes.STRING(200)
    },
    descripCompleta: {
        type: DataTypes.TEXT
    },
    imgEvento: {
        type: DataTypes.STRING
    },
    tipoEventosId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, {
    tableName: 'eventos',
    timestamps: false
});

export default Evento;