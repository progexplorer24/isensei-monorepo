import { supabase } from "@/lib/auth/client";

export default function handler(req, res) {
  supabase.auth.api.setAuthCookie(req, res);
}
