import mongoose from "mongoose";

const MinistroSchema = new mongoose.Schema({
    nombre_completo : {type:String, require: true},
    apellido_ministro : String,
    cargo_ministro : String,
    foto_ministro:String,
    telefono_contacto:String
});

export default mongoose.model('ministros', MinistroSchema)