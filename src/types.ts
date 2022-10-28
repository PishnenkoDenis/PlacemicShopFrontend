export type TCardProducts = {
  id: number;
  image: string;
  discount?: number;
  currentPrice: number;
  oldPrice?: number;
  rating: number;
  review: number;
  shortDesc: string;
  longDesc: string;
};

export type TAdvertisingCard = {
  id: number;
  link: string;
  image: string;
};

export type TCardShop = {
  id: number;
  link: string;
  logo: string;
  name: string;
  products: [];
};

export type TPreviouslyWatchedCard = {
  image: string;
  shortDesc: string;
  currentPrice: number;
};