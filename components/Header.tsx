import React, { useState } from 'react';

const NAV_LINKS = [
  { href: '#protocolos', label: 'Menú' },
  { href: '#sinergia', label: 'Sinergia' },
  { href: '#turismo', label: 'Internacional' },
  { href: '#faq', label: 'FAQ' },
];

const WHATSAPP_CTA = 'https://wa.me/573173764936?text=' + encodeURIComponent('Hola AVM, quiero agendar valoración VIP en Cali.');

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-[#0A1128]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 rounded" aria-label="AVM Smile Design inicio">
          <img src="https://i.postimg.cc/vTxyPpdx/2.png" alt="" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0A1128]">AVM SMILE DESIGN</span>
            <span className="text-[9px] sm:text-[10px] text-[#0A1128] font-medium tracking-wider">Cali, Colombia</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-wider text-[#0A1128] uppercase">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 rounded">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-4 py-2.5 sm:px-6 bg-[#0A1128] text-[#D4AF37] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity min-h-[40px] items-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
          >
            Agendar
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1 rounded-md border border-[#0A1128]/15 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={`block w-4 h-0.5 bg-[#0A1128] transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-4 h-0.5 bg-[#0A1128] transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-4 h-0.5 bg-[#0A1128] transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden border-t border-[#0A1128]/08 bg-white ${open ? 'block' : 'hidden'}`}
        aria-hidden={!open}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[#0A1128] text-sm font-semibold uppercase tracking-wider hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-inset rounded"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_CTA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 py-3 text-center bg-[#0A1128] text-[#D4AF37] text-xs font-bold uppercase tracking-wider rounded-sm"
          >
            Agendar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
