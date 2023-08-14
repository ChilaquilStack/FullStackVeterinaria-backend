import mongoose from 'mongoose';

import PacienteSchema from '../schemas/Paciente.schema';

const Paciente = mongoose.model('Paciente', PacienteSchema);

export default Paciente;