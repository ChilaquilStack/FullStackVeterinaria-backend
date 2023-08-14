import { Schema, model } from 'mongoose';

const PacienteSchema = new Schema({
    nombre: String,
    propietario: String,
    email: String,
    alta: Date,
    sintomas: String,
})

const Paciente = model('Paciente', PacienteSchema);

export default Paciente;