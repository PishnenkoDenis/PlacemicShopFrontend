import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

import styles from './discountsHeader.module.scss';

const tabs = [
  { name: 'Товары', path: 'product_list' },
  { name: 'Характеристики', path: 'characteristics' },
  { name: 'Скидки', path: 'discounts' },
  { name: 'Загрузка товаров', path: 'products_loading' },
];

const DiscountsHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.upside}>
        <span className={styles.title}>Скидки</span>
        <Button type="help">Помощь</Button>
      </div>
      <div className={styles.downside}>
        <div className={styles.tabs}>
          {tabs.map((item) => (
            <Link
              key={item.name}
              to={`${item.path}`}
              className={styles.tabItem}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className={styles.border} />
      </div>
    </div>
  );
};

export default memo(DiscountsHeader);
