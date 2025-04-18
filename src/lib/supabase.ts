// src/utils/supabase.ts
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://ueqlfrgfzqhvyynfiitt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlcWxmcmdmenFodnl5bmZpaXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5OTAwNzgsImV4cCI6MjA2MDU2NjA3OH0.VXMJaVdlnM_gU3qMkpr9-F2EigfvVeLC33vXtPAvF1U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
