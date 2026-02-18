
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const extendedFaqs = [
    ...FAQS,
    {
      question: "¿Por qué el Diseño de Sonrisa requiere valoración?",
      answer: "Cada rostro es único. Evaluamos tu mordida, salud de encías y deseos estéticos (como el uso de diamantes) para crear un presupuesto justo y exacto. No somos una clínica de volumen, somos una clínica de autor."
    },
    {
      question: "¿Qué pasa si vivo fuera de Colombia?",
      answer: "Tenemos un departamento de Turismo Dental VIP. Te ayudamos con el hospedaje en Tequendama, transporte privado y garantizamos terminar tu tratamiento en tiempos récord de 5 a 7 días hábiles."
    },
    {
      question: "¿El Mini Diseño de 1.8M es de buena calidad?",
      answer: "Absolutamente. Es nuestra puerta de entrada a la estética AVM. Se realiza en resinas de alta gama con técnica manual artística, ideal para quienes buscan mejorar bordes y color sin necesidad de carillas cerámicas."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Resolviendo dudas</span>
          <h2 className="text-4xl md:text-5xl text-[#0A1128] font-luxury">Claridad Total</h2>
          <p className="mt-4 text-gray-400 font-light">Queremos que llegues a tu cita con total seguridad.</p>
        </div>

        <div className="space-y-4">
          {extendedFaqs.map((faq, index) => (
            <div key={index} className="bg-[#F8F9FA] rounded-sm transition-all duration-300 overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-inset group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className={`text-sm md:text-base transition-colors font-bold uppercase tracking-widest ${openIndex === index ? 'text-[#D4AF37]' : 'text-[#0A1128]'}`}>
                  {faq.question}
                </span>
                <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-45 text-[#D4AF37]' : 'text-gray-300'}`}>
                  +
                </span>
              </button>
              <div 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100 py-6 px-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base border-t border-gray-200 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#0A1128] rounded-sm text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-2xl text-white font-luxury mb-6">¿Aún tienes una duda técnica?</h3>
          <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto">Nuestras doctoras pueden atender tus dudas iniciales por mensaje directo.</p>
          <a 
            href="https://wa.me/573173764936?text=Tengo%20una%20duda%20que%20no%20está%20en%20el%20FAQ" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 gold-gradient text-[#0A1128] font-bold text-xs uppercase tracking-[0.3em] rounded-sm hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
          >
            Consultar al Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
