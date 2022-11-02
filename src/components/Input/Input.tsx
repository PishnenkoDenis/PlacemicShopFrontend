import React, { memo, useState } from 'react';

import cn from 'classnames';
import { ReactComponent as PasswordSvgActive } from '../../assets/passwordActive.svg';
import { ReactComponent as PasswordSvg } from '../../assets/password.svg';
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
  const [visible, setVisible] = useState(false);

  const visibleHandler = () => {
    setVisible(!visible);
  };
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
        type={isPassword && !visible ? 'password' : 'text'}
      />
      {isPassword && (
        <div onClick={visibleHandler}>
          {visible ? (
            <PasswordSvgActive className={styles.passwordIcon} />
          ) : (
            <PasswordSvg className={styles.passwordIcon} />
          )}
        </div>
      )}
    </div>
  );
};
export default memo(Input);
