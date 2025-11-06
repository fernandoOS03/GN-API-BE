import mongoose from "mongoose";

const eventoSChema = new mongoose.Schema({
    nombre_evento: { type: String, require: true },
    fecha_inicio: Date,
    fecha_fin: Date,
    descripcion_card: String,
    descripcion_completa: String,
});

export default mongoose.model('evento', eventoSChema, 'eventos');