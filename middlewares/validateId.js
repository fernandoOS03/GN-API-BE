"Funcion para validar el ObjectId"
export const validateObjectId = (req, res, next) => {

    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({ succsess: false, message: "Falta el ID en los parametros de la solicitud" });
    } else if (id.length !== 24) {
        return res.status(400).json({ succsess: false, message: "El ID proporcionado no tiene un formato válido (debe tener 24 caracteres)." });
    }

    next();


}