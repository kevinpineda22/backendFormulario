import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY; // Esta clave es sensible y solo se usa en el backend

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export { supabase };
