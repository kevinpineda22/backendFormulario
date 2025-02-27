import express from "express";
import { saveFormData, listFormData } from "../controllers/formController.js";

const router = express.Router();

// Ruta para guardar datos
router.post("/save", saveFormData);

// Ruta para obtener el historial
router.get("/list", listFormData);

export default router;
