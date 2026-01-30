
import React from 'react';

const LuxuryLines: React.FC = () => {
  const techFeatures = [
    {
      img: "https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCBranco.webp",
      title: "Transparência Zero",
      desc: "Zero transparência até mesmo em cores claras, garantindo total segurança."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMLBranco.webp",
      title: "Redução de Medidas",
      desc: "Reduz sinais da celulite com uso contínuo graças à tecnologia Emana."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCBranco.webp",
      title: "Easy Care",
      desc: "Economize tempo: não é preciso passar, sempre impecável."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMLAzul.webp",
      title: "Proteção Solar",
      desc: "Proteção solar eficiente fator UV 50+ para sua pele."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMLAzul.webp",
      title: "Alta Performance",
      desc: "Ativa a circulação e combate a fadiga muscular durante o dia."
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsToShow, setItemsToShow] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 1024 ? 1 : 3);
    };
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = techFeatures.length - itemsToShow;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [itemsToShow, techFeatures.length]);

  return (
    <section id="linhas" className="bg-white py-16 lg:py-24 overflow-hidden">
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

        {/* Carousel Track */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {techFeatures.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="group h-full">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-50 shadow-sm transition-shadow hover:shadow-xl">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                      src={item.img}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                  </div>

                  <div className="relative pl-5 border-l-2 border-gray-100 group-hover:border-[#8b434f] transition-colors duration-500">
                    <h3 className="text-[16px] font-bold uppercase tracking-widest text-[#171212] mb-2 group-hover:text-[#8b434f] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[16px] font-sans font-light leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: techFeatures.length - itemsToShow + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#8b434f]' : 'w-2 bg-gray-300'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryLines;
