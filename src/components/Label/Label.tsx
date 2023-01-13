import React, { memo } from 'react';
import cn from 'classnames';
import styles from './label.module.scss';

type TLabel = {
  label: string;
  className?: string;
};

const Label = ({ label, className }: TLabel) => {
  return (
    <div
      className={cn(className, {
        [styles.label]: true,
        [styles.primary]: true,
      })}
    >
      {label}
    </div>
  );
};

export default memo(Label);
