import m_usuario from "../models/m_usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { use } from "react";

export const loginUser = async (email, contrasenia) => {
  //Busca Usuario (Incluyendo la contrasenia que esta en 'select : false')
  const user = await m_usuario.findOne({
    where: { email },
  });

  if (!user) {
    throw new Error("Credenciales Incorrectas");
  }
  //Verifica la contraseña hasheada
  const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);

  if (!isMatch) {
    throw new Error("Credenciales Invalidas");
  }

  //Genera el payload y el JWT
  const payload = {
    usuario: {
      id: user.id,
      rol: user.rol, //Información importante para la autorización
    },
  };

  // Generacion del token
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {expiresIn: '1h'}
  )

  return { token, rol: user.rol };
};
