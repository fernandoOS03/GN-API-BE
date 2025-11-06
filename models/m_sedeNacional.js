import mongoose from "mongoose";

const sedeNacionalSchema = new mongoose.Schema({
    nombre_sede: {type:String, require:true},
    ubicacion_sede : String,
    id_ministro:{ type:mongoose.Schema.Types.ObjectId, ref: 'ministros' }
});

export default mongoose.model('sedesNacional', sedeNacionalSchema, 'sedesnacionales');