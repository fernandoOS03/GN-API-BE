import m_usuario from "../models/m_usuario.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import router from "../routes/api/r_ministro.js";
import { use } from "react";

export const loginUser = async (email, contrasenia) => {
    //Busca Usuario (Incluyendo la contrasenia que esta en 'select : false')
    const user = await m_usuario.findOne({ email }).select('+cntrasenia');

    if (!user) {
        throw new Error('Credenciale Incorrectas');
    };
    //Verifica la contraseña hasheada
    const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);

    if (!isMatch) {
        throw new Error('Credenciales Invalidas');
    };

    //Genera el payload y el JWT
    const payload = {
        usuario: {
            id: user._id,
            router: user.rol, //Información importante para la autorización
            email: user.email
        }
    };

    //
    const token = await new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },  //Tiempo de expiración
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });

    return { token, rol: use.rol };
};