import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TFooterService } from '../../../../types';

import styles from './menuFooter.module.scss';

type TProps = {
  service: TFooterService;
};

const MenuFooterItems = ({ service: { subservices } }: TProps) => {
  return (
    <ul className={styles.list}>
      {subservices.map((item) => (
        <li className={styles.listItem} key={item.id}>
          <Link className={styles.link} to={item.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(MenuFooterItems);
