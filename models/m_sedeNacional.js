import { DataTypes } from "sequelize";
import database from '../config/db.js';

const SedeNacional = database.define('SedeNacional', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement:true, 
        allowNull: false
    },
    nameSedeNac: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ubiSedeNac: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
}, {
    tableName: 'sedesNacionales',
    timestamps: false
});

export default SedeNacional;