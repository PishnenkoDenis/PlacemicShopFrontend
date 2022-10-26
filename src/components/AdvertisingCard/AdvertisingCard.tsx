import React from 'react';
import { Link } from 'react-router-dom';

import styles from './advertisingCard.module.scss';

const AdvertisingCard = ({ item }) => {
  return (
    <div className={styles.advertisingCardBox}>
      <Link to={item.link} key={item.id}>
        <img
          className={styles.advertisingCardIcon}
          src={item.image}
          alt="image"
        />
      </Link>
    </div>
  );
};

export default AdvertisingCard;
