import React, { useState, useCallback, useEffect } from 'react';
import { CAROUSEL_GALLERY_IMAGES } from '../constants';

/** Carrusel de 3 imágenes después de Servicios. */
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
        <h2 id="gallery-carousel-heading" className="sr-only">Galería AVM</h2>
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
      </div>
    </section>
  );
};

export default GalleryCarousel;
