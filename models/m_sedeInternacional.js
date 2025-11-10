import { DataTypes } from "sequelize";
import database from '../config/db.js';

const SedeInternacional = database.define('SedeNacional', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    region: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urlWebsite: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'sedesInternacionales',
    timestamps: false
});

export default SedeInternacional;