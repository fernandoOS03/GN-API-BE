import { MongoClient } from "mongodb";

let cliente;
let database;

"Funcion que nos permitira usar le patron de conexino unica {Singleton} para conectarnos MongoDB"
 const connectDB = async () =>{
    try{
        const mongoUrl = process.env.URL_MONGO;

        if (!cliente){
            cliente = await MongoClient.connect(mongoUrl);   
            database = cliente.db(); //Almacenamos la instancia de la base de datos
            console.log("Conexion a MongoDB establecida con exito");
        }
        return database;

    }catch(error){
        console.error("Error al conectar a MongoDB : " ,error);
        throw error;
    }
};


"Funcion para cerrar la conexion cuando el servidror se apague"
 const closeConnection = async () =>{
    if (cliente){
        await cliente.close();
        cliente = null;
        database = null;
        console.log("Conexion a MongoDB cerrada");
    }
};

export { connectDB, closeConnection };