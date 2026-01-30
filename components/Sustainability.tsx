
import React from 'react';

const Sustainability: React.FC = () => {
  const imageUrl = "https://cdn.shopify.com/s/files/1/0654/6138/7478/files/Cabeleireiro.webp";

  return (
    <section className="relative w-full flex flex-col lg:block bg-white overflow-hidden">
      {/* Text Container - Overlay on Desktop, Top on Mobile */}
      <div className="w-full lg:absolute lg:inset-0 lg:z-20 lg:flex lg:items-center lg:justify-end lg:px-20 py-16 lg:py-0">
        <div className="max-w-xl mx-auto lg:mx-0 w-[90%] md:w-full bg-white lg:bg-white/95 lg:backdrop-blur-md p-8 lg:p-14 lg:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-l-0 lg:border-l-[1px] lg:border-[#8b434f]">
          <span className="text-[14px] font-bold uppercase tracking-[0.5em] text-[#8b434f] block mb-4">Inovação Responsável</span>
          <h2 className="text-[#171212] text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight uppercase mb-8 leading-tight">
            Tecnologia & <br className="hidden lg:block" /> <span className="italic">Sustentabilidade</span>
          </h2>

          <p className="text-[#5c5555] font-sans text-lg leading-relaxed mb-10 font-light">
            Nossas peças são produzidas com <span className="text-[#171212] font-medium border-b border-[#8b434f]/30">baixo consumo de água</span> e tecnologia anti-odor, garantindo durabilidade extrema.
          </p>

          <ul className="flex flex-col gap-6 mb-12">
            {[
              'Certificações internacionais Oeko-Tex Standard 100.',
              'Controle rigoroso de emissões de CO2 na origem.',
              'Fibras que se decompõem em apenas 6 semanas.'
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-5 group">
                <span className="w-6 h-px bg-[#8b434f]/40 flex-shrink-0 transition-all group-hover:w-10 group-hover:bg-[#8b434f]"></span>
                <span className="text-[#171212] font-sans text-[16px] font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-gray-100">
            <p className="font-display text-[#8b434f] text-2xl font-light leading-tight italic">
              "Um compromisso com o futuro."
            </p>
            <p className="font-sans text-[#5c5555] mt-4 text-[16px] leading-relaxed font-light tracking-wide">
              Ao escolher a Cora, você investe em peças longevas que respeitam o meio ambiente em todo o seu ciclo de vida.
            </p>
          </div>
        </div>
      </div>

      {/* Image Container - Below text on Mobile, Full background on Desktop */}
      <div
        className="w-full h-[450px] md:h-[600px] lg:h-[900px] bg-cover bg-center lg:bg-fixed relative"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/5 lg:bg-black/10"></div>
      </div>
    </section>
  );
};

export default Sustainability;
