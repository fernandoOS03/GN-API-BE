import mongoose from "mongoose"

const noticiaSchema = new mongoose.Schema({
    titulo: { type: String, require: true },
    fecha_inicio: Date,
    noticia_card: String,
    noticia_completa: String,

});

export default mongoose.model('noticias', noticiaSchema);