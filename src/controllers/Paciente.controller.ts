import { Request, Response } from 'express';
import paciente from '../models/Paciente.model';

class Paciente {
    async index(req: Request, res: Response){
        const pacientes = await paciente.find()
        res.json(pacientes);
    }
}

export default new Paciente();