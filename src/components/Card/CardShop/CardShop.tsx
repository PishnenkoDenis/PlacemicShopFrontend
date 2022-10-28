import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TCardShop } from '../../../types';

import styles from './cardshop.module.scss';

const CardShop = ({ item }: TCardShop) => {
  return (
    <div className={styles.shopBox}>
      <div>
        <Link className={styles.shopTop} to={item.link}>
          <img className={styles.shopLogo} src={item.logo} alt="shoplogo" />
          <img className={styles.shopName} src={item.name} alt="shopName" />
        </Link>
      </div>
      <div className={styles.shopBottom}>
        <div className={styles.imageBox}>
          {item?.products.map((products) => (
            <Link
              className={styles.imageLink}
              to={products.link}
              key={products.id}
            >
              <img
                className={styles.imageItem}
                src={products.icon}
                alt="icon"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(CardShop);
