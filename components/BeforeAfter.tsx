import React, { useState, useCallback, useEffect } from 'react';
import { CAROUSEL_IMAGES } from '../constants';

/** Resultados Reales: carrusel con las 3 imágenes. Táctil y con flechas. */
const BeforeAfter: React.FC = () => {
  const [index, setIndex] = useState(0);
  const total = CAROUSEL_IMAGES.length;

  const go = useCallback((next: number) => {
    setIndex((i) => ((i + next) % total + total) % total);
  }, [total]);

  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go]);

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
              {CAROUSEL_IMAGES.map((img, i) => (
                <div
                  key={img.src}
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out"
                  style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? 'auto' : 'none' }}
                  aria-hidden={i !== index}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="max-w-full max-h-full w-auto h-full object-contain object-center"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0A1128]/80 text-[#D4AF37] flex items-center justify-center hover:bg-[#0A1128] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 transition-colors"
              aria-label="Imagen anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0A1128]/80 text-[#D4AF37] flex items-center justify-center hover:bg-[#0A1128] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 transition-colors"
              aria-label="Siguiente imagen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2" role="tablist" aria-label="Diapositivas del carrusel">
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir a imagen ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? 'bg-[#D4AF37] scale-110' : 'bg-white/60 hover:bg-white/80'}`}
                />
              ))}
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
