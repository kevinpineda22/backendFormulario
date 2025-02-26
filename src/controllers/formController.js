import { supabase } from "../utils/supabaseClient.js";

export async function saveFormData(req, res) {
  const formData = req.body; // Se espera que el cliente envíe un JSON con los datos

  // Aquí podrías agregar validaciones adicionales

  try {
    const { data, error } = await supabase
      .from("sociodemographics") // Asegúrate de que la tabla existe en Supabase
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
