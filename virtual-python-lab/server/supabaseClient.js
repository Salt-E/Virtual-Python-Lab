require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Mengambil URL dan Key dari file .env
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = supabase;