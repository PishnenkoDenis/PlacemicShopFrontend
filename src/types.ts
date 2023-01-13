export type TCardProducts = {
  item: {
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
};

export type TAdvertisingCard = {
  item: {
    id: number;
    link: string;
    image: string;
  };
};

export type TCardShop = {
  item: {
    id: number;
    link: string;
    logo: string;
    name: string;
    products: TProducts[];
  };
};

export type TProducts = {
  id: number;
  link: string;
  icon: string;
};

export type TPreviouslyWatchedCard = {
  item: {
    image: string;
    shortDesc: string;
    currentPrice: number;
  };
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
