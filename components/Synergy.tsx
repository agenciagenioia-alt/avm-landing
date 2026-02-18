
import React from 'react';

const Synergy: React.FC = () => {
  return (
    <section id="sinergia" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://i.postimg.cc/2y620F9P/Diseno-sin-titulo-(3).png" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Dra. Ángela Montoya y Dra. Zully Noriega, equipo AVM"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#0A1128] p-12 text-white border-r-[8px] border-[#D4AF37] hidden md:block">
              <h4 className="font-luxury text-4xl mb-4 text-[#D4AF37]">The Synergy</h4>
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400">Scientific Artistry Team</p>
            </div>
          </div>

          <div className="space-y-10">
            <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.6em] uppercase block">Dra. Montoya & Dra. Noriega</span>
            <h2 className="text-6xl md:text-[6rem] font-luxury text-[#0A1128] leading-[0.9] italic">Sinergia <br /> Orofacial.</h2>
            <p className="text-xl text-gray-600 font-light italic leading-relaxed border-l-4 border-[#D4AF37] pl-8 max-w-xl">
              Unimos odontología de autor y medicina estética para armonizar tu rostro y sonrisa.
            </p>

            <div className="space-y-6 pt-4">
              <div className="border-l-2 border-[#D4AF37] pl-5">
                <h5 className="font-bold text-[#0A1128] text-sm uppercase tracking-wider mb-1">Dra. Ángela Montoya</h5>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Odontóloga, especialista en diseño de sonrisa y arquitectura dental. Bespoke Smile Design y carillas de autor.
                </p>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-5">
                <h5 className="font-bold text-[#0A1128] text-sm uppercase tracking-wider mb-1">Dra. Zully Noriega</h5>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Medicina estética y armonización facial. Perfilamiento, bioestimuladores y sinergia orofacial sin cirugía.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 pt-6">
              <div>
                <h5 className="font-black text-[11px] uppercase tracking-[0.3em] mb-2 text-[#0A1128]">Odontología</h5>
                <p className="text-xs text-gray-400">Bespoke Smile Design</p>
              </div>
              <div>
                <h5 className="font-black text-[11px] uppercase tracking-[0.3em] mb-2 text-[#0A1128]">Medicina</h5>
                <p className="text-xs text-gray-400">Facial Harmonization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synergy;
