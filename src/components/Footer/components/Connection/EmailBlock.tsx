import React, { memo, useState } from 'react';
import Button from '../../../Button/Button';
import Input from '../../../Input/Input';
import { validateEmail } from '../../../../utils';

import styles from './connection.module.scss';

const EmailBlock = () => {
  const [email, setEmail] = useState('');
  return (
    <div className={styles.emailBox}>
      <span className={styles.labelEmail}>
        Хотите быть в курсе последних новостей и акций?
      </span>
      <div className={styles.inputBox}>
        <div className={styles.inputInner}>
          <Input
            value={email}
            onChange={setEmail}
            placeholder="konstantinkonstantinov@yandex.ru"
            type="email"
            borderClass={styles.border}
            validate={validateEmail}
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
