import React, { memo } from 'react';

import cn from 'classnames';
import password from '../../assets/password.svg';
import styles from './input.module.scss';

type TInput = {
  label: string | undefined;
  placeholder: string | undefined;
  isPassword?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  labelWidth?: number;
  width?: number;
  value: string;
  className?: string;
};

const Input = ({
  label,
  placeholder,
  isPassword,
  value,
  onChange,
  labelWidth = 110,
  width = 296,
  className,
}: TInput) => {
  return (
    <div className={cn(styles.container, className)}>
      {label && (
        <div className={styles.label} style={{ width: labelWidth }}>
          {label}
        </div>
      )}
      <input
        className={styles.input}
        onChange={onChange}
        placeholder={placeholder}
        style={{ width }}
        value={value}
        type={isPassword ? 'password' : ''}
      />
      {isPassword && (
        <div>
          <img className={styles.passwordIcon} src={password} alt="password" />
        </div>
      )}
    </div>
  );
};
export default memo(Input);
