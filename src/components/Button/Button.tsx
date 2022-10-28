import React from 'react';

import cn from 'classnames';
import styles from './button.module.scss';

type TProps = {
  children: any;
  className?: string;
  onClick?: () => {};
  type?: 'primary' | 'secondary' | 'outlined';
  size?: 'large' | 'medium';
  isRounded?: boolean;
};

const Button = ({
  children,
  className,
  onClick,
  type = 'primary',
  size = 'medium',
  isRounded = false,
}: TProps) => {
  const sizeClass = styles[size];
  const typeClass = styles[type];
  const roundClass = isRounded ? styles.isRounded : {};

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.main, sizeClass, typeClass, roundClass, className)}
    >
      {children}
    </button>
  );
};

export default Button;
