import database from "./db.js";

import Cargo from "../models/m_cargo.js";
import Evento from "../models/m_evento.js";
import Usuario from "../models/m_usuario.js";
import Noticia from "../models/m_noticia.js";
import Ministro from "../models/m_ministro.js";
import Testimonio from "../models/m_testimonio.js";
import TipoEvento from "../models/m_tipoEvento.js";
import HoraPiadosa from "../models/m_horaPiadosa.js";
import SedeNacional from "../models/m_sedeNacional.js";
import SedeInternacional from "../models/m_sedeInternacional.js";

export const connection = async () => {
    try {
        await database.authenticate();
        console.log("Conexion Exitosa");

        //Se esta importando aqui porque hay un erro al momento de generar las tablas.
        //Por eso se esta poniendo de manera literal el orden en el que se crearan.

        //TABLAS SIN FK DEPENDIENTES DE OTRAS TABLAS
        await Cargo.sync({ alter: true });
        await SedeNacional.sync({ alter: true });
        await TipoEvento.sync({ alter: true });

        await Ministro.sync({ alter: true });
        await Testimonio.sync({ alter: true });
        await Evento.sync({ alter: true });


        //TABLAS HIJOS DE NIVEL 2 (DEPENDEN DE MINSITROS
        await HoraPiadosa.sync({ alter: true });

        //CREAMOS LAS TABLAS QUE TIENE RELACION
        await SedeInternacional.sync({ alter: true });
        await Noticia.sync({ alter: true });
        await Usuario.sync({ alter: true });

    } catch (error) {
        console.error("Error en la conexion y sincronizacion : ", error);
    }
}