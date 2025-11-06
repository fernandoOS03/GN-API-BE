import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const mongoUrl = process.env.URL_MONGO;

        const connection = await mongoose.connect(mongoUrl, {});

        console.log(`Mongosee conectado : ${connection.connection.host}`);
        console.log(`Mongoose conectado a la DB: ${connection.connection.name}`);
        

    } catch (error) {
        console.error("Error al conectar a MongoDB : ", error.message);
        process.exit(1);
    }
};


export { connectDB };