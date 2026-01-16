import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vxrfixckdourckrkporx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4cmZpeGNrZG91cmNrcmtwb3J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0NDUwMTcsImV4cCI6MjA4NDAyMTAxN30.qzpsE_dqddds8Gyisb8QoAxsIySXM4lNfpUpSeE7t54   ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);