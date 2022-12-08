import React, { memo } from 'react';
import { Outlet, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import styles from './sellerPage.module.scss';

const sideMenu = [
  { id: 1, tab: 'Заказы', path: 'orders' },
  { id: 2, tab: 'Каталог товаров', path: 'products' },
  { id: 3, tab: 'Сообщения', path: 'messages' },
  { id: 4, tab: 'Отзывы', path: 'comments' },
  { id: 5, tab: 'Настройки профиля', path: 'settings' },
];

function SellerPage() {
  const { id } = useParams();
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {sideMenu.map((item) => (
          <li className={styles.list} key={item.id}>
            <NavLink
              to={`/sellerpage/${id}/${item.path}`}
              className={({ isActive }) =>
                isActive ? styles.active : styles.item
              }
            >
              {item.tab}
            </NavLink>
          </li>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default memo(SellerPage);
