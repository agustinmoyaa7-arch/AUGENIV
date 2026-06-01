export const WHATSAPP_NUMBER = "5493541741122"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function buildWhatsAppLink(message?: string) {
  if (!message) return WHATSAPP_URL
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
