import jwt from "jsonwebtoken";
import m_usuario from "../models/m_usuario";

export const protect = async (req, res, next) => {
  let token;

  //1. Verifica si el token esta presente en los headers de autorizacion
  //El formato esperado es: Authorization : Bearer <TOKEN>

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //2. Obtiene el token  (Eliminando Bearer)
      token = req.headers.authorization.split(" ")[1];

      //3. Decodifica el token
      //Verifica la firma, la expiracion  y lo decodifica usando el secreto
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //4. Adjuntar el Usuario a la peticion
      //EL 'decoded.usuario.id' viene del payload que se genero en el login
      //.select('-contrasenia') proviene del hash de la contrasenia que adjunte
      // a la peticion, aunque ya se tiene 'select : false' en el modelo, esto es doble seguridad
      req.user = m_usuario.findByPk(decoded.usuario.id, {
        attributes: { exclude: ["contrasenia"] },
      });
      //Verifica si el usuario fue encontrado(El token puede ser valido, pero el usuario ya fue eliminado)
      if (!req.user) {
        throw new Error("Usuario asociado al token no encontrado");
      }

      // 5. continuar el flujo al siguiente controlador/middleware
      next();
    } catch (error) {
      console.error("Error en el token de Autorizacion : ", error.message);
      // Unauthorzed para errores de token 
      res.status(401).json({
        success: false,
        message: "No autorizado, token fallido o expirado. ",
      });
    }
  }

  //Sino hay token en el header
  if (!token) {
    res.status(401).json({
      success: false,
      message: "No autorizado, no se encontró token.",
    });
  }
};
