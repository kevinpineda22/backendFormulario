import { supabase } from "../utils/supabaseClient.js";

export async function saveFormData(req, res) {
  const formData = req.body;

  try {
    const { data, error } = await supabase
      .from("sociodemografico")
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

export async function updateFormData(req, res) {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const { data, error } = await supabase
      .from("sociodemografico")
      .update(updatedData)
      .eq("id", id);

    if (error) {
      console.error("Error al actualizar datos:", error);
      return res.status(500).json({ error: error.message });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Registro no encontrado" });
    }

    return res.status(200).json({ message: "Datos actualizados correctamente", data });
  } catch (err) {
    console.error("Error en updateFormData:", err);
    return res.status(500).json({ error: err.message });
  }
}
