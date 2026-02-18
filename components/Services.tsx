import React from 'react';
import { SERVICES } from '../constants';

const WHATSAPP_BASE = 'https://wa.me/573173764936';

const Services: React.FC = () => {
  const getWhatsAppLink = (message: string) =>
    `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

  return (
    <section id="protocolos" className="py-16 sm:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.25em] uppercase mb-4 block">Menú de Transformación</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-luxury text-[#0A1128] mb-4">Precios y Servicios</h2>
          <p className="max-w-xl mx-auto text-[#0A1128]/70 text-sm font-light">
            Desde armonización orofacial hasta sueroterapia VIP. Tu deseo es nuestra arquitectura.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#0A1128]/5 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-[#0A1128]/30 via-[#0A1128]/20 to-[#D4AF37]/25">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full w-auto h-full object-contain grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                />
                <div className={`absolute left-4 right-4 flex flex-wrap gap-2 ${service.id === 'full-smile' ? 'top-20' : 'top-14'}`}>
                  <span className="px-3 py-1.5 bg-[#0A1128] text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider rounded-sm">
                    {service.price}
                  </span>
                  {service.priceUsd && (
                    <span className="px-3 py-1.5 bg-[#0A1128]/90 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {service.priceUsd}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-luxury text-[#0A1128] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#0A1128]/70 mb-5 leading-relaxed flex-grow font-light">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-[10px] font-semibold text-[#0A1128]/60 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 shrink-0" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 sm:py-5 text-center border-2 border-[#0A1128] text-[#0A1128] text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#0A1128] hover:text-[#D4AF37] transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 min-h-[48px] flex items-center justify-center"
                >
                  {service.ctaText}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-10 text-[10px] text-[#0A1128]/50 uppercase tracking-widest font-semibold">
          Precios base. Valoración personalizada en Tequendama, Cali.
        </p>
      </div>
    </section>
  );
};

export default Services;
