import { createClient } from "@supabase/supabase-js"

export async function saveLead(data: Record<string, string>) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  const supabase = createClient(url, key)
  const { error } = await supabase.from("versa_leads").insert([data])
  if (error) throw error
}

export function openWhatsApp(message = "Hello, I need digital marketing services.") {
  const n = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917907215816"
  window.open(`https://wa.me/${n}?text=${encodeURIComponent(message)}`, "_blank")
}
