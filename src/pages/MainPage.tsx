import React, {
  memo,
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react';
import { Link } from 'react-router-dom';
import { throttle } from 'lodash';
import PopularCategories from '../components/PopularCategories/PopularCategories';
import CardProduct from '../components/CardProduct/CardProduct';
import Button from '../components/Button/Button';
import CardShop from '../components/CardShop/CardShop';
import AdvertisingCard from '../components/AdvertisingCard/AdvertisingCard';
import Wrapper from '../components/Wrapper/Wrapper';
import {
  shops,
  advertising,
  noveltiesProducts,
  products,
} from './mainPageArray';

import styles from './index.module.scss';

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

function MainPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const setWidthContainer = useCallback(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    setWidthContainer();
    const throttleSetWidthContainer = throttle(setWidthContainer, 300);
    window.addEventListener('resize', throttleSetWidthContainer);
    return () => {
      window.removeEventListener('resize', throttleSetWidthContainer);
    };
  }, [setWidthContainer]);

  const yourShops = useMemo(() => {
    let arrlenght = 12;

    const arr = shops.map((item) => ({
      type: 'shop',
      data: item,
    }));

    advertising.forEach((i, index) => {
      let temp = 3 + 4 * index;
      if (width < 732) {
        arrlenght = 4;
        temp = 1 + 2 * index;
      } else if (width < 1262) {
        temp = 2 + 3 * index;
        arrlenght = 6;
      }
      if (arr.length <= temp) return;
      arr.splice(temp, 0, { type: 'ad', data: i });
    });

    return arr.splice(0, arrlenght).map((i, index) => {
      return { ...i, id: index };
    });
  }, [width]);

  return (
    <div>
      <PopularCategories />

      <Wrapper label="Успей купить">
        <div className={styles.cardProductbox}>
          {products.map((item) => (
            <CardProduct item={item} key={item.id} />
          ))}
        </div>
        <div className={styles.buttonBox}>
          <Link to="/page2">
            <Button className={styles.buttonStyle} type="outlined" size="large">
              Вce товары
            </Button>
          </Link>
        </div>
      </Wrapper>
      <Wrapper label="Новинки">
        <div className={styles.cardProductbox}>
          {noveltiesProducts.slice(0, 12).map((item) => (
            <CardProduct item={item} key={item.id} />
          ))}
        </div>
        <div className={styles.buttonBox}>
          <Link to="/page2">
            <Button className={styles.buttonStyle} type="outlined" size="large">
              Вce товары
            </Button>
          </Link>
        </div>
      </Wrapper>
      <Wrapper label="Магазины для вас">
        <div className={styles.cardShopsBox} ref={ref}>
          {yourShops.map((item) => {
            if (item.type === 'shop') {
              return <CardShop item={item.data} key={item.id} />;
            }
            return <AdvertisingCard item={item.data} key={item.id} />;
          })}
        </div>
        <div className={styles.buttonBox}>
          <Link to="/page2">
            <Button className={styles.buttonStyle} type="outlined" size="large">
              Все магазины
            </Button>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}

export default memo(MainPage);
