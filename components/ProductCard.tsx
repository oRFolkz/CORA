
import React, { useState } from 'react';
import { Product } from '../types';
import { COLORS } from '../constants';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [currentMain, setCurrentMain] = useState(product.mainImage);

  const swapImages = (thumb: string) => {
    setCurrentMain(thumb);
  };

  return (
    <div className="mb-32 last:mb-0">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 uppercase tracking-tighter">{product.name}</h3>
        <p className="text-white/60 max-w-2xl mx-auto italic font-playfair text-xl">"{product.description}"</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Gallery */}
        <div className="flex flex-col gap-6 w-full lg:w-1/5 order-2 lg:order-1">
          {product.thumbnails.map((thumb, i) => (
            <div 
              key={i} 
              onClick={() => swapImages(thumb)}
              className="cursor-pointer overflow-hidden rounded-sm hover:scale-105 transition-transform border border-transparent hover:border-white/50"
            >
              <img src={thumb} alt={`${product.name} thumb ${i}`} className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all" />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="relative w-full lg:w-2/5 order-1 lg:order-2">
          <img 
            src={currentMain} 
            alt={product.name} 
            className="w-full h-auto rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-opacity duration-500"
          />
          <div className="absolute top-6 left-6 bg-white text-gray-900 text-base px-6 py-3 rounded-sm uppercase font-bold tracking-[0.2em] shadow-lg">
            {product.type === 'top' ? 'Novidade' : 'Essencial'}
          </div>
        </div>

        {/* Info Icons for pants specifically */}
        <div className="w-full lg:w-1/4 flex flex-col gap-10 order-3">
          {[
            { icon: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/Diamond.webp?v=1758289396', text: 'Design exclusivo Cora.Co' },
            { icon: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/Smile.webp?v=1758289387', text: 'Modelagem que valoriza a silhueta' },
            { icon: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/waist.webp?v=1758289407', text: 'Tecnologia têxtil de alta mobilidade' }
          ].map((info, idx) => (
            <div key={idx} className="flex items-center gap-6 group">
              <div className="w-14 h-14 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <img src={info.icon} className="w-8 h-8 invert brightness-0" alt="icon" />
              </div>
              <p className="text-white text-base font-montserrat font-bold uppercase tracking-wider leading-relaxed">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;