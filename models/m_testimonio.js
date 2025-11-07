import mongoose from "mongoose";

const testimonioSchema = new mongoose.Schema({
    tema: { type: String, required: true },
    foto_miembro: String,
    nombre_miembro:  { type: String, required: true },
    url_video: String,
    testimonio:  { type: String, required: true },
});

export default mongoose.model('testimonio', testimonioSchema, 'testimonios');