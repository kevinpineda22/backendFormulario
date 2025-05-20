import express from "express";
import {
  saveFormData,
  listFormData,
  updateFormData,
} from "../controllers/formControllerMerkahorro.js";
import {
  saveFormDataConstruahorro,
  listFormDataConstruahorro,
  updateFormDataConstruahorro,
} from "../controllers/formControllerConstruahorro.js";
import {
  saveFormDataMegamayoristas,
  listFormDataMegamayoristas,
  updateFormDataMegamayoristas,
} from "../controllers/formControllerMegamayoristas.js";

const router = express.Router();

//*************************************************************endpoint Merkahorro

// Ruta para guardar datos
router.post("/save/merkahorro", saveFormData);

// Ruta para obtener el historial
router.get("/list/merkahorro", listFormData);

// Ruta para Guardar y editar datos del historial
router.put("/update/merkahorro/:id", updateFormData);

//************************************************************* endpoint Construahorro

// Ruta para guardar datos
router.post("/save/construahorro", saveFormDataConstruahorro);

// Ruta para obtener el historial
router.get("/list/construahorro", listFormDataConstruahorro);

// Ruta para Guardar y editar datos del historial
router.put("/update/construahorro/:id", updateFormDataConstruahorro);

//*************************************************************endpoint Megamayoristas

// Ruta para guardar datos
router.post("/save/megamayoristas", saveFormDataMegamayoristas);

// Ruta para obtener el historial
router.get("/list/megamayoristas", listFormDataMegamayoristas);

// Ruta para Guardar y editar datos del historial
router.put("/update/megamayoristas/:id", updateFormDataMegamayoristas);

export default router;
