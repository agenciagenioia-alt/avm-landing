import React from 'react';
import { CAROUSEL_IMAGES, INSTAGRAM_URL } from '../constants';

/** Resultados Reales: una sola imagen fija antes/después. */
const BeforeAfter: React.FC = () => {
  const img = CAROUSEL_IMAGES[0];

  return (
    <section className="py-20 sm:py-28 bg-white" aria-labelledby="before-after-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-14 sm:mb-20">
          <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">The Evidence</span>
          <h2 id="before-after-heading" className="text-4xl sm:text-5xl md:text-6xl font-luxury text-[#0A1128] mb-4 italic">Resultados Reales</h2>
          <p className="text-[#0A1128]/90 max-w-2xl mx-auto text-base sm:text-lg font-light mb-2">
            Demostrando cómo quedan los pacientes después de la transformación AVM.
          </p>
          <p className="text-[#0A1128]/70 max-w-xl mx-auto text-sm font-light">
            Dra. Ángela Montoya — Arquitectura Dental · Dra. Zully Noriega — Armonización Facial.
          </p>
        </header>

        {/* Imagen a ancho completo para llenar el formato sin espacios vacíos */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="relative w-full overflow-hidden bg-[#0A1128]/5">
            <img
              src={img.src}
              alt={img.alt}
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover object-center min-h-[280px] sm:min-h-[360px] md:min-h-[420px]"
            />
          </div>
        </div>

        <div className="mt-16 sm:mt-20 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/573173764936?text=Vi%20los%20resultados%20y%20quiero%20dise%C3%B1ar%20mi%20nueva%20versi%C3%B3n%20en%20AVM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 sm:px-14 sm:py-6 border-2 border-[#0A1128] text-[#0A1128] text-[11px] font-bold uppercase tracking-[0.35em] hover:bg-[#0A1128] hover:text-[#D4AF37] transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
          >
            Diseñar mi Nueva Versión
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-5 sm:px-10 sm:py-6 bg-[#E91E8C] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#C2185B] transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:ring-offset-2 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Ver en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
