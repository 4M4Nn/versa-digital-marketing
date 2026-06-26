import { createClient } from "@supabase/supabase-js"
const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient(url, key)
export async function submitLead(data: Record<string, string>) {
  const { error } = await supabase.from("versa_leads").insert([data])
  if (error) throw error
}
