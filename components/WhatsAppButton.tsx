
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end space-y-4">
      <div className="bg-white px-6 py-3 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-100 hidden md:flex items-center space-x-3 animate-bounce hover:scale-105 transition-transform cursor-pointer">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <a 
          href="https://wa.me/573173764936?text=Hola%20AVM,%20deseo%20agendar%20mi%20valoración%20ahora"
          className="text-[10px] font-bold text-[#0A1128] uppercase tracking-[0.2em]"
        >
          Agendar Valoración Inmediata
        </a>
      </div>
      <a 
        href="https://wa.me/573173764936" 
        target="_blank"
        className="w-16 h-16 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 border-4 border-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.56.913 3.352 1.395 5.177 1.396 5.446 0 9.876-4.43 9.879-9.877.001-2.64-.1.025-2.074-1.99-4.147-2.091-2.069-4.87-3.212-7.512-3.212-5.448 0-9.88 4.43-9.883 9.878-.001 1.938.565 3.828 1.633 5.429l-1.071 3.909 4.007-1.052z"/>
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
