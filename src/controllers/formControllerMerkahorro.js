import { supabase } from "../utils/supabaseClient.js";

export async function saveFormData(req, res) {
  // Extraemos "id" y dejamos el resto de los datos en "dataToInsert"
  const { id, ...dataToInsert } = req.body;
  console.log("Datos recibidos del frontend:", req.body);
  console.log("Datos a insertar sin id:", dataToInsert);

  try {
    const { data, error } = await supabase
      .from("sociodemografico_merkahorro")
      .insert([dataToInsert]);

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
      .from("sociodemografico_merkahorro")
      .select("*");

    if (error) {
      console.error("Error al obtener datos:", error);
      return res.status(500).json({ error: error.message });
    }
    console.log("Listado obtenido correctamente", data);
    return res.status(200).json(data);
  } catch (err) {
    console.error("Error en listFormData:", err);
    return res.status(500).json({ error: err.message });
  }
}

export async function updateFormData(req, res) {
  const { id } = req.params;
  const updatedData = req.body;

  console.log(`Received PUT request for ID: ${id}`);
  console.log(`Updated data: ${JSON.stringify(updatedData)}`);

  try {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      console.error("ID inválido, debe ser un número:", id);
      return res.status(400).json({ error: "ID inválido, debe ser un número" });
    }

    console.log(`Actualizando registro con ID: ${numericId}`);
    const { data, error } = await supabase
      .from("sociodemografico_merkahorro")
      .update(updatedData)
      .eq("id", numericId)
      .select(); // Devolver los datos actualizados

    if (error) {
      console.error("Error al actualizar datos:", error);
      return res.status(500).json({ error: error.message });
    }

    if (!data || data.length === 0) {
      // Verificar si el registro existe antes de asumir que no se encontró
      const { data: existingData, error: fetchError } = await supabase
        .from("sociodemografico_merkahorro")
        .select("*")
        .eq("id", numericId);

      if (fetchError) {
        console.error("Error al verificar existencia:", fetchError);
        return res.status(500).json({ error: fetchError.message });
      }

      if (!existingData || existingData.length === 0) {
        console.log(`Registro no encontrado para ID: ${numericId}`);
        return res.status(404).json({ error: `Registro no encontrado para ID: ${numericId}` });
      }

      // Si el registro existe pero data está vacío, la actualización fue exitosa pero no devolvió datos
      console.log(`Registro encontrado pero no devuelto en data para ID: ${numericId}`);
      return res.status(200).json({ message: "Datos actualizados correctamente, pero no devueltos", id: numericId });
    }

    console.log("Datos actualizados correctamente", data);
    return res.status(200).json({ message: "Datos actualizados correctamente", data });
  } catch (err) {
    console.error("Error en updateFormData:", err);
    return res.status(500).json({ error: err.message });
  }
}