
import React from 'react';

const MedicalTourism: React.FC = () => {
  return (
    <section id="turismo" className="py-24 bg-[#0A1128] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img src="https://picsum.photos/seed/cali/1200/1200" alt="" loading="lazy" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Medical Tourism</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-luxury text-white">
              Cali: El Epicentro del <br />
              <span className="italic text-[#D4AF37]">Bienestar de Lujo</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed font-light text-lg">
              AVM se encuentra en el exclusivo barrio <strong>Tequendama</strong>. Ofrecemos acompañamiento integral para pacientes que nos visitan desde USA, Europa y otras regiones de Colombia.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 border border-gray-800 rounded-sm bg-white/5 backdrop-blur-sm">
                <h4 className="text-[#D4AF37] font-bold mb-2">Traslados VIP</h4>
                <p className="text-xs text-gray-500">Recogida en aeropuerto y transporte a citas incluido.</p>
              </div>
              <div className="p-6 border border-gray-800 rounded-sm bg-white/5 backdrop-blur-sm">
                <h4 className="text-[#D4AF37] font-bold mb-2">Recovery Stay</h4>
                <p className="text-xs text-gray-500">Convenios con hoteles 5 estrellas cercanos para tu descanso.</p>
              </div>
              <div className="p-6 border border-gray-800 rounded-sm bg-white/5 backdrop-blur-sm">
                <h4 className="text-[#D4AF37] font-bold mb-2">Asistente Personal</h4>
                <p className="text-xs text-gray-500">Atención 24/7 vía WhatsApp durante tu estadía.</p>
              </div>
              <div className="p-6 border border-gray-800 rounded-sm bg-white/5 backdrop-blur-sm">
                <h4 className="text-[#D4AF37] font-bold mb-2">Clima Ideal</h4>
                <p className="text-xs text-gray-500">Disfruta de la brisa de Cali mientras transformas tu vida.</p>
              </div>
            </div>

            <a
              href="https://wa.me/573173764936?text=Hola%20AVM,%20quiero%20planear%20mi%20viaje%20médico%20VIP%20a%20Cali%20(Tequendama)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-12 px-10 py-4 gold-gradient text-[#0A1128] font-bold text-xs tracking-widest uppercase rounded-sm hover:scale-105 transition-transform shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
            >
              Planear mi Viaje Médico
            </a>
          </div>

          <div className="relative group">
            <div className="aspect-square bg-white/5 rounded-lg border border-[#D4AF37]/30 flex items-center justify-center p-4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=85&w=800"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]" aria-hidden></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37]" aria-hidden></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTourism;
