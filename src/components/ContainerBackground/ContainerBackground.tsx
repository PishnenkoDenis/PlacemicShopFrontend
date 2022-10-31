import React, { memo } from 'react';

import cn from 'classnames';
import styles from './containerBackground.module.scss';

type TContainerBackground = {
  children: React.ReactNode;
  className: string;
};

const ContainerBackground = ({ children, className }: TContainerBackground) => {
  return (
    <div className={cn(styles.backgroundBox, className)}>
      <div className={styles.footerContainer}>{children}</div>
    </div>
  );
};

export default memo(ContainerBackground);
