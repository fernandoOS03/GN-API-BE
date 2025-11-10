import { DataTypes } from "sequelize";
import database from "../config/db.js";

const Noticia = database.define(
  "Noticia",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fechaNotica: {
      type: DataTypes.DATE,
    },
    noticiaCard: {
      type: DataTypes.STRING(200),
    },
    noticiaCompleta: {
      type: DataTypes.TEXT,
    },
    imgNoticia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "noticias",
    timestamps: false,
  }
);

export default Noticia;
