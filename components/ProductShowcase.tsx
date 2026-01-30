
import React, { useState } from 'react';

const ProductShowcase: React.FC = () => {
  const [activeImageCurta, setActiveImageCurta] = useState('https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCAzul.webp');
  const [activeImageLonga, setActiveImageLonga] = useState('https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMLAzul.webp');

  const mangaCurtaImages = [
    { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCAzul.webp', name: 'Azul Sereno' },
    { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCBranco.webp', name: 'Branco Pérola' },
    { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCPreto.webp', name: 'Preto Clássico' }
  ];

  const mangaLongaImages = [
    { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMLAzul.webp', name: 'Azul Sereno' },
    { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMLPreto.webp', name: 'Preto Clássico' },
    { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMLBranco.webp', name: 'Branco Pérola' }
  ];

  const currentCurtaName = mangaCurtaImages.find(img => img.url === activeImageCurta)?.name || 'Azul Sereno';
  const currentLongaName = mangaLongaImages.find(img => img.url === activeImageLonga)?.name || 'Azul Sereno';

  const BenefitBadge = ({ text, side }: { text: string, side: 'left' | 'right' }) => (
    <div className={`flex items-center gap-3 bg-white/10 backdrop-blur-md py-1.5 px-3 mb-2 w-fit border-l border-white/30 ${side === 'right' ? 'ml-auto' : ''}`}>
      <span className="text-[14px] md:text-[14px] font-bold uppercase tracking-[0.25em] text-white whitespace-nowrap">{text}</span>
    </div>
  );

  const ColorFloatingPicker = ({ images, activeUrl, onSelect, currentName, side }: {
    images: any[],
    activeUrl: string,
    onSelect: (url: string) => void,
    currentName: string,
    side: 'left' | 'right'
  }) => (
    <div className={`hidden lg:flex absolute top-6 ${side === 'right' ? 'right-4' : 'left-4'} z-30 flex-col items-${side === 'right' ? 'end' : 'start'} gap-4`}>
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 shadow-2xl flex flex-col gap-2">
        <p className="text-[14px] uppercase tracking-[0.3em] text-white/50 mb-1 px-1 font-bold">Cores</p>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(img.url)}
            className={`relative w-12 h-16 md:w-14 md:h-20 transition-all duration-500 overflow-hidden focus:outline-none ${activeUrl === img.url ? 'scale-110 shadow-2xl z-10 border border-white/50' : 'opacity-40 hover:opacity-100 hover:scale-105'}`}
          >
            <img alt={`Cor ${img.name}`} className="w-full h-full object-cover" src={img.url} />
          </button>
        ))}
      </div>
      <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-white/90 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
        {currentName}
      </span>
    </div>
  );

  const MobileColorPicker = ({ images, activeUrl, onSelect, currentName }: {
    images: any[],
    activeUrl: string,
    onSelect: (url: string) => void,
    currentName: string
  }) => (
    <div className="lg:hidden flex flex-col gap-4 mt-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <p className="text-[14px] uppercase tracking-[0.3em] text-white/50 font-bold">Nuance</p>
        <span className="text-[14px] font-bold uppercase tracking-widest text-white">
          {currentName}
        </span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(img.url)}
            className={`flex-shrink-0 relative w-16 h-20 transition-all duration-500 ${activeUrl === img.url ? 'ring-1 ring-white ring-offset-4 ring-offset-[#b8aaa1] scale-95' : 'opacity-40'}`}
          >
            <img alt={`Cor ${img.name}`} className="w-full h-full object-cover" src={img.url} />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#b8aaa1] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-white font-sans antialiased">
        <div className="pb-16 lg:pb-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto uppercase font-light">
            Sofisticação que acompanha seu <span className="italic font-normal">ritmo.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Manga Curta */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#c4b8b0] shadow-2xl group">
              <div className="absolute top-0 left-0 z-20">
                <span className="inline-block bg-[#800020] text-white text-[14px] font-bold px-5 py-3 uppercase tracking-[0.3em]">
                  Manga Curta
                </span>
              </div>

              <ColorFloatingPicker
                side="right"
                images={mangaCurtaImages}
                activeUrl={activeImageCurta}
                onSelect={setActiveImageCurta}
                currentName={currentCurtaName}
              />

              <div className="absolute bottom-6 left-6 z-20 flex flex-col pointer-events-none">
                <BenefitBadge text="Anti-odor" side="left" />
                <BenefitBadge text="Secagem Rápida" side="left" />
                <BenefitBadge text="Easy Care" side="left" />
              </div>

              <img
                alt="Veste Wrap Alina manga curta"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                src={activeImageCurta}
              />
            </div>

            <MobileColorPicker
              images={mangaCurtaImages}
              activeUrl={activeImageCurta}
              onSelect={setActiveImageCurta}
              currentName={currentCurtaName}
            />

            <div className="mt-10 border-l border-white/20 pl-8">
              <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest mb-3 font-light">
                Veste Wrap <span className="italic">Alina</span>
              </h3>
              <p className="font-sans font-light text-[16px] leading-relaxed opacity-70 max-w-sm">
                Design transpassado que proporciona frescor e liberdade de movimentos para a profissional dinâmica.
              </p>
            </div>
          </div>

          {/* Manga Longa */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#3a3633] shadow-2xl group">
              <div className="absolute top-0 right-0 z-20">
                <span className="inline-block bg-[#800020] text-white text-[14px] font-bold px-5 py-3 uppercase tracking-[0.3em]">
                  Manga Longa
                </span>
              </div>

              <ColorFloatingPicker
                side="left"
                images={mangaLongaImages}
                activeUrl={activeImageLonga}
                onSelect={setActiveImageLonga}
                currentName={currentLongaName}
              />

              <div className="absolute bottom-6 right-6 z-20 flex flex-col pointer-events-none items-end">
                <BenefitBadge text="Térmico" side="right" />
                <BenefitBadge text="UV 50+" side="right" />
                <BenefitBadge text="Alta Performance" side="right" />
              </div>

              <img
                alt="Veste Wrap Alina manga longa"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                src={activeImageLonga}
              />
            </div>

            <MobileColorPicker
              images={mangaLongaImages}
              activeUrl={activeImageLonga}
              onSelect={setActiveImageLonga}
              currentName={currentLongaName}
            />

            <div className="mt-10 border-r border-white/20 pr-8 text-right flex flex-col items-end">
              <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest mb-3 font-light">
                Veste Wrap <span className="italic">Alina</span>
              </h3>
              <p className="font-sans font-light text-[16px] leading-relaxed opacity-70 max-w-sm">
                Sofisticação estrutural com proteção térmica, ideal para ambientes climatizados com elegância impecável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
