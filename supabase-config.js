// supabase-config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Подключение к твоей базе Supabase
const supabaseUrl = 'https://rzooujinsekmgswgbixv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6b291amluc2VrbWdzd2diaXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2Mzg3NzIsImV4cCI6MjA3NDIxNDc3Mn0.41o_lwuKZRJENtOtYMVpnZNE7mOz-TJiclCnK_0g08I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
