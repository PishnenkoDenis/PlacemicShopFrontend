import React, { memo } from 'react';
import cn from 'classnames';

import styles from './aside.module.scss';

const list = {
  admin: [
    { id: 1, tab: 'Заказы' },
    { id: 2, tab: 'Каталог товаров' },
    { id: 3, tab: 'Сообщения' },
    { id: 4, tab: 'Отзывы' },
    { id: 5, tab: 'Настройки профиля' },
  ],
  user: [
    { id: 1, tab: 'Заказы' },
    { id: 2, tab: 'Возвраты и споры' },
    { id: 3, tab: 'Сообщения' },
    { id: 4, tab: 'Мои желания' },
    { id: 5, tab: 'Настройки профиля' },
  ],
};

export type TAsideProps = {
  selectedId: number;
  setSelectedId: (id: number) => void;
};

const Aside = ({ selectedId, setSelectedId }: TAsideProps) => {
  const currentRole = 'user';

  return (
    <div className={styles.container}>
      {list[currentRole].map((item) => (
        <button
          type="button"
          className={cn(
            styles.list,
            selectedId === item.id && styles.activeListItems
          )}
          key={item.id}
          onClick={() => {
            setSelectedId(item.id);
          }}
        >
          {item.tab}
        </button>
      ))}
    </div>
  );
};

export default memo(Aside);
