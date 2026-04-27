export const WHATSAPP_PHONE = '5511911387063';

export function buildWhatsAppUrl(message: string): string {
	return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
