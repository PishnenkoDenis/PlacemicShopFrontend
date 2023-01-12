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

export type TSubService = {
  id: number;
  title: string;
  link: string;
};

export type TFooterService = {
  id: number;
  title: string;
  link: string;
  subservices: TSubService[];
};
export interface IUser {
  id: number;
  avatar: string;
  fullName: string;
}

export interface INotification {
  type: string;
  resource: string;
  is_active: boolean;
}
