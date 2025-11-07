import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/connect.js';


" ============ RUTAS ============"
import ministroRoutes from './routes/api/r_ministro.js';
import eventoRoutes from './routes/api/r_evento.js';
import horaPiadosaRoutes from "./routes/api/r_horaPiadosa.js";
import noticiaRoutes from "./routes/api/r_noticia.js";
import sedeInternacionalRoutes from "./routes/api/r_sedeInternacional.js";
import sedeNacionalRoutes from "./routes/api/r_sedeNacional.js";
import testimonioRoutes from "./routes/api/r_testimonio.js";
import usuarioRoutes from "./routes/api/r_usuario.js";

" ============ MODELOS ============"
import './models/m_evento.js'
import './models/m_horaPiadosa.js'
import './models/m_ministro.js'
import './models/m_noticia.js'
import './models/m_sedeInternacional.js'
import './models/m_sedeNacional.js'
import './models/m_testimonio.js'
import './models/m_usuario.js'



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