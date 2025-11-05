import 'dotenv/config';
import express from 'express';
import { connectDB, closeConnection } from './config/connect.js';
import ministroRoutes from './routes/api/ministroRoutes.js';
import eventoRoutes from './routes/api/eventoRoutes.js';
import horaPiadosaRoutes from "./routes/api/horaPiadosaRoutes.js";
import noticiaRoutes from "./routes/api/noticiaRoutes.js";
import sedeInternacionalRoutes from "./routes/api/sedeInternacionalRoutes.js";
import sedeNacionalRoutes from "./routes/api/sedeNacionalRoutes.js";
import testimonioRoutes from "./routes/api/testimonioRoutes.js";
import usuarioRoutes from "./routes/api/usuarioRoutes.js";


const app = express();
const PORT = process.env.PORT

app.use(express.json());

app.use('/api/ministros', ministroRoutes);
app.use('/api/horaPiadosa', horaPiadosaRoutes);
app.use('/api/noticia', noticiaRoutes);
app.use('/api/sedeInternacional', sedeInternacionalRoutes);
app.use('/api/sedeNacional', sedeNacionalRoutes);
app.use('/api/testimonio', testimonioRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/evento', eventoRoutes);





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