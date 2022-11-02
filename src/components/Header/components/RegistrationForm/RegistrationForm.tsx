import React, { memo, useCallback, useState } from 'react';

import cn from 'classnames';
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

  const onChangeEmail = (e) => {
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

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeTelephone = (e) => {
    setTelephone(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeConfirm = (e) => {
    setConfirm(e.target.value);
  };

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
          onChange={onChangeEmail}
          className={styles.inputStyle}
        />
      ) : (
        <Input
          label="По телефону"
          placeholder="Введите телефон"
          value={telephone}
          onChange={onChangeTelephone}
          className={styles.inputStyle}
        />
      )}
      {!isLoginFormType && (
        <Input
          label="Город"
          placeholder="Введите город"
          value={city}
          onChange={onChangeCity}
          className={styles.inputStyle}
        />
      )}
      <Input
        label="Пароль"
        placeholder="Введите пароль"
        isPassword
        value={password}
        onChange={onChangePassword}
        className={styles.inputStyle}
      />
      {!isLoginFormType && (
        <Input
          label="Подтвердить"
          placeholder="Введите пароль"
          value={confirm}
          isPassword
          onChange={onChangeConfirm}
          className={styles.inputStyle}
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
