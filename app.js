import 'dotenv/config';
import express from 'express';
import { getMinistros } from './services/ministroService.js';

const app = express();
const PORT = process.env.PORT

app.get('/', async (req, res) => {
    const ministros = await getMinistros();
    res.json(ministros); 
});

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el Puerto : ${PORT}`);
})


