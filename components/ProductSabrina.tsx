import React, { useState } from 'react';

const ProductSabrina: React.FC = () => {
    const images = [
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/FlarePreto.webp', name: 'Preto Clássico' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/FlareBranca.webp', name: 'Branco Pérola' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/FlareAzul.webp', name: 'Azul Sereno' }
    ];

    const [activeImage, setActiveImage] = useState(images[0].url);
    const [activeName, setActiveName] = useState(images[0].name);

    return (
        <section id="sabrina" className="w-full bg-[#8b434f] py-12 lg:py-24 border-b border-white/5 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#b8aaa1]/10 skew-x-12 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-white font-sans antialiased relative z-10">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Visual Side (Image) */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl group border border-white/10">
                            <div className="absolute top-0 left-0 z-20">
                                <span className="inline-block bg-[#171212] text-white text-[14px] font-bold px-5 py-3 uppercase tracking-[0.3em]">
                                    Calça Flare
                                </span>
                            </div>

                            {/* Image */}
                            <img
                                key={activeImage} // Force re-render for animation
                                alt={`Calça Flare Sabrina - ${activeName}`}
                                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 animate-fade-in"
                                src={activeImage}
                            />

                            {/* Floating Color Picker (Desktop) */}
                            <div className="hidden lg:flex absolute top-6 right-4 z-30 flex-col items-end gap-4">
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 shadow-2xl flex flex-col gap-2">
                                    {images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => { setActiveImage(img.url); setActiveName(img.name); }}
                                            className={`relative w-12 h-16 transition-all duration-300 ${activeImage === img.url ? 'ring-2 ring-white scale-105 z-10' : 'opacity-50 hover:opacity-100'}`}
                                            title={img.name}
                                        >
                                            <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                                <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-white/90 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                                    {activeName}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="mb-8">
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase font-light">
                                Calça Flare <span className="italic font-normal text-[#b8aaa1]">Sabrina</span>
                            </h2>
                            <div className="w-24 h-px bg-white/20 my-8"></div>
                            <p className="font-sans font-light text-[16px] leading-relaxed opacity-80 max-w-lg">
                                Uma peça essencial que redefine a elegância no ambiente corporativo. A Calça Flare Sabrina combina o corte clássico que valoriza a silhueta com o conforto necessário para longas jornadas.
                            </p>
                        </div>

                        {/* Mobile Color Picker */}
                        <div className="lg:hidden mb-10">
                            <p className="text-[14px] uppercase tracking-[0.2em] text-[#b8aaa1] font-bold mb-4">Escolha a cor</p>
                            <div className="flex gap-4">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { setActiveImage(img.url); setActiveName(img.name); }}
                                        className={`w-16 h-20 relative overflow-hidden rounded-sm transition-all ${activeImage === img.url ? 'ring-2 ring-[#b8aaa1] ring-offset-2 ring-offset-[#3a3633]' : 'opacity-60'}`}
                                    >
                                        <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                            <p className="mt-2 text-[14px] font-bold text-white tracking-widest uppercase">{activeName}</p>
                        </div>

                        {/* Benefits with Icons */}
                        <div className="space-y-8">
                            {[
                                {
                                    icon: "ph-sketch-logo", // Diamond equivalent
                                    title: "Design Sofisticado",
                                    desc: "Design elegante e sofisticado, ideal para diversas ocasiões."
                                },
                                {
                                    icon: "ph-smiley",
                                    title: "Conforto & Valorização",
                                    desc: "Cintura alta que proporciona conforto ao abdômen e valoriza a silhueta."
                                },
                                {
                                    icon: "ph-person-simple-run", // Mobility
                                    title: "Mobilidade Total",
                                    desc: "Modelagem que oferece excelente mobilidade e liberdade de movimentos."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#b8aaa1] group-hover:border-[#b8aaa1] transition-all duration-300">
                                        <i className={`ph-thin ${item.icon} text-2xl text-white group-hover:text-[#8b434f]`}></i>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-[16px] font-bold uppercase tracking-widest text-[#b8aaa1] mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                                        <p className="text-[15px] font-light text-white/70 leading-relaxed font-sans">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSabrina;
