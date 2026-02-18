import React, { useState, useCallback, useEffect } from 'react';
import { CAROUSEL_GALLERY_IMAGES, INSTAGRAM_URL } from '../constants';

/** Carrusel de 3 imágenes: transformaciones reales + CTA Instagram. */
const GalleryCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const total = CAROUSEL_GALLERY_IMAGES.length;

  const go = useCallback((next: number) => {
    setIndex((i) => ((i + next) % total + total) % total);
  }, [total]);

  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go]);

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="gallery-carousel-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-12 sm:mb-16">
          <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Transformaciones Reales</span>
          <h2 id="gallery-carousel-heading" className="text-3xl sm:text-4xl md:text-5xl font-luxury text-[#0A1128] mb-4">
            Tu mejor versión, <span className="italic text-[#0A1128]/90">hecha realidad</span>
          </h2>
          <p className="text-[#0A1128]/80 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Así quedan nuestros pacientes después de la transformación AVM. Carillas, armonización y sonrisas de autor.
          </p>
        </header>
        <div className="relative rounded-lg overflow-hidden border border-[#0A1128]/10 shadow-xl bg-[#0A1128]/5">
          {/* El contenedor adapta su proporción a la imagen activa (4:5, 9:16, etc.), no al revés */}
          <div
            className="relative w-full flex items-center justify-center transition-[aspect-ratio] duration-300 ease-out"
            style={{ aspectRatio: CAROUSEL_GALLERY_IMAGES[index].aspectRatio }}
          >
            {CAROUSEL_GALLERY_IMAGES.map((img, i) => (
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
                  className="max-w-full max-h-full w-full h-full object-contain object-center"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0A1128]/80 text-[#D4AF37] flex items-center justify-center hover:bg-[#0A1128] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 transition-colors"
            aria-label="Imagen anterior"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0A1128]/80 text-[#D4AF37] flex items-center justify-center hover:bg-[#0A1128] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 transition-colors"
            aria-label="Siguiente imagen"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2" role="tablist" aria-label="Diapositivas del carrusel">
            {CAROUSEL_GALLERY_IMAGES.map((_, i) => (
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
        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 sm:px-12 sm:py-6 bg-[#E91E8C] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#C2185B] transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:ring-offset-2 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
