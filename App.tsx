
import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Sustainability from './components/Sustainability';
import ProductShowcase from './components/ProductShowcase';
import LuxuryLines from './components/LuxuryLines';
import WhyCora from './components/WhyCora';
import WhyWearCora from './components/WhyWearCora';
import EditorialTestimonials from './components/EditorialTestimonials';
import DiscoverCora from './components/DiscoverCora';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fbf9f9] overflow-x-hidden antialiased font-sans text-[16px]">
      <NavBar />
      <Hero />
      <Sustainability />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Luxury Lines */}
      <LuxuryLines />

      {/* Why Cora */}
      <WhyCora />

      {/* Por Que Vestir Cora? */}
      <WhyWearCora />

      {/* Editorial Testimonials */}
      <EditorialTestimonials />

      {/* Descubra o Prazer de Vestir Cora */}
      <DiscoverCora />

      {/* Quote Section */}
      <section className="w-full bg-[#8b434f] py-32 flex justify-center items-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-5xl text-center flex flex-col items-center gap-12 z-10">
          <span className="material-symbols-outlined text-white text-5xl">auto_awesome</span>
          <h2 className="text-[#fbf9f9] text-4xl md:text-5xl lg:text-7xl font-display font-medium leading-tight tracking-tight">
            "Para profissionais que fazem da beleza sua assinatura"
          </h2>
          <div className="h-16 w-px bg-white/20"></div>
        </div>
      </section>

      {/* Footer Editorial */}
      <Footer />
    </div>
  );
};

export default App;
