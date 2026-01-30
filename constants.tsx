
import { Product, TechFeature, Testimonial } from './types';

export const COLORS = {
  primary: '#8b434f',
  creme: '#e3e1d2',
  taupe: '#b8aaa1',
  background: '#fbf9f9',
  dark: '#171212',
  olive: '#9b9c84'
};

export const PRODUCTS: Product[] = [
  {
    id: 'alina',
    name: 'VESTE WRAP ALINA',
    description: 'Design transpassado que alia funcionalidade a um toque contemporâneo.',
    mainImage: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCPreto.webp?v=1758389774',
    thumbnails: [
      'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCAzul.webp?v=1758389767',
      'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/WrapMCBranco.webp?v=1758389789'
    ],
    badges: ['Novidade'],
    type: 'top'
  }
];

export const TECH_FEATURES: TechFeature[] = [
  { id: 1, image: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/VenusMLBranco.webp?v=1758389734', tag: 'Não precisa passar roupa' },
  { id: 2, image: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/MinervaMCAzul.webp?v=1758389716', tag: 'Proteção UV 50+' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'RENATA',
    role: 'ESTETICISTA',
    location: 'São Paulo/SP',
    quote: 'Ficava com vergonha do branco transparente… agora uso a linha TOP e é zero transparência!',
    image: 'https://cdn.shopify.com/s/files/1/0654/6138/7478/files/Depoimento1.webp?v=1758202913'
  }
];