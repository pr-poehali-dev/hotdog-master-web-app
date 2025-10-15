export interface Hotdog {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  isHit?: boolean;
  isSpicy?: boolean;
  isAvailable?: boolean;
}

export interface Drink {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  isAvailable?: boolean;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  isAvailable?: boolean;
}

export interface CartItem {
  type: 'hotdog' | 'drink' | 'addon';
  refId: string;
  qty: number;
  price: number;
  name: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  pickupStoreId?: string;
  pickupTime?: string;
  phone?: string;
  note?: string;
  status: 'new' | 'accepted' | 'ready' | 'completed' | 'cancelled';
  total: number;
  createdAt: Date;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  phone?: string;
  hours?: string;
  mapLink?: string;
  isActive?: boolean;
}

export interface Promo {
  id: string;
  title: string;
  subtitle?: string;
  discountPercent?: number;
  isActive?: boolean;
}

export interface HomeSetting {
  heroTitle?: string;
  heroSubtitle?: string;
  heroImageUrl?: string;
  heroCTA1Text?: string;
  heroCTA1Href?: string;
  heroCTA2Text?: string;
  heroCTA2Href?: string;
  phone?: string;
}
