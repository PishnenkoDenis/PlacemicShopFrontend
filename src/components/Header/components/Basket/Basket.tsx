import React, { memo } from 'react';
import { ReactComponent as ShopCart } from '../../../../assets/shopCart.svg';

import styles from './basket.module.scss';

type TBasket = {
  count: number;
};

const Basket = ({ count }: TBasket) => {
  return (
    <div className={styles.basket}>
      <div className={styles.imageContainer}>
        <div className={styles.count}>{count}</div>
        <ShopCart className={styles.basketIcon} />
      </div>
      <div className={styles.basketText}>Корзина</div>
    </div>
  );
};

export default memo(Basket);
