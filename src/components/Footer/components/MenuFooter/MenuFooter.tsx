import React, { memo } from 'react';
import { services } from '../../../../data/data';
import MenuFooterItems from './  MenuFooterItems';

import styles from './menuFooter.module.scss';

const MenuFooter = () => {
  return (
    <div className={styles.servicesBox}>
      {services.map((service) => (
        <MenuFooterItems service={service} key={service.id} />
      ))}
    </div>
  );
};

export default memo(MenuFooter);
