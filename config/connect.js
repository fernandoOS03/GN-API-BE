import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const mongoUrl = process.env.URL_MONGO;

        const connection = await mongoose.connect(mongoUrl, {});

        console.log(`Mongosee conectado : ${connection.connect.host}`);

    } catch (error) {
        console.error("Error al conectar a MongoDB : ", error.message);
        process.exit(1);
    }
};


export { connectDB };