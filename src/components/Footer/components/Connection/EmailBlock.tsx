import React, { memo } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../Button';
import InputNew from '../../../Input/InputNew';

import styles from './connection.module.scss';
import { signupSchema } from '../../../../utils';

const EmailBlock = () => {
  return (
    <div className={styles.emailBox}>
      <span className={styles.labelEmail}>
        Хотите быть в курсе последних новостей и акций?
      </span>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={signupSchema}
        onSubmit={(values, { setSubmitting }) => {
          // TODO: I'll deleted it when I connect the bac
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={styles.inputBox}>
          <InputNew
            name="email"
            placeholder="konstantinkonstantinov@yandex.ru"
            type="email"
            className={styles.border}
          />
          <Button
            className={styles.buttonStyle}
            size="medium"
            type="contained"
            text="gradient"
          >
            Подписаться
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default memo(EmailBlock);
