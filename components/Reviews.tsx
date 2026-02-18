import React from 'react';
import { REVIEWS } from '../constants';

/** Sección de reseñas en grid estático (bloques fijos). */
const Reviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0A1128] border-t border-[#D4AF37]/20" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="reviews-heading" className="text-center text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
          Lo que dicen de nosotros
        </h2>
        <p className="text-center text-white/80 text-sm font-light mb-12 max-w-xl mx-auto">
          Pacientes de Colombia, Panamá, USA, Europa y más.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev, i) => (
            <blockquote
              key={`${rev.city}-${i}`}
              className="bg-white/5 border border-[#D4AF37]/20 rounded-lg p-5 sm:p-6 text-left"
            >
              <cite className="not-italic">
                <span className="block text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider mb-2">
                  {rev.city}
                </span>
                <p className="text-white/95 text-sm font-light leading-relaxed">
                  "{rev.text}"
                </p>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
