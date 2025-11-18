import 'dotenv/config';
import express from 'express';
import { connection } from './config/connection.js';


import Login from './routes/api/r_auth.js';
import './models/associations.js'

import cargoRoutes from "./routes/api/r_cargo.js";
import eventoRoutes from './routes/api/r_evento.js';
import usuarioRoutes from "./routes/api/r_usuario.js";
import noticiaRoutes from "./routes/api/r_noticia.js";
import ministroRoutes from './routes/api/r_ministro.js';
import testimonioRoutes from "./routes/api/r_testimonio.js";
import tipoEventoRoutes from "./routes/api/r_tipoEvento.js";
import horaPiadosaRoutes from "./routes/api/r_horaPiadosa.js";
import sedeNacionalRoutes from "./routes/api/r_sedeNacional.js";
import sedeInternacionalRoutes from "./routes/api/r_sedeInternacional.js";

//" ============ MODELOS ============"
import './models/m_cargo.js'
import './models/m_sedeNacional.js'
import './models/m_tipoEvento.js'
import './models/m_usuario.js'
import './models/m_noticia.js'
import './models/m_sedeInternacional.js'

import './models/m_ministro.js'
import './models/m_testimonio.js'
import './models/m_evento.js'
import './models/m_horaPiadosa.js'


const app = express();
const PORT = process.env.PORT

app.use(express.json());

//" ============ RUTAS ============"

app.use('/api/auth', Login)

app.use('/api/cargo', cargoRoutes);
app.use('/api/evento', eventoRoutes);
app.use('/api/noticia', noticiaRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/ministros', ministroRoutes);
app.use('/api/tipoEvento', tipoEventoRoutes);
app.use('/api/testimonio', testimonioRoutes);
app.use('/api/horaPiadosa', horaPiadosaRoutes);
app.use('/api/sedeNacional', sedeNacionalRoutes);
app.use('/api/sedeInternacional', sedeInternacionalRoutes);




"======================= Funcion para iniciar la aplicacion ======================= "
const starServer = async () => {
    try {
        await connection();

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el Puerto : ${PORT}`);
        });

    } catch (error) {
        console.error("Fallo crítico al iniciar el servidor o conectar a la DB.");
        process.exit(1);
    }
}

starServer();