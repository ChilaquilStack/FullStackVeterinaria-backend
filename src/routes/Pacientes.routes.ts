import { Router } from "express";

import PacienteController from "../controllers/Paciente.controller";

const router = Router();

router
    .route("/")
    .get(PacienteController.index)
    .post(PacienteController.create);

export default router;