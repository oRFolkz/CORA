import React, { useState } from 'react';

const ProductCassia: React.FC = () => {
    const images = [
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/JoggerPreta.webp', name: 'Preto Clássico' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/JoggerBranca.webp', name: 'Branco Pérola' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/JoggerAzul.webp', name: 'Azul Sereno' }
    ];

    const [activeImage, setActiveImage] = useState(images[0].url);
    const [activeName, setActiveName] = useState(images[0].name);

    return (
        <section id="cassia" className="w-full bg-[#8b434f] py-12 lg:py-24 border-b border-white/5 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#b8aaa1]/10 -skew-y-3 pointer-events-none origin-top-right"></div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-white font-sans antialiased relative z-10">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Visual Side (Image) */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl group border border-white/10 bg-[#8b434f]">
                            <div className="absolute top-0 left-0 z-20">
                                <span className="inline-block bg-[#171212] text-white text-[14px] font-bold px-5 py-3 uppercase tracking-[0.3em]">
                                    Calça Jogger
                                </span>
                            </div>

                            {/* Image */}
                            <img
                                key={activeImage} // Force re-render for animation
                                alt={`Calça Jogger Cássia - ${activeName}`}
                                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 animate-fade-in"
                                src={activeImage}
                            />

                            {/* Floating Color Picker (Desktop) */}
                            <div className="hidden lg:flex absolute top-6 right-4 z-30 flex-col items-end gap-4">
                                <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-2 shadow-2xl flex flex-col gap-2">
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
                                <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-white bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                                    {activeName}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="mb-8">
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase font-light">
                                Calça Jogger <span className="italic font-normal text-[#b8aaa1]">Cássia</span>
                            </h2>
                            <div className="w-24 h-px bg-white/20 my-8"></div>
                            <p className="font-sans font-light text-[16px] leading-relaxed opacity-80 text-white max-w-lg">
                                A união perfeita entre a modernidade esportiva e a seriedade profissional. A Calça Jogger Cássia traz um corte contemporâneo que prioriza o bem-estar sem abrir mão da elegância, perfeita para rotinas dinâmicas.
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
                                        className={`w-16 h-20 relative overflow-hidden rounded-sm transition-all ${activeImage === img.url ? 'ring-2 ring-white ring-offset-2 ring-offset-[#b8aaa1]' : 'opacity-60'}`}
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
                                    icon: "ph-arrows-left-right",
                                    title: "Ajuste Perfeito",
                                    desc: "Cintura com elástico para um ajuste anatômico preciso e maior conforto."
                                },
                                {
                                    icon: "ph-wind",
                                    title: "Movimento Livre",
                                    desc: "Modelagem mais solta que garante total liberdade de movimentos."
                                },
                                {
                                    icon: "ph-person-arms-spread",
                                    title: "Versatilidade e Função",
                                    desc: "Veste bem todos os tipos de corpo, além de contar com bolsos funcionais."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#b8aaa1] group-hover:border-[#b8aaa1] transition-all duration-300 bg-white/10">
                                        <i className={`ph-thin ${item.icon} text-2xl text-white group-hover:text-[#3a3633]`}></i>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-[16px] font-bold uppercase tracking-widest text-[#b8aaa1] mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                                        <p className="text-[15px] font-light text-white leading-relaxed font-sans">{item.desc}</p>
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

export default ProductCassia;
