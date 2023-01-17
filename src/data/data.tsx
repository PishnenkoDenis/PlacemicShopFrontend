import LogoUniqlo from '../assets/logoUniqlo.svg';
import marple from '../assets/marple.svg';
import shirt1 from '../assets/shirt1.svg';
import sale1 from '../assets/imgShopSale.svg';
import sale2 from '../assets/imageSaleGirls.svg';

import nov from '../assets/novelties1.svg';
import product1 from '../assets/product1.png';
import LANGUAGES from '../languagesEnum';
import textData from '../locale/ru.json';

export const advertising = [
  { id: 1, image: sale1, link: '/page2' },
  { id: 2, image: sale2, link: '/page2' },
];

export const shops = [
  {
    id: 1,
    logo: LogoUniqlo,
    name: marple,
    link: '/page2',
    products: [
      { id: 1, icon: shirt1, link: '/page2' },
      { id: 2, icon: shirt1, link: '/page2' },
      { id: 3, icon: shirt1, link: '/page2' },
    ],
  },
  {
    id: 2,
    logo: LogoUniqlo,
    name: marple,
    products: [
      { id: 1, icon: shirt1, link: '/page2' },
      { id: 2, icon: shirt1, link: '/page2' },
      { id: 3, icon: shirt1, link: '/page2' },
    ],
  },
  {
    id: 3,
    logo: LogoUniqlo,
    name: marple,
    products: [
      { id: 1, icon: shirt1, link: '' },
      { id: 2, icon: shirt1, link: '' },
      { id: 3, icon: shirt1, link: '' },
    ],
  },
  {
    id: 4,
    logo: LogoUniqlo,
    name: marple,
    products: [
      { id: 1, icon: shirt1, link: '' },
      { id: 2, icon: shirt1, link: '' },
      { id: 3, icon: shirt1, link: '' },
    ],
  },
  {
    id: 5,
    logo: LogoUniqlo,
    name: marple,
    products: [
      { id: 1, icon: shirt1, link: '' },
      { id: 2, icon: shirt1, link: '' },
      { id: 3, icon: shirt1, link: '' },
    ],
  },
  {
    id: 6,
    logo: LogoUniqlo,
    name: marple,
    products: [
      { id: 1, icon: shirt1, link: '' },
      { id: 2, icon: shirt1, link: '' },
      { id: 3, icon: shirt1, link: '' },
    ],
  },
  {
    id: 7,
    logo: LogoUniqlo,
    name: marple,
    products: [
      { id: 1, icon: shirt1, link: '' },
      { id: 2, icon: shirt1, link: '' },
      { id: 3, icon: shirt1, link: '' },
    ],
  },
];

