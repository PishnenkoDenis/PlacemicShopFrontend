import React from 'react';
import cn from 'classnames';
import { ReactComponent as InfoSvg } from '../../assets/information.svg';
import styles from './button.module.scss';

type TProps = {
  children: any;
  className?: string;
  onClick?: () => {};
  type?: 'primary' | 'secondary' | 'outlined' | 'contained' | 'help';
  size?: 'large' | 'medium';
  text?: 'gradient';
  icon?: string;
  isRounded?: boolean;
};

const Button = ({
  children,
  className,
  onClick,
  type = 'primary',
  size = 'medium',
  text,
  icon = 'icon',
  isRounded = false,
}: TProps) => {
  const sizeClass = styles[size];
  const typeClass = styles[type];
  const textClass = styles[text];
  const iconClass = styles[icon];
  const roundClass = isRounded ? styles.isRounded : {};

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        styles.main,
        sizeClass,
        typeClass,
        roundClass,
        className,
        iconClass
      )}
    >
      {type === 'help' && <InfoSvg className={styles.infoSvg} />}
      <span className={textClass}>{children}</span>
    </button>
  );
};

export default Button;
