
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full lg:h-[85vh] flex flex-col lg:flex-row overflow-hidden bg-[#e3e1d2] mt-[80px] border-b border-[#171212]/5">
      {/* Content Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 lg:py-0">
        <div className="max-w-xl w-full">
          {/* Logo Interna - Sharp Luxury Update (Increased Size) */}
          <div className="mb-12 lg:mb-16">
            <img
              src="https://cdn.shopify.com/s/files/1/0654/6138/7478/files/UNICA-PRINCIPAL.webp"
              alt="Unica Logo"
              className="h-16 lg:h-24 w-auto object-contain"
            />
          </div>

          <div className="space-y-6 lg:space-y-8">
            <h1 className="font-display text-[#171212] text-4xl md:text-5xl lg:text-[68px] leading-[0.95] tracking-tighter uppercase font-light">
              TRABALHE COM <br />
              ESTILO. <br />
              VISTA-SE COM <br />
              <span className="text-[#8b434f]">CORA</span>
            </h1>

            <div className="w-12 h-px bg-[#171212]/20"></div>

            <p className="text-[#5c5555] font-sans text-[16px] lg:text-[15px] leading-relaxed max-w-sm opacity-70">
              Com modelagens autorais, tecidos tecnológicos e um toque de exclusividade, nossas peças foram pensadas para profissionais que fazem da beleza sua assinatura.
            </p>

            <div className="pt-6 border-t border-[#171212]/10 w-fit">
              <p className="text-[#8b434f] text-[14px] font-bold tracking-[0.4em] uppercase font-sans">
                BELEZA • CONFORTO • PRATICIDADE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden">
        <img
          src="https://cdn.shopify.com/s/files/1/0654/6138/7478/files/Background-hero-mobile.webp"
          alt="Modelo Cora"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/[0.02]"></div>
      </div>
    </section>
  );
};

export default Hero;
