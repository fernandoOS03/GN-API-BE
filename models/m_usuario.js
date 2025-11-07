import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre :  { type: String, required: true },
    apellido :  { type: String, required: true },
    dni :  { type: String, require: true, trim: true },
    email :  { type: String, require: true, unique:true, lowercase: true},
    contrasenia :  { type: String, required: true,select: false },
    rol : {type:String, required: true, enum:[ 'super_admin', 'admin', 'editor'], default: "editor"}
});
export default mongoose.model("usuario", usuarioSchema, "usuarios");