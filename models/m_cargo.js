import { DataTypes } from "sequelize";
import database from "../config/db.js";

const Cargo = database.define('Cargo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  //Evite que se inserte un registro sin un valor en esta columna  | Equivalente a un not null en mysql
    },
    cargo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'cargos',
    timestamps: false  // deshabilita la creacion de las columnas createAd y updatedAp evita  el rastreado de cuando se crearon y actualizaron los registos, cambiar a true si se quiere llevar un control
});

export default Cargo;