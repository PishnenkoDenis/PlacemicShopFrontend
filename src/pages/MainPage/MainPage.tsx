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
import Slider from '../../components/Slider/Slider';
import {
  products,
  shops,
  advertising,
  noveltiesProducts,
  recomProducts,
} from '../../data/data';
import PopularCategories from '../../components/MainPage/PopularCategories/PopularCategories';
import CardProduct from '../../components/Card/CardProduct/CardProduct';
import Button from '../../components/Button/Button';
import CardShop from '../../components/Card/CardShop/CardShop';
import AdvertisingCard from '../../components/Card/AdvertisingCard/AdvertisingCard';
import Wrapper from '../../components/Wrapper/Wrapper';
import DescriptionBlock from '../../components/MainPage/DescriptionBlock/DescriptionBlock';
import banner from '../../assets/baner1.svg';
import dog from '../../assets/imgShopSale.svg';
import { SCREEN_WIDTH } from '../../constants';

import styles from './mainPage.module.scss';

const items = [banner, dog, banner, dog, banner, dog, banner, dog, banner];

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
      if (width < SCREEN_WIDTH.sm) {
        arrlenght = 4;
        temp = 1 + 2 * index;
      } else if (width < SCREEN_WIDTH.md) {
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

  const productsFiltered = useMemo(() => {
    let arrlenght = 12;
    if (width < SCREEN_WIDTH.default) {
      arrlenght = 8;
    }
    return [...products].splice(0, arrlenght);
  }, [products, width]);

  const noveltiesProductsFiltered = useMemo(() => {
    let arrlenght = 12;
    if (width < SCREEN_WIDTH.default) {
      arrlenght = 8;
    }
    return [...noveltiesProducts].splice(0, arrlenght);
  }, [noveltiesProducts, width]);

  const recomProductsFiltered = useMemo(() => {
    let arrlenght = 36;
    if (width < SCREEN_WIDTH.default) {
      arrlenght = 24;
    }
    return [...recomProducts].splice(0, arrlenght);
  }, [recomProducts, width]);

  return (
    <div>
      <section className={styles.navigationSection}>
        <PopularCategories id={0} />
        <div className={styles.sliderWrapper}>
          <Slider items={items} size="medium" />
        </div>
      </section>
      <Wrapper label="Успей купить">
        <div className={styles.cardProductbox}>
          {productsFiltered.map((item) => (
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
          {noveltiesProductsFiltered.map((item) => (
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
      <Wrapper label="Рекомендуемые для вас товары">
        <div className={styles.cardProductbox} ref={ref}>
          {recomProductsFiltered.map((item) => (
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
      <Wrapper label="Широкий ассортимент и высокое качество">
        <DescriptionBlock />
      </Wrapper>
    </div>
  );
}

export default memo(MainPage);
