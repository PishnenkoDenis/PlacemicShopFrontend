import React, { memo, useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
// import { useMutation } from '@apollo/client';
// import { CREATE_USER } from '../../../../graphQl/mutation';
import Tabs from '../../../Tabs';
import Input from '../../../Input';
import Button from '../../../Button';
import DropDownList from '../../../DropDownList/DropDownList';
import {
  validateEmail,
  validatePhone,
  isEmpty,
  validatePassword,
  validatePasswordConfirm,
} from '../../../../utils';

import styles from './registrationForm.module.scss';

const options = [
  { id: 1, label: 'По E-mail' },
  { id: 2, label: 'По телефону' },
];
const optionsRole = [
  { id: 1, value: 'Покупатель' },
  { id: 2, value: 'Продавец' },
];

const EMAIL = 1;
const TELEPHONE = 2;

const LOGIN = 'login';
const REGISTRATION = 'registation';

const RegistrationForm = ({ onClose }) => {
  const [formType, setFormType] = useState(LOGIN);
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState(EMAIL);
  const [city, setCity] = useState('');
  const [confirm, setConfirm] = useState('');
  const [role, setRole] = useState(1);
  const [message, setMessage] = useState(false);

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
      <div className={styles.dropdownlistBox}>
        <span className={styles.label}> Я</span>
        <DropDownList
          className={styles.dropdownListSize}
          border={styles.borderDropdownList}
          value={role}
          onChange={setRole}
          options={optionsRole}
        />
      </div>
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
        onClick={() => {
          if (formType === LOGIN) {
            loginHandler();
          } else {
            addUser();
          }
        }}
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
          onClick={() => {
            resetForm();
            setLoginType((prev) => (prev === EMAIL ? TELEPHONE : EMAIL));
          }}
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
          setMessage();
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
