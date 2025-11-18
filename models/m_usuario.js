import bcrypt from "bcryptjs";
import { DataTypes } from "sequelize";
import database from "../config/db.js";

const Usuario = database.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombres: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(8),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    contrasenia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM("super_admin","admin", "editor"),
      allowNull: false,
      defaultValue: "editor",
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
    hooks: {
        //Se ejecuta antes de crear el usuario ( para hashear la contraseña inicial)
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.contrasenia = await bcrypt.hash(user.contrasenia, salt);
      },
      //Este se ejecuta antes de actualizar, siempre y cuando la contraseña de haya cambiado
      beforeCreate: async (user) => {
        if (user.changed("contrasenia")) {
          const salt = await bcrypt.genSalt(10);
          user.contrasenia = bcrypt.hash(user.contrasenia, salt);
        }
      },
    },
  }
);

export default Usuario;
