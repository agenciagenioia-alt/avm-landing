
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1128] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm border border-[#D4AF37]">
                <span className="text-[#D4AF37] font-luxury text-xl font-bold">A</span>
              </div>
              <span className="text-xl font-luxury tracking-widest text-white">AVM SMILE DESIGN</span>
            </div>
            <p className="text-gray-400 text-sm font-light max-w-sm leading-relaxed mb-8">
              Líderes en Sinergia Orofacial. Transformamos vidas a través de la arquitectura dental y la medicina estética de lujo en Cali, Colombia.
            </p>
          </div>

          <div>
             <h4 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Ubicación</h4>
             <div className="text-xs text-gray-400 space-y-2 font-light">
                <p>Tequendama, Santiago de Cali</p>
                <p>Cali, Valle del Cauca</p>
                <p>Calle 5A # 41-61, Local 104</p>
             </div>
          </div>

          <div>
             <h4 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Contacto Directo</h4>
             <div className="text-xs text-gray-400 space-y-4 font-light">
                <p>WhatsApp: +57 3173764936</p>
                <p>Email: <a href="mailto:avmsmiles@gmail.com" className="text-[#D4AF37] hover:underline">avmsmiles@gmail.com</a></p>
                <div className="flex space-x-6 pt-4">
                  <a href="https://www.instagram.com/odontologia_avm/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Instagram</span>
                  </a>
                </div>
             </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} AVM Arquitectura Facial. Todos los derechos reservados.</p>
          <div className="flex space-x-8">
            <a href="https://wa.me/573173764936?text=Hola%20AVM,%20solicito%20información%20sobre%20política%20de%20privacidad." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacidad</a>
            <a href="https://wa.me/573173764936?text=Hola%20AVM,%20solicito%20información%20sobre%20garantía%20de%20servicio." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Garantía de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
