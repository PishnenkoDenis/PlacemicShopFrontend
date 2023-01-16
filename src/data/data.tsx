import LogoUniqlo from '../assets/logoUniqlo.svg';
import marple from '../assets/marple.svg';
import shirt1 from '../assets/shirt1.svg';
import sale1 from '../assets/imgShopSale.svg';
import sale2 from '../assets/imageSaleGirls.svg';

import nov from '../assets/novelties1.svg';
import product1 from '../assets/product1.png';
import {
  ADDRESS,
  ADDRESS_PLACEHOLDER,
  BANK_LABEL,
  BIK_LABEL,
  BIK_PLACEHOLDER,
  CHECK_ACCOUNT_LABEL,
  CHECK_ACCOUNT_PLACEHOLDER,
  CORP_ACCOUNT_LABEL,
  CORP_ACCOUNT_PLACEHOLDER,
  CURRENCY_SELECT_LABEL,
  EMAIL,
  EMAIL_PLACEHOLDER,
  ENTITY_PLACEHOLDER,
  INN_LABEL,
  INN_PLACEHOLDER,
  KPP_LABEL,
  KPP_PLACEHOLDER,
  LANG_SELECT_LABEL,
  LEGAL_ADDRESS_LABEL,
  LEGAL_ENTITY_LABEL,
  MESSAGES,
  NEWS,
  NEW_PASSWORD,
  OLD_PASSWORD,
  ORDERS,
  REPIT_PASSWORD,
  TELEPHONE,
  TEL_PLACEHOLDER,
} from '../constants';
import LANGUAGES from '../languagesEnum';

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
    // name: 'notifyEmail',
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
    label: 'Выбрать язык',
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
    label: 'Выбрать валюту',
    name: 'currency',
    options: [
      {
        id: 1,
        value: 'Российский рубль (₽)',
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
    value: 'Российский рубль (₽)',
  },
  {
    id: 2,
    value: 'Американский доллар ($)',
  },
  {
    id: 3,
    value: ' Белорусский рубль (Br)',
  },
  {
    id: 4,
    value: 'Армянский драм (֏)',
  },
];

export const selectProps = [
  {
    label: LANG_SELECT_LABEL,
    options: languagesList,
    name: 'language',
  },
  {
    label: CURRENCY_SELECT_LABEL,
    options: currencyList,
    name: 'currency',
  },
];

export const contactsProps = [
  {
    label: TELEPHONE,
    name: 'telephone',
    placeholder: TEL_PLACEHOLDER,
    type: 'text',
  },
  {
    label: EMAIL,
    name: 'email',
    placeholder: EMAIL_PLACEHOLDER,
    type: 'email',
  },
  {
    label: ADDRESS,
    name: 'address',
    placeholder: ADDRESS_PLACEHOLDER,
    type: 'text',
  },
];

export const legalEntityProps = [
  {
    label: LEGAL_ENTITY_LABEL,
    name: 'legalEntity',
    placeholder: ENTITY_PLACEHOLDER,
    type: 'text',
  },
  {
    label: INN_LABEL,
    name: 'inn',
    placeholder: INN_PLACEHOLDER,
    type: 'text',
  },
  {
    label: KPP_LABEL,
    name: 'kpp',
    placeholder: KPP_PLACEHOLDER,
    type: 'text',
  },
  {
    label: LEGAL_ADDRESS_LABEL,
    name: 'legalAddress',
    placeholder: ADDRESS_PLACEHOLDER,
    type: 'text',
  },
];

export const bankProps = [
  {
    label: BANK_LABEL,
    name: 'bank',
    placeholder: ENTITY_PLACEHOLDER,
    type: 'text',
  },
  {
    label: BIK_LABEL,
    name: 'bik',
    placeholder: BIK_PLACEHOLDER,
    type: 'text',
  },
  {
    label: CHECK_ACCOUNT_LABEL,
    name: 'checkAccount',
    placeholder: CHECK_ACCOUNT_PLACEHOLDER,
    type: 'text',
  },
  {
    label: CORP_ACCOUNT_LABEL,
    name: 'corpAccount',
    placeholder: CORP_ACCOUNT_PLACEHOLDER,
    type: 'text',
  },
];

export const sellerNotifications = [
  {
    title: 'Оповещать на E-mail',
    list: [
      {
        id: 1,
        label: ORDERS,
        name: 'ordersEmail',
      },
      {
        id: 2,
        label: MESSAGES,
        name: 'messagesEmail',
      },
      {
        id: 3,
        label: NEWS,
        name: 'newsEmail',
      },
    ],
  },
  {
    title: 'Оповещать по Push-уведомлениям',
    list: [
      {
        id: 4,
        label: ORDERS,
        name: 'ordersPush',
      },
      {
        id: 5,
        label: MESSAGES,
        name: 'messagesPush',
      },
      {
        id: 6,
        label: NEWS,
        name: 'newsPush',
      },
    ],
  },
  {
    title: 'Оповещать на телефон',
    list: [
      {
        id: 7,
        label: ORDERS,
        name: 'ordersPhone',
      },
      {
        id: 8,
        label: MESSAGES,
        name: 'messagesPhone',
      },
      {
        id: 9,
        label: NEWS,
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

// export const registrationFormData = {
//   isEmail: [
//     {
//       name: 'fullName',
//       label: 'Имя',
//       placeholder: 'Имя',
//       type: 'text',
//     },
//     {
//       name: 'email',
//       label: 'E-mail',
//       placeholder: 'Введите E-mail',
//     },
//     {
//       name: 'password',
//       label: 'Пароль',
//       placeholder: 'Введите пароль',
//       type: 'password',
//     },
//     {
//       name: 'confirmPassword',
//       label: 'Пароль',
//       placeholder: 'Введите пароль',
//       type: 'password',
//     },
//   ],
//   isPhone: [
//     {
//       name: 'fullName',
//       label: 'Имя',
//       placeholder: 'Имя',
//       type: 'text',
//     },
//     {
//       name: 'phone',
//       label: 'По телефону',
//       placeholder: 'Введите телефон',
//       type: 'tel',
//     },
//     {
//       name: 'password',
//       label: 'Пароль',
//       placeholder: 'Введите пароль',
//       type: 'password',
//     },
//     {
//       name: 'confirmPassword',
//       label: 'Пароль',
//       placeholder: 'Введите пароль',
//       type: 'password',
//     },
//   ],
// };

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
    label: OLD_PASSWORD,
    name: 'oldPassword',
    placeholder: OLD_PASSWORD,
    type: 'password',
  },
  {
    label: NEW_PASSWORD,
    name: 'newPassword',
    placeholder: NEW_PASSWORD,
    type: 'password',
  },
  {
    label: REPIT_PASSWORD,
    name: 'repitPassword',
    placeholder: REPIT_PASSWORD,
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
