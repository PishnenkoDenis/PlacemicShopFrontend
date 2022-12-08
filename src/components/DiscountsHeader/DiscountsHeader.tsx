import React, { memo, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button';

import styles from './discountsHeader.module.scss';

const tabs = [
  { name: 'Товары', path: 'product_list' },
  { name: 'Характеристики', path: 'characteristics' },
  { name: 'Скидки', path: 'discounts' },
  { name: 'Загрузка товаров', path: 'products_loading' },
];

const DiscountsHeader = () => {
  const navigate = useNavigate();

  const navigateToSupport = useCallback(() => navigate('/support'), [navigate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.upside}>
        <span className={styles.title}>Скидки</span>
        <Button type="help" onClick={navigateToSupport}>
          Помощь
        </Button>
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
