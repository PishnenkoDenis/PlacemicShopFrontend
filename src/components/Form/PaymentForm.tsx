import React, { memo } from 'react';
import { Form, Formik } from 'formik';
import { signupSchema } from '../../utils';
import { paymentFormData } from '../../data/data';
import { ReactComponent as MasterCardLogo2 } from '../../assets/logo_maestro.svg';
import { ReactComponent as MasterCardLogo } from '../../assets/mastercard_logo.svg';
import { ReactComponent as MirLogo } from '../../assets/mir-logo.svg';
import { ReactComponent as VisaLogo } from '../../assets/visa.svg';

import Button from '../Button';
import TextArea from '../TextArea';
import Wrapper from '../Wrapper';
import InputNew from '../Input/InputNew';

import styles from './paymentForm.module.scss';

const PaymentForm = () => {
  return (
    <Wrapper className={styles.alignText} label="Привязка банковской карты">
      <Formik
        initialValues={{
          commentTextArea: '',
          numberCard: '',
          ccmonth: '',
          confirmPassword: '',
          cvc: '',
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
        <Form className={styles.formPaymentSystem}>
          <div className={styles.inputsBox}>
            <div className={styles.cardLogo}>
              <VisaLogo />
              <MasterCardLogo />
              <MasterCardLogo2 />
              <MirLogo />
            </div>
            <InputNew
              placeholder="Номер карты"
              name="numberCard"
              className={styles.input}
            />
            <div className={styles.inputBoxFree}>
              {paymentFormData.map((data) => (
                <InputNew
                  key={data.name}
                  name={data.name}
                  label={data.label}
                  placeholder={data.placeholder}
                  isDirection
                />
              ))}
            </div>
          </div>
          <TextArea
            name="commentTextArea"
            placeholder="Ваш комментарий"
            isResize
          />
        </Form>
      </Formik>
      <Button size="large" className={styles.button}>
        Сохранить
      </Button>
    </Wrapper>
  );
};

export default memo(PaymentForm);
