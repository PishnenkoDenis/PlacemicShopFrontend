import React, { memo } from 'react';
import { Outlet } from 'react-router';
import DiscountsHeader from '../../components/DiscountsHeader';

import styles from './productsPage.module.scss';

const ProductsPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <DiscountsHeader />
      <Outlet />
    </div>
  );
};

export default memo(ProductsPage);
