import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import formRoutes from "./src/routes/formRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configurar CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware para parsear JSON (ya incluido en express)
app.use(express.json());

// Monta las rutas del API
app.use("/api/form", formRoutes);

// Debug: log para saber si la ruta es llamada
app.use((req, res, next) => {
  if (req.path.startsWith("/api/form")) {
    console.log("Ruta llamada:", req.method, req.path);
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Backend corriendo correctamente");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
