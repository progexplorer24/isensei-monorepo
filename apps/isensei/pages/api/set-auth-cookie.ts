// /pages/api/set-auth-cookie.ts

import { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "@/lib/auth/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  supabase.auth.api.setAuthCookie(req, res);
};

export default handler;
