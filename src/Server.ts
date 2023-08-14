
import  express, { Express, Request, Response } from 'express';
import paciente from './controllers/Paciente.controller';

export default class Server {
    
    #app: Express;
    #port: Number;

    constructor() {
        this.#app = express();
        this.midlewares();
        this.#port = Number(process.env.port) || 3000;
    }
    
    midlewares() {
        this.#app.get('/', paciente.index);
    }
    
    listen() {
        this.#app.listen(this.#port, () => {
            console.log(`Server is running at http://localhost:${this.#port}/`);
        });
    }

}