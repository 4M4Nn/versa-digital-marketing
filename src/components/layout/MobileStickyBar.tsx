"use client"

import { Phone } from "lucide-react"
import { SITE } from "@/lib/data"
import { openWhatsApp } from "@/lib/supabase"
import { MessageCircle } from "lucide-react"

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex">
      <a
        href={`tel:${SITE.phone}`}
        className="flex-1 flex items-center justify-center gap-2 bg-[#0A0F1E] text-white py-4 text-sm font-semibold"
      >
        <Phone className="w-4 h-4" />
        Call Us
      </a>
      <button
        onClick={() => openWhatsApp()}
        className="flex-1 flex items-center justify-center gap-2 text-white py-4 text-sm font-semibold"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </button>
    </div>
  )
}
