
import { ServiceCard, FAQItem } from './types';

export const REVIEWS = [
  { city: "Panamá City", text: "La mejor inversión de mi vida. El trato VIP y el resultado del diseño es impecable." },
  { city: "Manhattan, NY", text: "Elite service in Cali. The porcelain veneers are natural and perfect. Highly recommend." },
  { city: "Brickell, Miami", text: "Transformación total en 5 días. Dras. Montoya y Noriega son artistas." },
  { city: "Madrid, ES", text: "Calidad superior a lo que vi en Europa. El protocolo de sinergia es increíble." },
  { city: "Bogotá, COL", text: "Viajo siempre a Cali por AVM. No confío mi rostro a nadie más." },
  { city: "Medellín, COL", text: "El diseño de sonrisa superó mis expectativas. Naturalidad al 100%." },
  { city: "London, UK", text: "World-class dentistry. Sophisticated and very professional team." },
  { city: "Toronto, CA", text: "The medical tourism package made everything so easy. My new smile is stunning." },
  { city: "Quito, EC", text: "Atención de lujo desde el primer mensaje. Los mejores en armonización facial." },
  { city: "Cali, COL", text: "Orgullo local. La mejor clínica estética del país está en el Tequendama." },
  { city: "San José, CR", text: "Puntualidad y resultados asombrosos. Mi perfilamiento facial quedó perfecto." },
  { city: "Los Angeles, CA", text: "Hollywood smile achieved in Cali! Unbelievable precision and art." },
  { city: "Barranquilla, COL", text: "Profesionalismo y calidez. Mi sonrisa quedó exactamente como la soñé." },
  { city: "Panamá", text: "Vale cada peso. El equipo AVM y el resultado superan cualquier clínica de la región." },
  { city: "Brooklyn, NY", text: "Flew to Cali for my smile. Best decision. The VIP protocol is seamless." },
  { city: "Coral Gables, Miami", text: "Armonización facial y diseño de sonrisa en una sola experiencia. Insuperable." },
  { city: "Cartagena, COL", text: "De Cartagena a Cali solo por AVM. La confianza que dan las doctoras es única." },
  { city: "Houston, TX", text: "Medical tourism done right. Five days and I left with a new smile and new confidence." },
];

/** Imagen fija de Resultados Reales (antes/después). */
export const CAROUSEL_IMAGES: { src: string; alt: string }[] = [
  { src: 'https://i.postimg.cc/hjwmrxJR/Disen-o-sin-ti-tulo-(1).png', alt: 'Resultado AVM — Armonización Orofacial' },
];

/** Las 3 imágenes del carrusel después de Servicios. El formato del contenedor se adapta a cada imagen (aspectRatio). */
export const CAROUSEL_GALLERY_IMAGES: { src: string; alt: string; aspectRatio: string }[] = [
  { src: 'https://i.postimg.cc/ZKy8fTz2/1.png', alt: 'AVM — Resultados y experiencia', aspectRatio: '4/5' },
  { src: 'https://i.postimg.cc/Z0kdkdhq/2.png', alt: 'AVM — Estética de autor', aspectRatio: '9/16' },
  { src: 'https://i.postimg.cc/XNtHN1jn/3.png', alt: 'AVM — Sonrisa y armonía', aspectRatio: '4/5' },
];

