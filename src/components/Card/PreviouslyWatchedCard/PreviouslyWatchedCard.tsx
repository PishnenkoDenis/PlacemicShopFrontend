import React from 'react';
import { TPreviouslyWatchedCard } from '../../../types';

import styles from './previouslyCard.module.scss';

const PreviouslyWatchedCard = ({ item }: TPreviouslyWatchedCard) => {
  return (
    <div className={styles.previouslyWatchedCardBox}>
      <div className={styles.productImage}>
        <img className={styles.productImage} src={item.image} alt="product" />
      </div>
      <div className={styles.description}>
        {item.shortDesc}
        <div className={styles.price}>от{item.currentPrice} ₽</div>
      </div>
    </div>
  );
};

export default PreviouslyWatchedCard;
