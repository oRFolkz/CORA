import React from 'react';
import ProductSection from './ProductSection';

const ProductMinerva: React.FC = () => {
    const mangaCurtaImages = [
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MinervaMCAzul.webp', name: 'Azul Sereno' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MinervaMCBranca.webp', name: 'Branco Pérola' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MinervaMCPreta.webp', name: 'Preto Clássico' }
    ];

    const mangaLongaImages = [
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MinervaMLAzul.webp', name: 'Azul Sereno' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MinervaMLBranco.webp', name: 'Branco Pérola' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MinervaMLPreta.webp', name: 'Preto Clássico' }
    ];

    return (
        <ProductSection
            id="minerva"
            products={[
                {
                    tag: "Manga Curta",
                    images: mangaCurtaImages,
                    benefits: [
                        { text: "Praticidade", side: "left" },
                        { text: "Bolsos Frontais", side: "left" },
                        { text: "Design Atemporal", side: "left" }
                    ],
                    header: (
                        <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest mb-3 font-light">
                            Funcionalidade & <span className="italic">Leveza</span>
                        </h3>
                    ),
                    description: "Essencial e atemporal, perfeita para qualquer ambiente de trabalho. Seu design valoriza a feminilidade, com recortes que alongam a silhueta e dois bolsos frontais para maior praticidade."
                },
                {
                    tag: "Manga Longa",
                    images: mangaLongaImages,
                    benefits: [
                        { text: "Elegância", side: "right" },
                        { text: "Conforto", side: "right" },
                        { text: "Versatilidade", side: "right" }
                    ],
                    header: (
                        <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest mb-3 font-light">
                            Conforto & <span className="italic">Elegância</span>
                        </h3>
                    ),
                    description: "A versão manga longa mantém a elegância e praticidade, ideal para dias mais frescos ou ambientes com ar condicionado, sem perder o estilo."
                }
            ]}
        />
    );
};

export default ProductMinerva;