/** Tasa aproximada COP → USD para referencia (4.200 COP ≈ 1 USD). */
export const SERVICES: ServiceCard[] = [
  {
    id: 'armonizacion-orofacial',
    title: 'Armonización Orofacial',
    price: '$5.500.000 COP',
    priceUsd: 'USD 1.310',
    description: 'Sinergia entre sonrisa y rostro. Perfilamiento mandibular, malar y mentón. Dra. Zully Noriega.',
    features: ['Sin Cirugía', 'Bioestimulación', 'Equilibrio Total'],
    ctaText: 'Diseñar mi Nueva Versión',
    image: 'https://i.postimg.cc/hjwmrxJR/Disen-o-sin-ti-tulo-(1).png',
    whatsappMessage: 'Hola AVM, me interesa Armonización Orofacial. Quisiera agendar valoración VIP en Cali.',
  },
  {
    id: 'bioestimuladores',
    title: 'Bioestimuladores de Colágeno',
    price: '$2.540.000 COP',
    priceUsd: 'USD 605',
    description: 'Regeneración de colágeno natural. Piel firme, tensa y luminosa. Rejuvenecimiento de larga duración.',
    features: ['Hidroxiapatita de Calcio', 'Efecto Tensor', 'Larga Duración'],
    ctaText: 'Agendar Valoración VIP en Cali',
    image: 'https://i.postimg.cc/jjSM5GBv/Disen-o-sin-ti-tulo-(2).png',
    whatsappMessage: 'Hola AVM, me interesan los Bioestimuladores de Colágeno. Quisiera agendar valoración en Tequendama.',
  },
  {
    id: 'toxina-labios',
    title: 'Toxina Botulínica & Labios',
    price: '$1.140.000 COP',
    priceUsd: 'USD 271',
    description: 'Suavizado de líneas de expresión y perfilamiento labial. Resultados naturales y armónicos.',
    features: ['Técnica de Autor', 'Resultado Natural', 'Cali Tequendama'],
    ctaText: 'Agendar Valoración VIP en Cali',
    image: 'https://i.postimg.cc/9fsyhK2p/Disen-o-sin-ti-tulo-(3).png',
    whatsappMessage: 'Hola AVM, me interesa Toxina Botulínica y Labios. Quisiera agendar valoración VIP en Cali.',
  },
  {
    id: 'exosomas',
    title: 'Regeneración Celular (Exosomas)',
    price: '$780.000 COP',
    priceUsd: 'USD 186',
    description: 'Medicina regenerativa de vanguardia. Reparación y luminosidad desde el interior.',
    features: ['Tecnología Avanzada', 'Piel Radiante', 'Protocolo AVM'],
    ctaText: 'Agendar Valoración VIP en Cali',
    image: 'https://i.postimg.cc/15RnLs6s/Disen-o-sin-ti-tulo-(4).png',
    whatsappMessage: 'Hola AVM, me interesa Regeneración Celular (Exosomas). Quisiera agendar valoración.',
  },
  {
    id: 'sueroterapia-vip',
    title: 'Sueroterapia VIP',
    price: '$400.000 COP',
    priceUsd: 'USD 95',
    description: 'Hidratación profunda y vitaminas. El complemento premium para tu piel.',
    features: ['Hidratación Intensa', 'Vitaminas y Minerales', 'Sesión VIP'],
    ctaText: 'Agendar Valoración VIP en Cali',
    image: 'https://i.postimg.cc/C1H5QQxY/Disen-o-sin-ti-tulo-(5).png',
    whatsappMessage: 'Hola AVM, me interesa Sueroterapia VIP. Quisiera agendar una sesión en Cali.',
  },
  {
    id: 'full-smile',
    title: 'Diseño de Sonrisa AVM (Bespoke)',
    price: 'Valoración Especializada',
    description: 'Arquitectura dental total. Carillas cerámicas. Personalización extrema.',
    features: ['Diseño Digital', 'Garantía Premium', 'New Smile in 5 Days'],
    ctaText: 'Diseñar mi Sonrisa',
    image: 'https://i.postimg.cc/hjr4rQ2G/Disen-o-sin-ti-tulo-(6).png',
    whatsappMessage: 'Hola AVM, me interesa el Diseño de Sonrisa AVM (Bespoke). Quisiera agendar valoración especializada.',
  },
  {
    id: 'mini-diseno-sonrisa',
    title: 'Mini Diseño de Sonrisa',
    price: '$1.800.000 COP',
    priceUsd: 'USD 429',
    description: 'Transformación focal con resultados naturales. Ideal para retoques de alta precisión.',
    features: ['Resultado Natural', 'Tiempo Reducido', 'Precio Accesible'],
    ctaText: 'Agendar Valoración VIP en Cali',
    image: 'https://i.postimg.cc/rp282Nbp/Disen-o-sin-ti-tulo-(7).png',
    whatsappMessage: 'Hola AVM, me interesa el Mini Diseño de Sonrisa. Quisiera agendar valoración en Cali.',
  },
  {
    id: 'diamantes-dientes',
    title: 'Diamantes en los Dientes',
    price: 'Precio personalizado',
    description: 'Cada diamante se coloca de forma personalizada. Detalle único y exclusivo para tu sonrisa.',
    features: ['Personalizado', 'Exclusivo', 'Consulta sin compromiso'],
    ctaText: 'Consultar Diamantes',
    image: 'https://i.postimg.cc/L58yqGqg/Disen-o-sin-ti-tulo-(8).png',
    whatsappMessage: 'Hola AVM, me interesan los diamantes en los dientes. Quisiera información personalizada.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Dónde están ubicados?",
    answer: "Estamos en el exclusivo sector de Tequendama, Cali. Calle 5A # 41-61, Local 104."
  },
  {
    question: "¿Tienen paquetes para extranjeros?",
    answer: "Sí, nuestro programa de Turismo Dental VIP incluye traslados, hospedaje de lujo y tratamiento garantizado en 5-7 días."
  },
  {
    question: "¿Qué garantía tienen los tratamientos?",
    answer: "Nuestros diseños de sonrisa cuentan con una garantía estructural y estética de hasta 10 años, respaldada por nuestro laboratorio digital."
  },
  {
    question: "¿Qué debo llevar a mi primera valoración?",
    answer: "Solo tu documento de identidad. Si tienes radiografías o historial reciente, tráelos. Te haremos un análisis completo en la cita."
  },
  {
    question: "¿Cuánto tarda la valoración VIP?",
    answer: "Entre 45 y 60 minutos. Incluye revisión, fotos, y un plan personalizado. Sin compromiso."
  },
  {
    question: "¿Puedo financiar el tratamiento?",
    answer: "Sí. Trabajamos con opciones de pago en cuotas. En la valoración te presentamos el plan de inversión a tu medida."
  },
  {
    question: "¿Qué incluye el Turismo Dental VIP?",
    answer: "Recogida en aeropuerto, traslados a citas, coordinación de hospedaje en Tequendama, asistente vía WhatsApp 24/7 y garantía de terminar en 5-7 días hábiles."
  },
  {
    question: "¿Cómo prepararme para diseño de sonrisa?",
    answer: "Llega con la boca limpia y sin restos de comida. Evita maquillaje labial fuerte si vamos a tomar fotos. La valoración no duele."
  },
  {
    question: "¿Hacen armonización facial el mismo día que dental?",
    answer: "Depende del protocolo. Nuestras doctoras coordinan la secuencia ideal para tu caso en la valoración."
  }
];
