import React, { useState } from 'react';

interface ProductImage {
    url: string;
    name: string;
}

interface ProductBenefit {
    text: string;
    side: 'left' | 'right';
}

interface ProductConfig {
    tag: string;
    images: ProductImage[];
    benefits: ProductBenefit[];
    header: React.ReactNode;
    description: string;
}

interface ProductSectionProps {
    id?: string;
    mainTitle?: React.ReactNode;
    subtitlePrefix?: string;
    subtitleHighlight?: string;
    products: [ProductConfig, ProductConfig]; // Enforce exactly 2 products for the grid
}

const BenefitBadge: React.FC<{ text: string, side: 'left' | 'right' }> = ({ text, side }) => (
    <div className={`flex items-center gap-3 bg-white/10 backdrop-blur-md py-1.5 px-3 mb-2 w-fit border-l border-white/30 ${side === 'right' ? 'ml-auto' : ''}`}>
        <span className="text-[14px] md:text-[14px] font-bold uppercase tracking-[0.25em] text-white whitespace-nowrap">{text}</span>
    </div>
);

const ColorFloatingPicker = ({ images, activeUrl, onSelect, currentName, side }: {
    images: ProductImage[],
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
    images: ProductImage[],
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

const ProductSection: React.FC<ProductSectionProps> = ({ id, mainTitle, subtitlePrefix, subtitleHighlight, products }) => {
    // State for image handling needs to be dynamic based on the products passed
    // However, hooks cannot be dynamic. We can assume 2 products and use separate state for each.
    // Or simpler: map the products to a state array.

    // Since we enforced exactly 2 products in props, we can safely use fixed hooks or an array.
    const [activeImage0, setActiveImage0] = useState(products[0].images[0].url);
    const [activeImage1, setActiveImage1] = useState(products[1].images[0].url);

    const activeImages = [activeImage0, activeImage1];
    const setActiveImages = [setActiveImage0, setActiveImage1];

    return (
        <section id={id} className="w-full bg-[#b8aaa1] py-12 lg:py-20 border-b border-white/5 last:border-0">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-white font-sans antialiased">
                {mainTitle && (
                    <div className="pb-12 lg:pb-16 text-center">
                        {mainTitle}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    {products.map((product, idx) => {
                        const currentName = product.images.find(img => img.url === activeImages[idx])?.name || product.images[0].name;
                        const isLeft = idx === 0;

                        return (
                            <div key={idx} className="flex flex-col">
                                <div className={`relative w-full aspect-[3/4] overflow-hidden ${isLeft ? 'bg-[#c4b8b0]' : 'bg-[#3a3633]'} shadow-2xl group`}>
                                    <div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} z-20`}>
                                        <span className="inline-block bg-[#800020] text-white text-[14px] font-bold px-5 py-3 uppercase tracking-[0.3em]">
                                            {product.tag}
                                        </span>
                                    </div>

                                    <ColorFloatingPicker
                                        side={isLeft ? "right" : "left"}
                                        images={product.images}
                                        activeUrl={activeImages[idx]}
                                        onSelect={setActiveImages[idx]}
                                        currentName={currentName}
                                    />

                                    <div className={`absolute bottom-6 ${isLeft ? 'left-6 items-start' : 'right-6 items-end'} z-20 flex flex-col pointer-events-none`}>
                                        {product.benefits.map((benefit, bIdx) => (
                                            <BenefitBadge key={bIdx} text={benefit.text} side={isLeft ? 'left' : 'right'} />
                                        ))}
                                    </div>

                                    <img
                                        alt={`${product.tag} - ${currentName}`}
                                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                        src={activeImages[idx]}
                                    />
                                </div>

                                <MobileColorPicker
                                    images={product.images}
                                    activeUrl={activeImages[idx]}
                                    onSelect={setActiveImages[idx]}
                                    currentName={currentName}
                                />

                                <div className={`mt-10 ${isLeft ? 'border-l border-white/20 pl-8' : 'border-r border-white/20 pr-8 text-right flex flex-col items-end'}`}>
                                    {product.header}
                                    <p className="font-sans font-light text-[16px] leading-relaxed opacity-70 max-w-sm">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
