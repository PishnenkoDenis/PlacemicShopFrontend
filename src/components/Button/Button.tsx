import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

type TProps = {
  children: any;
  className?: string;
  onClick?: () => {};
  type?: 'primary' | 'secondary' | 'outlined' | 'contained';
  size?: 'large' | 'medium';
  text?: 'gradient';
  isRounded?: boolean;
};

const Button = ({
  children,
  className,
  onClick,
  type = 'primary',
  size = 'medium',
  text,
  isRounded = false,
}: TProps) => {
  const sizeClass = styles[size];
  const typeClass = styles[type];
  const textClass = styles[text];
  const roundClass = isRounded ? styles.isRounded : {};

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.main, sizeClass, typeClass, roundClass, className)}
    >
      <span className={textClass}>{children}</span>
    </button>
  );
};

export default Button;
