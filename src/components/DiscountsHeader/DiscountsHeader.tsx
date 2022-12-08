import React, { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../Button';

import styles from './discountsHeader.module.scss';

const tabs = [
  { name: 'Товары', path: 'product_list' },
  { name: 'Характеристики', path: 'characteristics' },
  { name: 'Скидки', path: 'discounts' },
  { name: 'Загрузка товаров', path: 'products_loading' },
];

const DiscountsHeader = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className={styles.wrapper}>
      <div className={styles.upside}>
        <span className={styles.title}>Скидки</span>
        <Button type="help">Помощь</Button>
      </div>
      <div className={styles.downside}>
        <div className={styles.tabs}>
          {tabs.map((item) => (
            <NavLink
              key={item.name}
              to={`${item.path}`}
              className={({ isActive }) =>
                isActive ? styles.active : styles.tabItem
              }
            >
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
        <div className={styles.border} />
      </div>
    </div>
  );
};

export default memo(DiscountsHeader);
