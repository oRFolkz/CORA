
import React from 'react';

const WhyWearCora: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row bg-[#e3e1d2]">
      {/* Image Column */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative overflow-hidden group">
        <img
          alt="Detalhe Veste Vênus em branco"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
          src="https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMLBranco.webp"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000"></div>
        {/* Frame accent */}
        <div className="absolute inset-12 border border-white/20 pointer-events-none hidden lg:block"></div>
      </div>

      {/* Content Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0 relative">
        {/* Decorative element */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-[#8b434f]"></div>

        <div className="max-w-xl">
          <span className="text-[14px] font-bold uppercase tracking-[0.6em] text-[#8b434f] block mb-8">Elegância Singular</span>
          <h2 className="font-display text-[#171212] text-4xl md:text-5xl lg:text-6xl font-light mb-10 tracking-tighter uppercase leading-[0.9]">
            Por que vestir <br /> <span className="italic font-normal">Cora?</span>
          </h2>

          <div className="h-px w-24 bg-[#171212]/20 mb-12"></div>

          <p className="font-sans text-lg md:text-xl font-medium text-gray-800 mb-16 leading-relaxed border-l-[1px] border-[#8b434f]/30 pl-8">
            Porque você merece se sentir impecável em cada segundo da sua jornada.
          </p>

          <ul className="space-y-12">
            {[
              "Conforto e maciez que abraçam sua rotina com leveza.",
              "Durabilidade extrema e cores que permanecem vibrantes.",
              "Design que comunica autoridade, cuidado e sofisticação.",
              "Praticidade absoluta: tecidos que acompanham seu ritmo."
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-8 group">
                <span className="w-8 h-px bg-[#8b434f] opacity-40 group-hover:opacity-100 transition-all group-hover:w-12"></span>
                <span className="font-sans text-[16px] md:text-[17px] text-gray-700 font-light leading-relaxed group-hover:text-[#171212] transition-colors">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyWearCora;
