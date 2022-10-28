import React from 'react';
import { Link } from 'react-router-dom';
import { TAdvertisingCard } from '../../../types';

import styles from './advertisingCard.module.scss';

const AdvertisingCard = ({ item }: TAdvertisingCard) => {
  return (
    <div className={styles.advertisingCardBox}>
      <Link to={item.link} key={item.id}>
        <img
          className={styles.advertisingCardIcon}
          src={item.image}
          alt="product"
        />
      </Link>
    </div>
  );
};

export default AdvertisingCard;
