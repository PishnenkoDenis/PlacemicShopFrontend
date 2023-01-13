import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Button from '../Button';

import styles from './headerprofile.module.scss';

type THeaderProfile = {
  selectedId: number;
};

const labels = {
  1: 'Заказы',
  2: 'Возвраты и споры',
  3: 'Сообщения',
  4: 'Мои желания',
  5: 'Настройка профиля',
};

const HeaderProfile = ({ selectedId }: THeaderProfile) => {
  // const typeClass = styles[type];

  return (
    <div className={styles.container}>
      <div
        className={cn( {
          [styles.label]: true,
          [styles.help]: true,
          [styles.primary]: true,
        })}
      >
        {labels[selectedId]}
      </div>
      <Link to="/feedback">
        <Button type="help">Помощь</Button>
      </Link>
    </div>
  );
};

export default memo(HeaderProfile);
