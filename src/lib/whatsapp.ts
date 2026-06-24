export function openWhatsApp(data: { name: string; phone: string; email?: string; service?: string }) {
  const msg = `Hello Versa Digital,%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email || 'N/A'}%0A%0AI am interested in: ${data.service || 'Digital Marketing'}%0A%0APlease contact me.`
  window.open(`https://wa.me/918891129111?text=${msg}`, '_blank')
}
