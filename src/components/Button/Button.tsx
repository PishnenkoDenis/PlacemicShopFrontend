import React from 'react';
import cn from 'classnames';
import { ReactComponent as InfoSvg } from '../../assets/information.svg';
import { ReactComponent as AddSvg } from '../../assets/btn-add.svg';
import styles from './button.module.scss';

type TProps = {
  children: any;
  className?: string;
  onClick?: () => void;
  type?: 'primary' | 'secondary' | 'outlined' | 'contained' | 'help' | 'add';
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

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(sizeClass, typeClass, className, iconClass, {
        [styles.main]: true,
        [styles.isRounded]: isRounded,
      })}
    >
      {type === 'help' && <InfoSvg className={styles.infoSvg} />}
      {type === 'add' && <AddSvg className={styles.addSvg} />}
      <span className={textClass}>{children}</span>
    </button>
  );
};

export default Button;
