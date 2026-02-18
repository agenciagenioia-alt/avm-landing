
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { id: "01", title: "Concierge", desc: "Análisis inicial remoto para pacientes globales." },
    { id: "02", title: "Blueprint", desc: "Escaneo 3D y simulación de arquitectura facial." },
    { id: "03", title: "Artistry", desc: "Ejecución clínica bajo protocolos de autor." },
    { id: "04", title: "Reveal", desc: "Entrega de tu nueva identidad estética." }
  ];

  return (
    <section className="py-32 text-white relative overflow-hidden">
      {/* Fondo mejorado: gradiente + textura sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#0f1a35] to-[#0A1128]" />
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)', backgroundSize: '32px 32px' }} aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.6em] uppercase mb-4 block">The Protocol</span>
          <h2 className="text-5xl md:text-7xl font-luxury italic mb-6">The Journey</h2>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">Pasos hacia la excelencia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="border-l border-white/10 pl-10 py-10 transition-all group-hover:border-[#D4AF37]">
                <span className="text-5xl font-luxury text-[#D4AF37]/20 group-hover:text-[#D4AF37] block mb-8 transition-colors italic">{step.id}</span>
                <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-4">{step.title}</h4>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
