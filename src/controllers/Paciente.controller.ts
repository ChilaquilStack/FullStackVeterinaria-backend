import { Request, Response } from 'express';
import paciente from '../models/Paciente.model';
import fetch from '../utils/fetch';
import { HydratedDocument as PacienteDocument} from 'mongoose';
import IPaciente from '../interfaces/Pacitente.interface';
class Paciente {
    async index(req: Request, res: Response) {
        const { data, error } = await fetch(async() => {
            const pacientes: PacienteDocument<IPaciente>[] = await paciente.find();
            return pacientes;
        });
        if(data) return res.json({ data });
        if(error) return res.json({ error });
    }
    async create(req: Request, res: Response) {
        console.log(req.body)
        const { data, error } = await fetch(async() => {
            const newPaciente: PacienteDocument<IPaciente> = new paciente(req.body);
            await newPaciente.save();
            return newPaciente;
        });
        if(data) return res.json({ data });
        if(error) return res.json({ error });
    }
}

export default new Paciente();