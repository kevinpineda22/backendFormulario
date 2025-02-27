import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors';
import formRoutes from "./src/routes/formRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: '*',  // Permite todas las solicitudes de cualquier origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],  // Cabeceras permitidas
}));

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
