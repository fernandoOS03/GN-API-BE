import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: String, require: true, trim: true },
    email: { type: String, require: true, unique: true, lowercase: true },
    contrasenia: { type: String, required: true, select: false },
    rol: { type: String, required: true, enum: ['super_admin', 'admin', 'editor'], default: "editor" }
});

usuarioSchema.pre('save', async function (next) {
    // 1. Condición Crucial: Solo hashear si la contraseña es nueva o ha sido modificada
    if (!this.isModified('contrasenia')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.contrasenia = await bcrypt.hash(this.contrasenia, salt);
    next();
});

export default mongoose.model("usuario", usuarioSchema, "usuarios");