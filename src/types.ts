export interface Product {
  id: number;
  name: string;
  model: string;
  category: string;
  material: string;
  desc: string;
  retail: string;
  wholesale: string;
  unit: string;
  wholesaleQty: string;
  img: string;
  featured: boolean;
  isNew: boolean;
}

export type ViewType = 'home' | 'products' | 'supply-chain' | 'about' | 'global-layout';
