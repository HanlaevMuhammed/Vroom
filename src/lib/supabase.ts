import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mdqpdqxnuslwoyjoqobm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kcXBkcXhudXNsd295am9xb2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1OTMzNjQsImV4cCI6MjA1OTE2OTM2NH0.VgQ51esflPQNRg1i3I9mMvmo0140fPcu_C8PTYVDWPE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

