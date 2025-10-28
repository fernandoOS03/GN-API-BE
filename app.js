import 'dotenv/config';
import express from 'express';
import { connectDB, closeConnection } from './config/connect.js';
import ministroRoutes from './routes/api/ministroRoutes.js';


const app = express();
const PORT = process.env.PORT

app.use(express.json());

app.use('/api/ministros', ministroRoutes);





"======================= Funcion para iniciar la aplicacion ======================= "
const starServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el Puerto : ${PORT}`);
        });

    } catch (error) {
        console.error("Fallo crítico al iniciar el servidor o conectar a la DB.");
        process.exit(1);
    }
}

starServer();