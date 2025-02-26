import express from "express";
import { saveFormData } from "../controllers/formController.js";

const router = express.Router();

// Define la ruta POST para guardar los datos
router.post("/save", saveFormData);

export default router;
