import React from 'react';
import { CAROUSEL_IMAGES } from '../constants';

/** Resultados Reales: una sola imagen fija antes/después. */
const BeforeAfter: React.FC = () => {
  const img = CAROUSEL_IMAGES[0];

  return (
    <section className="py-20 sm:py-28 bg-white" aria-labelledby="before-after-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-14 sm:mb-20">
          <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">The Evidence</span>
          <h2 id="before-after-heading" className="text-4xl sm:text-5xl md:text-6xl font-luxury text-[#0A1128] mb-4 italic">Resultados Reales</h2>
          <p className="text-[#0A1128]/70 max-w-xl mx-auto text-sm font-light">
            Dra. Ángela Montoya — Arquitectura Dental · Dra. Zully Noriega — Armonización Facial.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden border border-[#0A1128]/10 shadow-xl bg-[#0A1128]/5">
            <div className="relative aspect-[4/3] flex items-center justify-center">
              <img
                src={img.src}
                alt={img.alt}
                loading="eager"
                decoding="async"
                className="max-w-full max-h-full w-auto h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <a
            href="https://wa.me/573173764936?text=Vi%20los%20resultados%20y%20quiero%20dise%C3%B1ar%20mi%20nueva%20versi%C3%B3n%20en%20AVM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 sm:px-14 sm:py-6 border-2 border-[#0A1128] text-[#0A1128] text-[11px] font-bold uppercase tracking-[0.35em] hover:bg-[#0A1128] hover:text-[#D4AF37] transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
          >
            Diseñar mi Nueva Versión
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
