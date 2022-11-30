import React, { memo } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './sellerPage.module.scss';

const sideMenu = [
  { id: 1, tab: 'Заказы', path: 'orders' },
  { id: 2, tab: 'Каталог товаров', path: 'products' },
  { id: 3, tab: 'Сообщения', path: 'messages' },
  { id: 4, tab: 'Отзывы', path: 'comments' },
  { id: 5, tab: 'Настройки профиля', path: 'settings' },
];

function SellerPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {sideMenu.map((item) => (
          <li className={styles.list} key={item.id}>
            <Link to={`/sellerpage/${item.path}`} className={styles.item}>
              {item.tab}
            </Link>
          </li>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default memo(SellerPage);
