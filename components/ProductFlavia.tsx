import React, { useState } from 'react';

const ProductFlavia: React.FC = () => {
    const images = [
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MontariaPreta.webp', name: 'Preto Clássico' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MontariaBranca.webp', name: 'Branco Pérola' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MontariaAzul.webp', name: 'Azul Sereno' }
    ];

    const [activeImage, setActiveImage] = useState(images[0].url);
    const [activeName, setActiveName] = useState(images[0].name);

    return (
        <section id="flavia" className="w-full bg-[#e3e1d2] py-12 lg:py-24 border-b border-white/5 relative overflow-hidden">
            {/* Background Element - Different color/skew for variety */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-[#b8aaa1]/10 -skew-x-12 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-[#171212] font-sans antialiased relative z-10">

                <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
                    {/* Visual Side (Image) */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl group border border-white/10 bg-white">
                            <div className="absolute top-0 right-0 z-20">
                                <span className="inline-block bg-[#8b434f] text-white text-[14px] font-bold px-5 py-3 uppercase tracking-[0.3em]">
                                    Calça Montaria
                                </span>
                            </div>

                            {/* Image */}
                            <img
                                key={activeImage} // Force re-render for animation
                                alt={`Calça Montaria Flávia - ${activeName}`}
                                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 animate-fade-in"
                                src={activeImage}
                            />

                            {/* Floating Color Picker (Desktop) */}
                            <div className="hidden lg:flex absolute top-6 left-4 z-30 flex-col items-start gap-4">
                                <div className="bg-white/80 backdrop-blur-xl border border-[#171212]/5 p-2 shadow-2xl flex flex-col gap-2">
                                    {images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => { setActiveImage(img.url); setActiveName(img.name); }}
                                            className={`relative w-12 h-16 transition-all duration-300 ${activeImage === img.url ? 'ring-2 ring-[#8b434f] scale-105 z-10' : 'opacity-50 hover:opacity-100'}`}
                                            title={img.name}
                                        >
                                            <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                                <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#171212] bg-white/80 px-3 py-1.5 backdrop-blur-sm shadow-sm">
                                    {activeName}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-end lg:text-right">
                        <div className="mb-8 flex flex-col lg:items-end">
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#171212] tracking-tight leading-tight uppercase font-light">
                                Calça Montaria <span className="italic font-normal text-[#8b434f]">Flávia</span>
                            </h2>
                            <div className="w-24 h-px bg-[#171212]/20 my-8"></div>
                            <p className="font-sans font-medium text-[16px] leading-relaxed text-[#5c5555] max-w-lg">
                                Uma reinterpretação sofisticada do clássico design de montaria. A Calça Flávia une recortes estratégicos que esculpem a silhueta com tecido tecnológico de alta flexibilidade, garantindo uma postura elegante e conforto absoluto durante todo o dia.
                            </p>
                        </div>

                        {/* Mobile Color Picker */}
                        <div className="lg:hidden mb-10 w-full">
                            <p className="text-[14px] uppercase tracking-[0.2em] text-[#8b434f] font-bold mb-4">Escolha a cor</p>
                            <div className="flex gap-4">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { setActiveImage(img.url); setActiveName(img.name); }}
                                        className={`w-16 h-20 relative overflow-hidden rounded-sm transition-all ${activeImage === img.url ? 'ring-2 ring-[#8b434f] ring-offset-2 ring-offset-[#e3e1d2]' : 'opacity-60'}`}
                                    >
                                        <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                            <p className="mt-2 text-[14px] font-bold text-[#171212] tracking-widest uppercase">{activeName}</p>
                        </div>

                        {/* Benefits with Icons */}
                        <div className="space-y-8 w-full">
                            {[
                                {
                                    icon: "ph-bezier-curve",
                                    title: "Recortes Exclusivos",
                                    desc: "Recortes exclusivos que valorizam e alongam a silhueta feminina."
                                },
                                {
                                    icon: "ph-heart-straight",
                                    title: "Conforto Abdominal",
                                    desc: "Cintura alta para maior conforto e segurança na região do abdômen."
                                },
                                {
                                    icon: "ph-yin-yang",
                                    title: "Flexibilidade Total",
                                    desc: "Tecido flexível que oferece liberdade de movimentos e ajuste perfeito."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group flex-row lg:flex-row-reverse items-center lg:items-start text-left lg:text-right p-4 border border-transparent hover:border-[#8b434f]/10 rounded-xl transition-all hover:bg-white/40">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[#171212]/10 flex items-center justify-center group-hover:bg-[#8b434f] group-hover:border-[#8b434f] transition-all duration-300 bg-white">
                                        <i className={`ph-thin ${item.icon} text-2xl text-[#171212] group-hover:text-white`}></i>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-[16px] font-bold uppercase tracking-widest text-[#8b434f] mb-1 group-hover:text-[#171212] transition-colors">{item.title}</h4>
                                        <p className="text-[15px] font-light text-[#5c5555] leading-relaxed font-sans">{item.desc}</p>
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

export default ProductFlavia;
