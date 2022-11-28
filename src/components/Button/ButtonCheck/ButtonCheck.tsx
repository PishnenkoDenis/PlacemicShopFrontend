import React, { memo, ReactNode } from 'react';
import cn from 'classnames';
import { ReactComponent as ArrowDownSvg } from '../../../assets/arrowDown.svg';
import { ReactComponent as ArrowUpSvg } from '../../../assets/arrowUp.svg';

import styles from './buttoncheck.module.scss';

type TButtonCheck = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  open: boolean;
};

const ButtonCheck = ({ open, onClick, children, className }: TButtonCheck) => {
  return (
    <div className={styles.allCategoriesBox}>
      <button
        className={cn(styles.button, className)}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
      {open ? <ArrowUpSvg /> : <ArrowDownSvg />}
    </div>
  );
};

export default memo(ButtonCheck);
