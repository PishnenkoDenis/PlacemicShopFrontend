import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Button from '../Button';

import styles from './headerprofile.module.scss';

type THeaderProfile = {
  labels: string;
  type?: string;
  text?: string;
};

const labels = {
  1: 'Заказы',
  2: 'Возвраты и споры',
  3: 'Сообщения',
  4: 'Мои желания',
  5: 'Настройка профиля',
};

const HeaderProfile = ({
  selectedId,
  type = 'help',
  text = 'primary',
}: THeaderProfile) => {
  const typeClass = styles[type];
  const textClass = styles[text];
  return (
    <div className={styles.container}>
      <div className={cn(styles.label, typeClass, textClass)}>
        {labels[selectedId]}
      </div>
      <Link to="/feedback">
        <Button type="help">Помощь</Button>
      </Link>
    </div>
  );
};

export default memo(HeaderProfile);
