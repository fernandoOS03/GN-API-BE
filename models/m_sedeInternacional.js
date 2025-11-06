import mongoose from "mongoose";

const sedeInternSchema = new mongoose.Schema({
    region: { type: String, require: true },
    url_website: String
});

export default mongoose.model('sedesInternacional', sedeInternSchema, 'sedesInternacionales');