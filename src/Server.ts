
import  express, { Express, Request, Response } from 'express';
require('dotenv/config')

import connectDB from './db';
import routerPaciente from './routes/Pacientes.routes';

export default class Server {
    
    #app: Express;
    #port: Number;

    constructor() {
        this.#app = express();
        this.midlewares();
        this.#port = Number(process.env.port) || 3000;
    }
    
    midlewares() {
        this.#app.use(express.json());
        this.#app.use('/', routerPaciente);
    }
    
    listen() {
        this.#app.listen(this.#port, () => {
            connectDB();
            console.log(`Server is running at http://localhost:${this.#port}/`);
        });
    }

}