import React from 'react';
import ProductSection from './ProductSection';

const ProductVenus: React.FC = () => {
    const mangaCurtaImages = [
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMCAzul.webp', name: 'Azul Sereno' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMCBranco.webp', name: 'Branco Pérola' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMCPreto.webp', name: 'Preto Clássico' }
    ];

    const mangaLongaImages = [
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMLAzul.webp', name: 'Azul Sereno' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMLBranco.webp', name: 'Branco Pérola' },
        { url: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMLPreto.webp', name: 'Preto Clássico' }
    ];

    return (
        <ProductSection
            id="venus"
            mainTitle={
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto uppercase font-light">
                    A essência da <span className="italic font-normal">feminilidade.</span>
                </h2>
            }
            subtitlePrefix="Veste"
            subtitleHighlight="Vênus"
            products={[
                {
                    tag: "Manga Curta",
                    images: mangaCurtaImages,
                    benefits: [
                        { text: "Modelagem Alongada", side: "left" },
                        { text: "Bolsos Frontais", side: "left" },
                        { text: "Cintura Ajustável", side: "left" }
                    ],
                    header: (
                        <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest mb-3 font-light">
                            Charme & <span className="italic">Cobertura</span>
                        </h3>
                    ),
                    description: "Design pensado para valorizar a feminilidade e as formas do corpo, com dois bolsos frontais e modelagem alongada."
                },
                {
                    tag: "Manga Longa",
                    images: mangaLongaImages,
                    benefits: [
                        { text: "Térmico", side: "right" },
                        { text: "Alta Elasticidade", side: "right" },
                        { text: "Toque Macio", side: "right" }
                    ],
                    header: (
                        <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest mb-3 font-light">
                            <span className="italic">Conforto & Elegância</span>
                        </h3>
                    ),
                    description: "A versão manga longa oferece proteção térmica e elegância superior para os dias mais frescos ou ambientes climatizados."
                }
            ]}
        />
    );
};

export default ProductVenus;
