
import React from 'react';

const DiscoverCora: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen w-full overflow-hidden bg-[#e3e1d2]">
      {/* Text Column - Sharp Luxury Design */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
        <div className="max-w-xl">
          {/* Header */}
          <span className="text-[14px] font-bold uppercase tracking-[0.5em] text-[#8b434f] block mb-6">Processo de Experiência</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[0.95] mb-16 tracking-tighter text-[#171212] uppercase">
            DESCUBRA O PRAZER <br /> DE VESTIR <span className="text-[#8b434f] italic font-normal">CORA</span>
          </h2>

          <div className="w-16 h-px bg-[#171212]/20 mb-16"></div>

          {/* Steps List - Refined Typography */}
          <div className="space-y-10 mb-16">
            {[
              { icon: 'ph-thin ph-hand-tap', text: 'Explore nossos modelos e escolha suas cores preferidas.' },
              { icon: 'ph-thin ph-needle', text: <>Personalize com o bordado da sua logomarca. <span className="opacity-50 text-[14px] font-bold uppercase tracking-widest block mt-1">(Opcional)</span></> },
              { icon: 'ph-thin ph-chat-circle-dots', text: 'Fale com nossa equipe via WhatsApp para finalizar seu pedido.' },
              { icon: 'ph-thin ph-truck', text: 'Receba em casa com todo o cuidado e atenção que você merece.' }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-8 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#171212]/10 rounded-full group-hover:border-[#8b434f] group-hover:bg-[#8b434f]/5 transition-all duration-500">
                  <i className={`${step.icon} text-2xl text-[#171212]/70 group-hover:text-[#8b434f]`}></i>
                </div>
                <div className="pt-2">
                  <p className="text-[16px] lg:text-[17px] font-sans font-light leading-relaxed text-[#5c5555] group-hover:text-[#171212] transition-colors">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-[#171212]/10 mb-10">
            <p className="text-[#8b434f] font-bold text-[14px] tracking-[0.3em] uppercase">
              Cores extras sob demanda pelo WhatsApp
            </p>
          </div>

          {/* CTA Button - Sharp & High Contrast */}
          <a
            className="inline-flex items-center gap-6 bg-[#8b434f] text-white px-10 py-6 rounded-none shadow-xl hover:bg-[#703640] transition-all duration-500 group w-full sm:w-auto justify-center"
            href="https://wa.me/seunumerodeatendimento"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ph-fill ph-whatsapp-logo text-2xl transition-transform group-hover:rotate-12"></i>
            <span className="font-sans font-bold tracking-[0.3em] text-[14px] uppercase">Falar com um especialista</span>
          </a>
        </div>
      </div>

      {/* Image Column - Editorial Styling */}
      <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full overflow-hidden bg-[#d6d3c1]">
        <img
          alt="Mulher elegante vestindo Cora"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.2] transition-transform duration-[6000ms] hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB28twYKeOoy3qQ7_C8zN6aKP-vmydokBr2EEp1x2ChMSzVxse4aP44mfr4mdAe840_VT_0oB73BGVvy88rzli60vlRXT1tgJsHHKdPirjgrFyhliNUnN66-FoDNLjOWGzeyQI8vft9nu29PCqyEgfHV0MH8nHMnPGqRYsbV6mViT5yVHllN1oad_kuwMx4eozuvzVW0xLs1ppABarrxQ6arFzOI8LCBmyDgtEaXzMzAJuHbr4g0GTijba6k4cek6hFDhIvQ4ye2kle"
        />
        <div className="absolute inset-0 bg-black/5"></div>
        {/* Subtle Frame */}
        <div className="absolute inset-10 border border-white/20 pointer-events-none hidden lg:block"></div>
      </div>
    </section>
  );
};

export default DiscoverCora;
