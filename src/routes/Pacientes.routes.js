"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Paciente_controller_1 = __importDefault(require("../controllers/Paciente.controller"));
const router = (0, express_1.Router)();
router
    .route("/")
    .get(Paciente_controller_1.default.index)
    .post(Paciente_controller_1.default.create);
exports.default = router;
