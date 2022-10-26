import React, { ReactNode } from 'react';

import styles from './wrapper.module.scss';

type TWrapper = {
  label: string;
  children: ReactNode;
};

const Wrapper = ({ label, children }: TWrapper) => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>{label}</div>
      {children}
    </section>
  );
};

export default Wrapper;
