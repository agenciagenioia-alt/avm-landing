
import React, { useState } from 'react';
import { getRecommendation } from '../services/gemini';

const AIRecommender: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;
    setLoading(true);
    try {
      const recommendation = await getRecommendation(goal);
      setResult(recommendation);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#F5F3EF] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0A1128] via-[#132042] to-[#1a2744] rounded-xl shadow-[0_25px_80px_rgba(10,17,40,0.2)] relative overflow-hidden border border-[#D4AF37]/25">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
            
            <div className="relative z-10 p-10 md:p-20">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 mb-4 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/20">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-ping"></span>
                      <span className="text-[#D4AF37] text-[9px] font-black tracking-[0.4em] uppercase">AVM Intelligent Closer</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-luxury text-white mb-6 italic">Tu Protocolo Maestro</h2>
                    <p className="text-gray-400 text-xs font-light max-w-xl mx-auto tracking-widest uppercase leading-loose">Asesoría digital basada en sinergia clínica real.</p>
                </div>

                {!result ? (
                    <form onSubmit={handleConsult} className="space-y-8 max-w-2xl mx-auto">
                        <div className="relative group">
                            <textarea
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                                placeholder="Ej: Quiero una sonrisa perfecta y rejuvenecer mi rostro de forma natural..."
                                className="w-full h-44 bg-white/5 border border-white/10 rounded-lg p-8 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37] transition-all resize-none text-lg font-light shadow-inner"
                            ></textarea>
                            <div className="absolute bottom-4 right-6 text-[9px] text-gray-500 uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-opacity">Sistema de Análisis Biométrico Activo</div>
                        </div>
                        <button 
                            disabled={loading || !goal.trim()}
                            className="w-full py-6 gold-gradient text-[#0A1128] font-black text-xs tracking-[0.5em] uppercase rounded-lg hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all disabled:opacity-50 flex items-center justify-center space-x-4"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-[#0A1128] border-t-transparent rounded-full animate-spin"></div>
                                    <span>Calculando Protocolo...</span>
                                </>
                            ) : 'Revelar Plan de Transformación'}
                        </button>
                    </form>
                ) : (
                    <div className="animate-fade-in space-y-10">
                        <div className="bg-white/5 p-8 border-l-4 border-[#D4AF37] rounded-r-lg">
                           <h4 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Análisis de Necesidad:</h4>
                           <p className="text-white text-xl font-light italic leading-relaxed">"{result.summary}"</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform"></div>
                                <span className="text-[#D4AF37] text-[9px] font-black uppercase tracking-widest block mb-2">Tratamiento Base:</span>
                                <h4 className="text-xl text-white font-luxury mb-4">{result.mainTreatment}</h4>
                            </div>
                            <div className="p-8 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30 relative overflow-hidden group">
                                <span className="text-[#D4AF37] text-[9px] font-black uppercase tracking-widest block mb-2">Recomendación Sinergia (Upsell):</span>
                                <h4 className="text-xl text-white font-luxury mb-4">{result.upsellCombo}</h4>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white rounded-lg shadow-2xl">
                            <div className="mb-8 md:mb-0 text-center md:text-left">
                                <span className="text-gray-400 text-[9px] uppercase font-black block mb-2 tracking-[0.2em]">Inversión Estimada Total</span>
                                <span className="text-[#0A1128] text-4xl font-luxury font-bold tracking-tighter">{result.totalInvestment}</span>
                                <p className="text-green-600 text-[10px] mt-2 font-black uppercase tracking-widest">Incluye Valoración Prioritaria</p>
                            </div>
                            <a 
                                href={`https://wa.me/573173764936?text=${encodeURIComponent(result.whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-14 py-6 bg-[#0A1128] text-[#D4AF37] text-[11px] font-black uppercase tracking-[0.3em] rounded-lg hover:scale-105 transition-all shadow-xl text-center"
                            >
                                Agendar Cupo en Tequendama
                            </a>
                        </div>
                        
                        <div className="text-center">
                            <button onClick={() => setResult(null)} className="text-gray-600 text-[9px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors">← Nueva Consulta</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecommender;
