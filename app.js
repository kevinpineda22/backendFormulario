import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import formRoutes from "./src/routes/formRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Monta las rutas del API
app.use("/api/form", formRoutes);

app.get("/", (req, res) => {
  res.send("Backend corriendo correctamente");
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
