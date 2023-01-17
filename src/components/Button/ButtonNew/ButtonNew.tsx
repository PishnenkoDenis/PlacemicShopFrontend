import React from 'react';
import cn from 'classnames';
import { ReactComponent as InfoSvg } from '../../../assets/information.svg';
import styles from './buttonNew.module.scss';

type TProps = {
  children: any;
  className?: string;
  onClick?: () => void;
  sort?: 'primary' | 'secondary' | 'outlined' | 'contained' | 'help';
  size?: 'large' | 'medium';
  text?: 'gradient';
  icon?: string;
  isRounded?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button = ({
  children,
  className,
  sort = 'primary',
  size = 'medium',
  text,
  icon = 'icon',
  isRounded = false,
  type,
  onClick,
}: TProps) => {
  const sizeClass = styles[size];
  const typeClass = styles[sort];
  const textClass = styles[text];
  const iconClass = styles[icon];

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        styles.main,
        { [styles.isRounded]: isRounded },
        sizeClass,
        typeClass,
        className,
        iconClass
      )}
    >
      {sort === 'help' && <InfoSvg className={styles.infoSvg} />}
      <span className={textClass}>{children}</span>
    </button>
  );
};

export default Button;
