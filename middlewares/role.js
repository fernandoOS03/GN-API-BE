//Esta funcion es para verificar el rol que tiene el usuario

export const checkRole = (rolesRequeridos) => {
    return (req, res, next) => {
        //Se asegura que el usuario haya sido adjuntado por el middleware protect
        if (!req.user || !req.user.rol) {
            return res.status(401).json({ success: false, message: "Autenticacion requerida para acceder" });
        };

        const usuarioRol = req.user.rol;
        //Lo que hace es verificar si el rol esta en la lista de roles requeridos
        //el metodo includes() hace la comparacion simple de string
        if (rolesRequeridos.includes(usuarioRol)) {
            //El usuario cuenta con el rol
            next();
        } else{
             res.status(403).json({succes: false, message: `Acceso denegado, Rol '${usuarioRol}', no cuento con permiso para realizar esta opcion`});
        };
    }
};