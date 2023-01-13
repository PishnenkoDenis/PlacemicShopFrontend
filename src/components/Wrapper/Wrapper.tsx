import React, { ReactNode } from 'react';

import cn from 'classnames';
import styles from './wrapper.module.scss';

type TWrapper = {
  label: string;
  children: ReactNode;
  isLine?: boolean;
  className?: string;
  id?: string | number;
};

const Wrapper = ({
  label,
  children,
  className,
  isLine = false,
  id,
}: TWrapper) => {
  return (
    <section className={cn(styles.container, className, id)}>
      <div className={cn(styles.title, className)}>{label}</div>
      {children}
      {isLine && <div className={cn(styles.line)} />}
    </section>
  );
};

export default Wrapper;
