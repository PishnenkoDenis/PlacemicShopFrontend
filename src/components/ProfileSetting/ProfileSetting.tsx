import React, { memo, useState, useCallback, useMemo } from 'react';
import { Form, Formik } from 'formik';
import cn from 'classnames';
import { Country, City } from 'country-state-city';
import InputNew from '../Input/InputNew';
import DropDownList from '../DropDownList/DropDownList';
import DropDownListNew from '../DropDownList/DropDownListNew';
import Button from '../Button';
import { ReactComponent as IconUser } from '../../assets/IconUser.svg';
import UploadImage from './UploadImage';
import Wrapper from '../Wrapper';
import Label from '../Label';
import SystemPaymentForm from '../Form/PaymentForm';
import InputCheckbox from '../Input/InputCheckbox/InputCheckbox';
import {
  notificationsData,
  userData,
  deliveryAddressData,
  userDataInfo,
  dropdownlistUserData,
  securityData,
  stepsDataUser,
} from '../../data/data';
// import NavigationBlock from '../NavigationBlock';

import { signupSchema } from '../../utils';

import styles from './profileSetting.module.scss';
import Modal from '../Modal/Modal';

const optionsCountries = Country.getAllCountries().map(
  ({ name, isoCode }, index) => ({
    id: index,
    value: name,
    isoCode,
  })
);

const ProfileSetting = () => {
  const [open, setOpen] = useState(false);
  const [openPaymentForm, setOpenPaymentForm] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const [countries, setCountries] = useState(0);
  const [city, setCity] = useState(0);

  const cityOptions = useMemo(() => {
    return City.getCitiesOfCountry(optionsCountries[countries].isoCode).map(
      ({ name }, index) => ({
        id: index,
        value: name,
      })
    );
  }, [countries]);

  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const handleCloseFormPayment = useCallback(
    () => setOpenPaymentForm(false),
    [setOpenPaymentForm]
  );

  return (
    <div className={styles.container}>
<<<<<<< HEAD
      {/* <NavigationBlock /> */}
=======
      <NavigationBlock steps={stepsDataUser} />
>>>>>>> develop
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          middleName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          language: '',
          currency: '',

          street: '',
          house: '',
          frame: '',
          apartament: '',
          countries: '',
          city: '',

          orderInfoEmail: false,
          messagesEmail: false,
          newsEmail: false,
          orderInfoPush: false,
          messagesPush: false,
          newsPush: false,
          orderInfoPhone: false,
          messagesPhone: false,
          newsPhone: false,

          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={signupSchema}
        onSubmit={(values, { setSubmitting }) => {
          // TODO: I'll deleted it when I connect the back
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={styles.form}>
          <Wrapper
            id="1"
            className={styles.alignText}
            isLine
            label="Личная информация"
          >
            <div className={styles.profileContainer}>
              <span className={styles.label}>Фотография</span>
              {avatar ? (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpen(true)}
                  className={styles.iconBox}
                >
                  <img
                    className={styles.icon}
                    alt="not fount"
                    src={URL.createObjectURL(avatar)}
                  />
                </div>
              ) : (
                <IconUser
                  className={styles.iconUser}
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
            {open && (
              <Modal onClose={handleClose}>
                <UploadImage
                  onClose={handleClose}
                  avatar={avatar}
                  setAvatar={setAvatar}
                />
              </Modal>
            )}
            <span className={styles.subTitle}>Основная информация</span>
            <div className={styles.inputBoxRow}>
              {userData.map(({ label, name, placeholder }) => (
                <InputNew
                  key={label}
                  label={label}
                  name={name}
                  type="text"
                  placeholder={placeholder}
                  withEdit={name === 'email'}
                  isPassword={name === 'password'}
                />
              ))}
            </div>
            <div className={styles.inputBoxInfo}>
              {userDataInfo.map(({ label, name, placeholder }) => (
                <InputNew
                  key={label}
                  label={label}
                  name={name}
                  type="text"
                  placeholder={placeholder}
                  withEdit={name === 'email'}
                  isPassword={name === 'password'}
                />
              ))}
              {dropdownlistUserData.map((data) => (
                <DropDownListNew
                  key={data.name}
                  label={data.label}
                  name={data.name}
                  options={data.options}
                />
              ))}
            </div>
          </Wrapper>
          <Wrapper
            className={styles.alignText}
            isLine
            label="Адрес доставки"
            id="2"
          >
            <Label className={styles.subTitle} label="Укажите ваш адрес" />
            <div className={styles.dropdownlistBox}>
              <DropDownList
                label="Выберете страну"
                value={countries}
                onChange={setCountries}
                options={optionsCountries}
              />
              <DropDownList
                label="Выберете город"
                value={city}
                onChange={setCity}
                options={cityOptions}
              />
            </div>
            <div className={styles.inputBoxRow}>
              {deliveryAddressData.map(({ label, name, placeholder }) => (
                <InputNew
                  key={label}
                  label={label}
                  name={name}
                  type="text"
                  placeholder={placeholder}
                  withEdit={name === 'email'}
                  isPassword={name === 'password'}
                  // calendar={name === 'date'}
                />
              ))}
            </div>
          </Wrapper>
          <Wrapper
            id="3"
            className={styles.alignText}
            isLine
            label="Уведомления"
          >
            <div className={styles.inputCheckboxInner}>
              {notificationsData.map((data) => (
                <>
                  <div className={styles.labelCheckboxTitle} key={data.name}>
                    {data.label}
                  </div>
                  {data?.list?.map((item) => (
                    <InputCheckbox
                      key={item.name}
                      label={item.label}
                      name={item.name}
                    />
                  ))}
                </>
              ))}
            </div>
          </Wrapper>
          <Wrapper id="4" className={styles.alignText} isLine label="Финансы">
            <span className={styles.description}>
              Здесь вы можете добавить карту для упрощения процесса оплаты ваших
              заказов
            </span>
            <Button
              className={styles.buttonFinance}
              type="add"
              onClick={() => setOpenPaymentForm(true)}
            >
              Добавить карту
            </Button>
            {openPaymentForm && (
              <Modal onClose={handleCloseFormPayment}>
                <SystemPaymentForm onClose={handleCloseFormPayment} />
              </Modal>
            )}
          </Wrapper>
          <Wrapper id="5" className={styles.alignText} label="Безопасность">
            <Label className={styles.subTitle} label="Смена пароля" />
            <div className={styles.formSecurity}>
              {securityData.map((data) => (
                <div className={styles.inputInner}>
                  <InputNew
                    key={data.name}
                    name={data.name}
                    label={data.label}
                    placeholder={data.placeholder}
                    withEdit={data.name === 'email'}
                    isPassword={data.name === 'password'}
                  />
                </div>
              ))}
            </div>
          </Wrapper>
        </Form>
      </Formik>
      <Button className={styles.button} size="large">
        Сохранить
      </Button>
    </div>
  );
};

export default memo(ProfileSetting);
