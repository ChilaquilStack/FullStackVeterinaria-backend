"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Paciente_model_1 = __importDefault(require("../models/Paciente.model"));
const fetch_1 = __importDefault(require("../utils/fetch"));
class Paciente {
    async index(req, res) {
        const { data, error } = await (0, fetch_1.default)(async () => {
            const pacientes = await Paciente_model_1.default.find();
            return pacientes;
        });
        if (data)
            return res.json({ data });
        if (error)
            return res.json({ error });
    }
    async create(req, res) {
        console.log(req.body);
        const { data, error } = await (0, fetch_1.default)(async () => {
            const newPaciente = new Paciente_model_1.default(req.body);
            await newPaciente.save();
            return newPaciente;
        });
        if (data)
            return res.json({ data });
        if (error)
            return res.json({ error });
    }
}
exports.default = new Paciente();
