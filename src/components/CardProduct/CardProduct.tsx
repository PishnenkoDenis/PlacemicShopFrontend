import React, { memo, useState } from 'react';
import Button from '../Button/Button';

import starMik from '../../assets/starMik.svg';
import styles from './cardproduct.module.scss';

const CardProduct = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.cardBox}
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <div className={styles.innerContainer}>
        <div className={styles.imageProductBox}>
          <img className={styles.image} src={item.image} alt="product-icon" />
          {item.discount === 0 ? null : (
            <div className={styles.discount}>{item.discount}%</div>
          )}
        </div>
        <div className={styles.price}>
          <div
            className={
              item.discount ? styles.currentPrice : styles.currentPriceBlack
            }
          >
            {item.currentPrice} ₽
          </div>
          {item.discount === 0 ? null : (
            <div className={styles.oldPrice}>
              {item.oldPrice} ₽
              <div className={styles.line} />
            </div>
          )}
        </div>
        {open && (
          <div className={styles.grade}>
            <div className={styles.rating}>
              {item.rating}
              <img
                className={styles.ratingIcon}
                src={starMik}
                alt="rating-icon"
              />
            </div>
            <div className={styles.review}>{item.review} отзывов</div>
          </div>
        )}
        {!open ? (
          <div className={styles.shortDesccription}>{item.shortDesc}</div>
        ) : (
          <>
            <div className={styles.longDescription}>{item.longDesc}</div>
            <div className={styles.buttonBox}>
              <Button className={styles.buttonStyle} size="large">
                В корзину
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default memo(CardProduct);
