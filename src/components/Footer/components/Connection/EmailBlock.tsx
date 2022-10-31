import React, { memo } from 'react';
import Button from '../../../Button/Button';

import styles from './connection.module.scss';

const EmailBlock = () => {
  return (
    <div className={styles.emailBox}>
      <span className={styles.labelEmail}>
        Хотите быть в курсе последних новостей и акций?
      </span>
      <div className={styles.inputBox}>
        <div className={styles.inputInner}>
          <input
            placeholder="konstantinkonstantinov@yandex.ru"
            className={styles.input}
          />
        </div>
        <Button
          className={styles.buttonStyle}
          size="medium"
          type="contained"
          text="gradient"
        >
          Подписаться
        </Button>
      </div>
    </div>
  );
};

export default memo(EmailBlock);
