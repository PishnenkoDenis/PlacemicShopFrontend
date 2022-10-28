import React, { memo } from 'react';

import cn from 'classnames';
import { ReactComponent as CheckIcon } from '../../../assets/checkIcon.svg';
import styles from './buttoncheck.module.scss';

type TButtonCheck = {
  children: any;
  className?: string;
  onClick: () => {};
};

const ButtonCheck = ({ onClick, children, className }: TButtonCheck) => {
  return (
    <div className={styles.allCategoriesBox}>
      <button
        className={cn(styles.button, className)}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
      <CheckIcon className={styles.checkIcon} />
    </div>
  );
};

export default memo(ButtonCheck);
