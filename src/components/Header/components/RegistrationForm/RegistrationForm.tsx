import React, { memo, useCallback, useState } from 'react';

import cn from 'classnames';
// import { useMutation } from '@apollo/client';
// import { CREATE_USER } from '../../../../graphQl/mutation';
import Tabs from '../../../Tabs/Tabs';
import Input from '../../../Input/Input';
import Button from '../../../Button/Button';

import styles from './registrationForm.module.scss';

const options = [
  { id: 1, label: 'По E-mail' },
  { id: 2, label: 'По телефону' },
];

const EMAIL = 1;
const TELEPHONE = 2;

const LOGIN = 'login';
const REGISTRATION = 'registation';

const RegistrationForm = () => {
  // const [newUser] = useMutation(CREATE_USER);

  // const newUser = () => {};

  const [formType, setFormType] = useState(LOGIN);
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState(EMAIL);
  const [city, setCity] = useState('');
  const [confirm, setConfirm] = useState('');

  const isEmail = loginType === EMAIL;
  const changeLoginTypeMessage = isEmail ? 'По номеру телефона' : 'По E-mail';

  const isLoginFormType = formType === LOGIN;
  const title = isLoginFormType ? 'Вход' : 'Регистрация';

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const resetForm = useCallback(() => {
    setEmail('');
    setTelephone('');
    setPassword('');
    setLoginType(EMAIL);
    setCity('');
    setConfirm('');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {!isLoginFormType && (
        <Tabs
          selectedId={loginType}
          onChange={setLoginType}
          options={options}
          className={styles.tabsStyle}
        />
      )}
      {isEmail ? (
        <Input
          label="E-mail"
          placeholder="Введите E-mail"
          value={email}
          onChange={setEmail}
          className={styles.inputStyle}
          borderClass={styles.border}
        />
      ) : (
        <Input
          label="По телефону"
          placeholder="Введите телефон"
          value={telephone}
          onChange={setTelephone}
          className={styles.inputStyle}
          borderClass={styles.border}
        />
      )}
      {!isLoginFormType && (
        <Input
          label="Город"
          placeholder="Введите город"
          value={city}
          onChange={setCity}
          className={styles.inputStyle}
          borderClass={styles.border}
        />
      )}
      <Input
        label="Пароль"
        placeholder="Введите пароль"
        isPassword
        value={password}
        onChange={setPassword}
        className={styles.inputStyle}
        borderClass={styles.border}
      />
      {!isLoginFormType && (
        <Input
          label="Подтвердить"
          placeholder="Введите пароль"
          value={confirm}
          isPassword
          onChange={setConfirm}
          className={styles.inputStyle}
          borderClass={styles.border}
        />
      )}
      <Button
        className={cn(
          styles.submitButton,
          isLoginFormType && styles.isLoginForm
        )}
        size="large"
      >
        {isLoginFormType ? 'Войти' : 'Зарегистрироваться'}
      </Button>
      {isLoginFormType && (
        <div
          role="button"
          tabIndex={0}
          className={styles.telephone}
          onClick={() =>
            setLoginType((prev) => (prev === EMAIL ? TELEPHONE : EMAIL))
          }
        >
          {changeLoginTypeMessage}
        </div>
      )}
      <div
        className={cn(
          styles.resetPassword,
          !isLoginFormType && styles.isRegistrationForm
        )}
      >
        {isLoginFormType ? 'Забыли пароль?' : 'Уже зарегистрированы?'}
      </div>
      <Button
        type="secondary"
        className={styles.buttonRegistrationType}
        onClick={() => {
          setFormType((prev) => (prev === LOGIN ? REGISTRATION : LOGIN));
          resetForm();
        }}
        isRounded
      >
        {isLoginFormType ? 'Зарегистрироваться' : 'Войти'}
      </Button>
    </div>
  );
};

export default memo(RegistrationForm);
