import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1128]">
      {/* Imagen de portada: formato que se ajusta a la imagen sin recortar */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://i.postimg.cc/JzxhBC7k/1-(2).png"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-105"
          alt="Consultorio AVM — Estética de Autor en Cali"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-[#D4AF37]">Scientific Artistry | Cali, COL</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-[8rem] text-white font-luxury mb-8 leading-[0.85] tracking-tighter">
            Estética <br />
            <span className="italic text-[#D4AF37] font-light">de Autor.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 sm:mb-14 font-light tracking-wide max-w-2xl leading-relaxed">
            Arquitectura dental y medicina estética avanzada para quienes exigen la perfección como estándar.
          </p>

          <div className="mb-24">
            <a
              href="https://wa.me/573173764936?text=Hola%20AVM,%20quiero%20agendar%20mi%20valoración%20VIP%20en%20Cali.%20Diseñar%20mi%20nueva%20versión."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 sm:px-12 sm:py-6 bg-white text-[#0A1128] text-[11px] font-black uppercase tracking-[0.35em] rounded-sm hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all text-center shadow-xl active:scale-95 min-h-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0A1128]"
            >
              Agendar Valoración VIP en Cali
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
