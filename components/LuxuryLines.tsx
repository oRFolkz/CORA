
import React from 'react';

const LuxuryLines: React.FC = () => {
  const techFeatures = [
    {
      img: "https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCBranco.webp",
      title: "Transparência Zero",
      desc: "Tecnologia de trama densa que garante segurança total, mesmo nos tons mais claros."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMLAzul.webp",
      title: "Efeito Beauty",
      desc: "Micropartículas que auxiliam na circulação e reduzem sinais de fadiga durante o uso."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMLBranco.webp",
      title: "Easy Care",
      desc: "Lave e use. Um tecido que não amassa e mantém o aspecto de novo por anos."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Header Section - More compact */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 lg:mb-16 gap-6 border-b border-gray-100 pb-8">
          <div className="max-w-3xl">
            <span className="text-[14px] font-bold uppercase tracking-[0.4em] text-[#8b434f] block mb-3">Linhas Top & Trend</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-[#171212] leading-[1.1] tracking-tight">
              Tecnologia têxtil que eleva sua <span className="italic font-normal">performance.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <span className="w-12 h-px bg-[#8b434f]/30"></span>
            <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-gray-400">Padrão Cora de Excelência</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {techFeatures.map((item, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-50 shadow-sm transition-shadow hover:shadow-xl">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
              </div>

              <div className="relative pl-5">
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100 group-hover:bg-[#8b434f] transition-all duration-500"></span>
                <h3 className="text-[16px] font-bold uppercase tracking-widest text-[#171212] mb-2 group-hover:text-[#8b434f] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[16px] font-sans font-light leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryLines;
