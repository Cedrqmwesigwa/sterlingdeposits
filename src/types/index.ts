
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

export interface Product {
  id:string;
  name: string;
  price: string;
  unit?: string; // e.g., "per bag", "per sheet"
  imageSrc: string;
  imageHint: string;
  icon?: LucideIcon;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string; // Can be simple text or Markdown string
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
  tags?: string[];
}
