import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageSrc: string;
  imageHint: string;
  icon?: LucideIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  projectType: string;
  avatarSrc?: string;
  avatarHint?: string;
}

// Removed Product type as it was for luxury goods
// export interface Product {
//   id: string;
//   name: string;
//   shortDescription: string;
//   price: string; 
//   imageSrc: string;
//   imageHint: string; 
//   category?: string;
// }
