"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Paciente_schema_1 = __importDefault(require("../schemas/Paciente.schema"));
const Paciente = mongoose_1.default.model('Paciente', Paciente_schema_1.default);
exports.default = Paciente;
