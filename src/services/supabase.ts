import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vxrfixckdourckrkporx.supabase.co';
const supabaseAnonKey = 'sb_publishable_EwBRqQqsJ3s2_R9snkx5qA_iPjQ2Dgl';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);