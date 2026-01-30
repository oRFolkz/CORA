import React from 'react';
import ProductSection from './ProductSection';

const ProductShowcase: React.FC = () => {
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

  return (
    <ProductSection
      id="modelos"
      mainTitle={
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto uppercase font-light">
          Elegância que acompanha seu <span className="italic font-normal">ritmo.</span>
        </h2>
      }
      subtitlePrefix="Veste Wrap"
      subtitleHighlight="Alina"
      products={[
        {
          tag: "Manga Curta",
          images: mangaCurtaImages,
          benefits: [
            { text: "Anti-odor", side: "left" },
            { text: "Secagem Rápida", side: "left" },
            { text: "Easy Care", side: "left" }
          ],
          header: (
            <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest mb-3 font-light">
              Frescor & <span className="italic">Dinamismo</span>
            </h3>
          ),
          description: "Design transpassado que proporciona frescor e liberdade de movimentos para a profissional dinâmica."
        },
        {
          tag: "Manga Longa",
          images: mangaLongaImages,
          benefits: [
            { text: "Térmico", side: "right" },
            { text: "UV 50+", side: "right" },
            { text: "Alta Performance", side: "right" }
          ],
          header: (
            <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest mb-3 font-light">
              <span className="italic">Proteção & Sofisticação</span>
            </h3>
          ),
          description: "Sofisticação estrutural com proteção térmica, ideal para ambientes climatizados com elegância impecável."
        }
      ]}
    />
  );
};

export default ProductShowcase;
