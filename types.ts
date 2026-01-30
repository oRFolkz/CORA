
export interface Product {
  id: string;
  name: string;
  description: string;
  mainImage: string;
  thumbnails: string[];
  badges: string[];
  type: 'top' | 'pants';
}

export interface TechFeature {
  id: number;
  image: string;
  tag: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
}
