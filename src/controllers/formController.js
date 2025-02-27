import { supabase } from "../utils/supabaseClient.js";

export async function saveFormData(req, res) {
  const formData = req.body; // Se espera que el cliente envíe un JSON con los datos

  // Aquí podrías agregar validaciones adicionales

  try {
    const { data, error } = await supabase
      .from("sociodemografico") // Asegúrate de que la tabla existe en Supabase
      .insert([formData]);

    if (error) {
      console.error("Error al insertar datos:", error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: "Datos guardados correctamente", data });
  } catch (err) {
    console.error("Error en saveFormData:", err);
    return res.status(500).json({ error: err.message });
  }
}

export async function listFormData(req, res) {
  try {
    const { data, error } = await supabase
      .from("sociodemografico")
      .select("*");

    if (error) {
      console.error("Error al obtener datos:", error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error("Error en listFormData:", err);
    return res.status(500).json({ error: err.message });
  }
}