
import React from 'react';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Synergy from './components/Synergy';
import Services from './components/Services';
import GalleryCarousel from './components/GalleryCarousel';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import MedicalTourism from './components/MedicalTourism';
import FAQ from './components/FAQ';
import MiniBlog from './components/MiniBlog';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#FDFDFD]">
      <a href="#main" className="sr-only">
        Saltar al contenido
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Synergy />
        <BeforeAfter />
        <Services />
        <GalleryCarousel />
        <Process />
        <MedicalTourism />
        <FAQ />
        <MiniBlog />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
