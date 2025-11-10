import Ministro from "./m_ministro.js";
import SedeNacional from "./m_sedeNacional.js";
import HoraPiadosa from "./m_horaPiadosa.js";
import Cargo from "./m_cargo.js";
import TipoEvento from "./m_tipoEvento.js";
import Evento from "./m_evento.js";
import Testimonio from "./m_testimonio.js";

//========= RELACION CARGO 1 - M TESTIMONIOS ========= 
Testimonio.belongsTo(Cargo, {
    //Usamos el nombre que se la FK que se definio en el modelo, en este caso Testimonio.
    foreignKey: 'cargosId',
    //Este alias se usara para hacer el join(POPULATE) desde Testimonio
    as: 'cargo'
});

Cargo.hasMany(Testimonio, {
    foreignKey: 'cargosId',
    as: 'testimonios'
});


//========= RELACION CARGO 1 - M MINISTROS ========= 

Ministro.belongsTo(Cargo, {
    foreignKey: 'cargosId',
    as: 'cargos'
});

Cargo.hasMany(Ministro,{
    foreignKey: 'cargosId',
    as : 'ministros'
});


//========= RELACION MINSTRO 1 - 1 SEDES NACIONALES ========= 

Ministro.belongsTo(SedeNacional,{
    foreignKey: 'sedeNacionalId',
    as: 'sedeNacional'
});

SedeNacional.hasOne(Ministro,{
    foreignKey:'sedeNacionalId',
    as: 'ministro'
});

//========= RELACION MINSTRO 1 - M HORAS PIADOSAS ========= 

Ministro.hasMany(HoraPiadosa,{
    foreignKey: 'ministroId',
    as : 'horaPiadosa'
});

HoraPiadosa.belongsTo(Ministro,{
    foreignKey: 'ministroId',
    as : 'ministros'
});


//========= EVENTOS 1 - 1 EVENTOS ========= 

Evento.belongsTo(TipoEvento,{
    foreignKey : 'tipoEventosId',
    as : 'tipoEvento'
});

TipoEvento.hasMany(Evento,{
    foreignKey : 'tipoEventosId',
    as : 'eventos'
});
