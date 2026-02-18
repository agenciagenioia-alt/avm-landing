
export interface ServiceCard {
  id: string;
  title: string;
  /** Precio en COP (ej. "$5.500.000") o texto tipo "Precio personalizado" */
  price: string;
  /** Precio en USD (ej. "USD 1.310"). Opcional si no aplica. */
  priceUsd?: string;
  description: string;
  features: string[];
  ctaText: string;
  image: string;
  /** Mensaje predeterminado para WhatsApp (único por servicio) */
  whatsappMessage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
