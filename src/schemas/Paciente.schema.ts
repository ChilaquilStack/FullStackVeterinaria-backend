import mongoose from 'mongoose';

import IPaciente from '../interfaces/Pacitente.interface';

const PacienteSchema = new mongoose.Schema<IPaciente>({
    nombre: {
        type: String,
        required: true,
    },
    propietario: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    alta: {
        type: Date,
        required: true,
    },
    sintomas: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

export default PacienteSchema;