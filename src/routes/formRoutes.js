import express from "express";
import { saveFormData, listFormData  } from "../controllers/formController.js";

const router = express.Router();

// Define la ruta POST para guardar los datos
router.post("/save", saveFormData);

router.get('/api/form/list', listFormData);

export default router;
