
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lbidrilzqggrimqcjnmn.supabase.co'
const supabaseKey = "sb_publishable_QdFSWWNaz-abdY9y_I4npA_qXjRMONw"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;