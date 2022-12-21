import React, { memo, useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';

import CREATE_USER from '../../../../graphQl/createUser';
import LOGIN_USER from '../../../../graphQl/loginUser';
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
import { ALREADY_REGISTERED, ENTER, FORGOT_PASSWORD, REGISTER, SELLER_ROLE } from '../../../../constants';
import APP_ROUTE_PATHS from '../../../../appRoutePaths';

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

const RegistrationForm = ({ setModalCondition }{ onClose }) => {
  const navigate = useNavigate();

  const [newUser] = useMutation(CREATE_USER);
  const [loginUser] = useMutation(LOGIN_USER);

  const [userRole, setUserRole] = useState<string>('');
  const [sellerId, setSellerId] = useState<number>(0);
  const [sellerName, setSellerName] = useState<string>('');

  const [formType, setFormType] = useState<string>(LOGIN);
  const [email, setEmail] = useState<string>('');
  const [telephone, setTelephone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginType, setLoginType] = useState<number>(EMAIL);
  const [city, setCity] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [message, setMessage] = useState(false);

  const isEmail = loginType === EMAIL;
  const changeLoginTypeMessage = isEmail ? 'По номеру телефона' : 'По E-mail';

  const isLoginFormType = formType === LOGIN;
  const title = isLoginFormType ? 'Вход' : 'Регистрация';

  const setUserData = (id: number, role: string, name: string = '') => {
    setSellerId(id);
    setUserRole(role);
    setSellerName(name);
  };

  const setAfterAuthAction = (role: string, id: number) => {
    setModalCondition(false);
    if (role === SELLER_ROLE) navigate(`${APP_ROUTE_PATHS.sellerpage}/${id}`);
    else navigate('/');
  };

  const register = async (e: Event) => {
    e.preventDefault();
    try {
      const { data } = await newUser({
        variables: {
          user: {
            email,
            password,
            fullName,
            role,
          },
        },
      });
      const { id, role, fullName } = data.createUser;
      setUserData(id, role, fullName);
      setAfterAuthAction(role, id);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const login = async (e: Event) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: {
          user: {
            email,
            password,
          },
        },
      });
      const { id, role } = data.loginUser;
      setUserData(id, role);
      setAfterAuthAction(role, id);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const loginOrRegisterUser = (e: Event) => {
    if (isLoginFormType) login(e);
    else register(e);
  };

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
          value={userRole}
          onChange={setUserRole}
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
        
        className={cn(
          styles.submitButton,
          isLoginFormType && styles.isLoginForm
        )}
        onClick={(e: Event) => {
          loginOrRegisterUser(e);
          resetForm();
        }}
        size="large"
      >
        {isLoginFormType ? ENTER : REGISTER}
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
        {isLoginFormType ? FORGOT_PASSWORD : ALREADY_REGISTERED}
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
        {isLoginFormType ? REGISTER : ENTER}
      </Button>
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default memo(RegistrationForm);
