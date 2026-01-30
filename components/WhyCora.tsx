
import React from 'react';

const WhyCora: React.FC = () => {
  const differentials = [
    {
      index: "01",
      title: "Tecnologia têxtil de ponta",
      desc: "Tecidos anti-odor com proteção UV50+ e infravermelho, que ativa micropartículas capazes de reduzir celulite e fadiga muscular com o uso contínuo."
    },
    {
      index: "02",
      title: "Modelagem funcional e refinada",
      desc: "Peças que oferecem estilo, conforto, caimento impecável e bolsos estrategicamente posicionados para o seu dia a dia profissional."
    },
    {
      index: "03",
      title: "Paleta de cores autoral",
      desc: "Muito além do preto e branco. Nossas cores exclusivas valorizam a identidade de cada ambiente de trabalho, conferindo sofisticação e estilo único."
    },
    {
      index: "04",
      title: "Facilidade no toque e no tempo",
      desc: "Não precisa passar e não desbota. Uma peça prática, que te acompanha com beleza e eficiência, dia após dia."
    },
    {
      index: "05",
      title: "Sustentabilidade com Propósito",
      desc: "Ao escolher a Cora, você contribui para a redução do descarte de lixo têxtil, colaborando com um futuro mais sustentável."
    }
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row min-h-screen bg-[#b8aaa1]">
      {/* Content Column */}
      <div className="w-full lg:w-1/2 text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <div className="max-w-xl">
          <span className="text-[14px] font-bold uppercase tracking-[0.5em] text-white/60 block mb-6">Manifesto Cora</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-12 tracking-tighter uppercase leading-[0.9]">
            O que nos torna <br /> <span className="italic font-normal">únicas.</span>
          </h2>

          <div className="mb-16 font-sans font-light text-[16px] lg:text-[18px] leading-relaxed opacity-80 border-l border-white/20 pl-6">
            <p>
              Na Cora, cada peça é fruto de uma curadoria criteriosa entre estética e funcionalidade. Desenvolvemos soluções que atendem às exigências da rotina com leveza e precisão.
            </p>
          </div>

          <div className="space-y-10">
            {differentials.map((item, idx) => (
              <div key={idx} className="flex items-start gap-8 group">
                <div className="flex flex-col items-center">
                  <span className="font-display text-xl italic opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    {item.index}
                  </span>
                  <div className="w-px h-8 bg-white/20 mt-2 group-hover:h-12 group-hover:bg-white transition-all duration-500"></div>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-sans font-bold text-[16px] lg:text-[16px] mb-3 tracking-[0.25em] uppercase transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-[16px] font-sans font-light leading-relaxed opacity-60 group-hover:opacity-90 transition-opacity">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="w-full lg:w-1/2 min-h-[600px] lg:min-h-screen relative overflow-hidden">
        <img
          alt="Profissional Cora em ambiente editorial"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] transition-all duration-[3000ms] hover:grayscale-0 hover:scale-105"
          src="https://cdn.shopify.com/s/files/1/0654/6138/7478/files/Mobile-Background2.webp"
        />
        <div className="absolute inset-0 bg-[#b8aaa1]/10 mix-blend-multiply"></div>
        {/* Subtle geometric overlay */}
        <div className="absolute top-12 right-12 w-24 h-24 border border-white/20 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default WhyCora;