export const noveltiesProducts = [
  {
    id: 1,
    image: nov,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 2,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 3,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 4,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 5,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 6,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 7,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 8,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 9,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 10,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 11,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 12,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
];

export const products = [
  {
    id: 1,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 2,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 3,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 4,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 5,
    image: product1,
    discount: 35,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 6,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 7,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 8,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 9,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 10,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 11,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 12,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 13,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 14,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 15,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 16,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 17,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 18,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 19,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 20,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 21,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 22,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 23,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 24,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 25,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 26,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 27,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 28,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 29,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 30,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 31,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 32,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 33,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 34,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },

  {
    id: 35,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 36,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 37,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
];
export const watchedproducts = [
  {
    id: 1,
    image: nov,
    currentPrice: 1999,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
  },
  {
    id: 2,
    image: nov,
    currentPrice: 1999,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
  },
  {
    id: 3,
    image: nov,
    currentPrice: 1999,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
  },
  {
    id: 4,
    image: nov,
    currentPrice: 1999,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
  },
  {
    id: 5,
    image: nov,
    currentPrice: 1999,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
  },
  {
    id: 6,
    image: nov,
    currentPrice: 1999,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
  },
  {
    id: 7,
    image: nov,
    currentPrice: 1999,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
  },
];

export const recomProducts = [
  {
    id: 1,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 2,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 3,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 4,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 5,
    image: product1,
    discount: 35,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 6,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 7,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 8,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 9,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 10,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 11,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 12,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 13,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 14,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 15,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 16,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 17,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 18,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 19,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 20,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 21,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 22,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 23,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 24,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 25,
    image: product1,
    discount: 25,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 26,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 27,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 28,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 29,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 30,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 31,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 32,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 33,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 34,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },

  {
    id: 35,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 36,
    image: product1,
    discount: 10,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
  {
    id: 37,
    image: product1,
    discount: 0,
    currentPrice: 1999,
    oldPrice: 2499,
    rating: 4.9,
    review: 14,
    shortDesc: 'Футболка с дизайнерским принтом Super Shape 05',
    longDesc:
      'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
  },
];

export const headerDropdownlistData = [
  {
    id: 1,
    name: 'customer',
    options: [
      { id: 0, value: 'Покупателям' },
      { id: 1, value: 'Защита покупателя' },
      { id: 2, value: 'Условия оплаты' },
      { id: 3, value: 'Условия использования' },
      { id: 4, value: 'Регистрация аккаунта' },
    ],
  },
  {
    id: 2,
    name: 'seller',
    options: [
      { id: 0, value: 'Как стать продавцом' },
      { id: 1, value: 'Правила участия' },
      { id: 2, value: 'Личный кабинет продавца' },
      { id: 3, value: 'Поставщикам' },
    ],
  },
];

export const services = [
  {
    id: 1,
    title: 'Покупателям',
    link: '/page2',
    subservices: [
      {
        id: 1,
        title: 'Как это работает',
        link: '/faq/how-it-works',
      },
      {
        id: 2,
        title: 'Защита покупателя',
        link: '/faq/buyer-protection',
      },
      {
        id: 3,
        title: 'Условия оплаты',
        link: '/faq/terms-of-payment',
      },
      {
        id: 4,
        title: 'Условия использования',
        link: '/faq/terms-of-use',
      },
      {
        id: 5,
        title: 'Регистрация аккаунта',
        link: '/faq/account-registration',
      },
    ],
  },
  {
    id: 2,
    title: 'Поставщикам',
    link: '/page2',
    subservices: [
      {
        id: 1,
        title: 'Как стать продавцом',
        link: '/faq/how-to-become-a-seller',
      },
      {
        id: 2,
        title: 'Правила участия',
        link: '/faq/participation-rules',
      },
      {
        id: 3,
        title: 'Личный кабинет продавца',
        link: '/faq/sellers-personal-account',
      },
    ],
  },
  {
    id: 3,
    title: 'О компании',
    link: '/page2',
    subservices: [
      {
        id: 1,
        title: 'О PlaceMilk',
        link: '/company',
      },
      {
        id: 2,
        title: 'Новости',
        link: '/news',
      },
      {
        id: 3,
        title: 'Часто задаваемые вопросы',
        link: '/faq',
      },
      {
        id: 4,
        title: 'Служба поддержки',
        link: '/support',
      },
      {
        id: 5,
        title: 'Сooбщить о нарушении авторских прав',
        link: '/feedback',
      },
    ],
  },
];

export const userData = [
  {
    label: 'Имя',
    name: 'firstName',
    placeholder: 'Имя',
  },
  {
    label: 'Фамилия',
    name: 'lastName',
    placeholder: 'Фамилия',
  },
  {
    label: 'Отчество',
    name: 'middleName',
    placeholder: 'Отчество',
  },
];

export const userDataInfo = [
  {
    label: 'Дата рождения',
    name: 'dateOfBirth',
    placeholder: 'Дата рождения',
    type: 'date',
  },
  {
    label: 'E-mail',
    name: 'email',
    placeholder: 'example@store.ru',
    type: 'email',
  },
  {
    label: 'Телефон',
    name: 'phone',
    placeholder: 'Введите телефон',
    type: 'tel',
  },
];

export const notificationsData = [
  {
    label: 'Оповещать на E-mail',
    list: [
      {
        label: 'Информация о заказах',
        name: 'orderInfoEmail',
      },
      {
        label: 'Сообщения',
        name: 'messagesEmail',
      },
      {
        label: 'Новости и акции',
        name: 'newsEmail',
      },
    ],
  },
  {
    label: 'Оповещать по Push-уведомлениям',
    name: 'notifyPush',
    list: [
      {
        label: 'Информация о заказах',
        name: 'orderInfoPush',
      },
      {
        label: 'Сообщения',
        name: 'messagesPush',
      },
      {
        label: 'Новости и акции',
        name: 'newsPush',
      },
    ],
  },
  {
    label: 'Оповещать на телефон',
    name: 'notifyPhone',
    list: [
      {
        label: 'Информация о заказах',
        name: 'orderInfoPhone',
      },
      {
        label: 'Сообщения',
        name: 'messagesPhone',
      },
      {
        label: 'Новости и акции',
        name: 'newsPhone',
      },
    ],
  },
];

export const deliveryAddressData = [
  {
    label: 'Улица',
    name: 'street',
    placeholder: 'Улица',
  },
  {
    label: 'Дом',
    name: 'house',
    placeholder: 'Дом',
  },
  {
    label: 'Корпус',
    name: 'frame',
    placeholder: 'Корпус',
  },
  {
    label: 'Квартира',
    name: 'apartment',
    placeholder: 'Квартира',
  },
];

export const dropdownlistUserData = [
  {
    label: textData.langSelectLabel,
    name: 'language',
    options: [
      {
        id: 1,
        value: 'Русский',
      },
      {
        id: 2,
        value: 'Английский',
      },
    ],
  },
  {
    label: textData.currencySelectLabel,
    name: 'currency',
    options: [
      {
        id: 1,
        value: textData.ruble,
      },
      {
        id: 2,
        value: 'Евро',
      },
    ],
  },
];

export const languagesList = [
  {
    id: 1,
    value: LANGUAGES.russian,
  },
  {
    id: 2,
    value: LANGUAGES.english,
  },
];

export const currencyList = [
  {
    id: 1,
    value: textData.ruble,
  },
  {
    id: 2,
    value: textData.dollar,
  },
  {
    id: 3,
    value: textData.brRuble,
  },
  {
    id: 4,
    value: textData.dram,
  },
];

export const selectProps = [
  {
    label: textData.langSelectLabel,
    options: languagesList,
    name: 'language',
  },
  {
    label: textData.currencySelectLabel,
    options: currencyList,
    name: 'currency',
  },
];

export const contactsProps = [
  {
    label: textData.phone,
    name: 'telephone',
    placeholder: textData.phonePlaceholder,
    type: 'text',
  },
  {
    label: textData.email,
    name: 'email',
    placeholder: textData.emailPlaceholder,
    type: 'email',
  },
  {
    label: textData.address,
    name: 'address',
    placeholder: textData.addressPlaceholder,
    type: 'text',
  },
];

export const legalEntityProps = [
  {
    label: textData.legalEntityLabel,
    name: 'legalEntity',
    placeholder: textData.entityPlaceholder,
    type: 'text',
  },
  {
    label: textData.innLabel,
    name: 'inn',
    placeholder: textData.innPlaceholder,
    type: 'text',
  },
  {
    label: textData.kppLabel,
    name: 'kpp',
    placeholder: textData.kppPlaceholder,
    type: 'text',
  },
  {
    label: textData.legalAddressLabel,
    name: 'legalAddress',
    placeholder: textData.addressPlaceholder,
    type: 'text',
  },
];

export const bankProps = [
  {
    label: textData.bankLabel,
    name: 'bank',
    placeholder: textData.entityPlaceholder,
    type: 'text',
  },
  {
    label: textData.bikLabel,
    name: 'bik',
    placeholder: textData.bikPlaceholder,
    type: 'text',
  },
  {
    label: textData.checkAccountLabel,
    name: 'checkAccount',
    placeholder: textData.checkAccountPlaceholder,
    type: 'text',
  },
  {
    label: textData.corpAccountLabel,
    name: 'corpAccount',
    placeholder: textData.corpAccountPlaceholder,
    type: 'text',
  },
];

export const sellerNotifications = [
  {
    title: textData.emailTitle,
    list: [
      {
        id: 1,
        label: textData.orders,
        name: 'ordersEmail',
      },
      {
        id: 2,
        label: textData.messages,
        name: 'messagesEmail',
      },
      {
        id: 3,
        label: textData.news,
        name: 'newsEmail',
      },
    ],
  },
  {
    title: textData.pushTitle,
    list: [
      {
        id: 4,
        label: textData.orders,
        name: 'ordersPush',
      },
      {
        id: 5,
        label: textData.messages,
        name: 'messagesPush',
      },
      {
        id: 6,
        label: textData.news,
        name: 'newsPush',
      },
    ],
  },
  {
    title: textData.phoneTitle,
    list: [
      {
        id: 7,
        label: textData.orders,
        name: 'ordersPhone',
      },
      {
        id: 8,
        label: textData.messages,
        name: 'messagesPhone',
      },
      {
        id: 9,
        label: textData.news,
        name: 'newsPhone',
      },
    ],
  },
];

export const securityData = [
  {
    label: 'Старый пароль',
    name: 'oldPassword',
    placeholder: 'Старый пароль',
    type: 'password',
  },
  {
    label: 'Новый пароль',
    name: 'newPassword',
    placeholder: 'Новый пароль',
    type: 'password',
  },
  {
    label: 'Повторите пароль',
    name: 'confirmPassword',
    placeholder: 'Повторите пароль',
    type: 'password',
  },
];

export const signInFormData = [
  {
    name: 'fullName',
    label: 'Имя',
    placeholder: 'Имя',
    type: 'text',
  },
  {
    name: 'email',
    label: 'E-mail',
    placeholder: 'Введите E-mail',
    type: 'text',
  },
  {
    name: 'password',
    label: 'Пароль',
    placeholder: 'Введите пароль',
    type: 'password',
  },
];

export const registrationFormData = [
  {
    label: 'isEmail',
    fields: [
      {
        name: 'fullName',
        label: 'Имя',
        placeholder: 'Имя',
        type: 'text',
      },
      {
        name: 'email',
        label: 'E-mail',
        placeholder: 'Введите E-mail',
      },
      {
        name: 'password',
        label: 'Пароль',
        placeholder: 'Введите пароль',
        type: 'password',
      },
      {
        name: 'confirmPassword',
        label: 'Пароль',
        placeholder: 'Введите пароль',
        type: 'password',
      },
    ],
  },
  {
    label: 'isPhone',
    isPhone: [
      {
        name: 'fullName',
        label: 'Имя',
        placeholder: 'Имя',
        type: 'text',
      },
      {
        name: 'phone',
        label: 'По телефону',
        placeholder: 'Введите телефон',
        type: 'tel',
      },
      {
        name: 'password',
        label: 'Пароль',
        placeholder: 'Введите пароль',
        type: 'password',
      },
      {
        name: 'confirmPassword',
        label: 'Пароль',
        placeholder: 'Введите пароль',
        type: 'password',
      },
    ],
  },
];

export const passwordProps = [
  {
    label: textData.oldPassword,
    name: 'oldPassword',
    placeholder: textData.oldPassword,
    type: 'password',
  },
  {
    label: textData.newPassword,
    name: 'newPassword',
    placeholder: textData.newPassword,
    type: 'password',
  },
  {
    label: textData.repitPassword,
    name: 'repitPassword',
    placeholder: textData.repitPassword,
    type: 'password',
  },
];

export const paymentFormData = [
  {
    name: 'ccmonth',
    label: 'Срок действия',
    placeholder: 'MM',
  },
  {
    name: 'ccyear',
    placeholder: 'ГГ',
  },
  {
    name: 'cvc',
    label: '3 цифры на обороте ',
    placeholder: 'CVC',
  },
];

export const stepsDataUser = [
  { id: 1, value: 'Личная информация' },
  { id: 2, value: 'Адрес доставки' },
  { id: 3, value: 'Уведомления' },
  { id: 4, value: 'Финансы' },
  { id: 5, value: 'Безопасность' },
];
