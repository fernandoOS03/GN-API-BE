import mongoose from "mongoose";

const horaPiadosaSchema = new mongoose.Schema({
    fecha: { type: Date, require: true },
    url_video: String,
    id_ministro: { type: mongoose.Schema.Types.ObjectId, ref: 'ministros' }
});

export default mongoose.model('horasPiadosa', horaPiadosaSchema, 'horasPiadosas');