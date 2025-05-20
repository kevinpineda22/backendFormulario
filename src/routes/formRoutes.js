import express from "express";
import { saveFormData, listFormData, updateFormData  } from "../controllers/formControllerMerkahorro.js";
import { saveFormDataConstruahorro, listFormDataConstruahorro, updateFormDataConstruahorro  } from "../controllers/formControllerConstruahorro.js";
import { saveFormDataMegamayoristas, listFormDataMegamayoristas, updateFormDataMegamayoristas  } from "../controllers/formControllerMegamayoristas.js";

const router = express.Router();

//*************************************************************endpoint Merkahorro

// Ruta para guardar datos
router.post("/save", saveFormData);

// Ruta para obtener el historial
router.get("/list", listFormData);

// Ruta para Guardar y editar datos del historial
router.put("/update/:id", updateFormData);

//************************************************************* endpoint Construahorro

// Ruta para guardar datos
router.post("/save/construahorro", saveFormDataConstruahorro);

// Ruta para obtener el historial
router.get("/list", listFormDataConstruahorro);

// Ruta para Guardar y editar datos del historial
router.put("/update/:id", updateFormDataConstruahorro);

//*************************************************************endpoint Megamayoristas

// Ruta para guardar datos
router.post("/save", saveFormDataMegamayoristas);

// Ruta para obtener el historial
router.get("/list", listFormDataMegamayoristas);

// Ruta para Guardar y editar datos del historial
router.put("/update/:id", updateFormDataMegamayoristas);


export default router;