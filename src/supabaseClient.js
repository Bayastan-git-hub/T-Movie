import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ndexpcyksksbpnucadhy.supabase.co";
const supabaseKey = "sb_publishable_L_0gBvi3g4KDL8GNgNCDhQ_2Ntszac4";

export const supabase = createClient(supabaseUrl, supabaseKey); 