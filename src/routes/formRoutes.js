import express from "express";
import { saveFormData, listFormData, updateFormData  } from "../controllers/formController.js";

const router = express.Router();

// Ruta para guardar datos
router.post("/save", saveFormData);

// Ruta para obtener el historial
router.get("/list", listFormData);

// Ruta para Guardar y editar datos del historial
router.put("/update/:id", updateFormData);

export default router;
