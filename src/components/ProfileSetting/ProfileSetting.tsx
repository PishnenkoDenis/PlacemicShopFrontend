import React, { memo, useState, useRef, useCallback, useMemo } from 'react';
import cn from 'classnames';
import { Country, City } from 'country-state-city';
import Input from '../Input';
import DropDownList from '../DropDownList/DropDownList';
import Button from '../Button';
import { ReactComponent as IconUser } from '../../assets/IconUser.svg';
import UploadImage from './UploadImage';
import Wrapper from '../Wrapper';
import Label from '../Label';
import InputCheckbox from '../Input/InputCheckbox';

import {
  validateEmail,
  validatePhone,
  isEmpty,
  validateNumber,
  validateString,
  validateFrame,
} from '../../utils';

import styles from './profileSetting.module.scss';
import Modal from '../Modal/Modal';

const options = [
  { id: 1, value: 'Русский' },
  { id: 2, value: 'Английский' },
];
const currency = [
  { id: 1, value: ' Российский рубль (₽)' },
  { id: 2, value: ' Евро ' },
];

const maxDate = new Date();
const minDate = new Date('1980-06-06');

const optionsCountries = Country.getAllCountries().map(
  ({ name, isoCode }, index) => ({
    id: index,
    value: name,
    isoCode,
  })
);

const ProfileSetting = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState(1);
  const [moneys, setMoneys] = useState(1);
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [frame, setFrame] = useState('');
  const [apartment, setApartment] = useState('');

  const [countries, setCountries] = useState(0);
  const [city, setCity] = useState(0);

  const [notifyEmail, setNotifyEmail] = useState(false);
  const [orderInfoEmail, setOrderInfoEmail] = useState(false);
  const [messagesEmail, setMessagesEmail] = useState(false);
  const [newsEmail, setNewsEmail] = useState(false);

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotifyEmail(e.target.checked);
  };

  const handleChangeCheckedInfoEmail = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrderInfoEmail(e.target.checked);
  };

  const handleChangeCheckedMessagesEmail = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessagesEmail(e.target.checked);
  };
  const handleChangeCheckedNewsEmail = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewsEmail(e.target.checked);
  };

  const [notifyPush, setNotifyPush] = useState(false);
  const [orderInfoPush, setOrderInfoPush] = useState(false);
  const [messagesPush, setMessagesPush] = useState(false);
  const [newsPush, setNewsPush] = useState(false);

  const handleChangeCheckedNotifyPush = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotifyPush(e.target.checked);
  };

  const handleChangeCheckedOrderInfoPush = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrderInfoPush(e.target.checked);
  };

  const handleChangeCheckedMessagesPush = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessagesPush(e.target.checked);
  };
  const handleChangeCheckedNewsPush = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewsPush(e.target.checked);
  };

  const [notifyPhone, setNotifyPhone] = useState(false);
  const [orderInfoPhone, setOrderInfoPhone] = useState(false);
  const [messagesPhone, setMessagesPhone] = useState(false);
  const [newsPhone, setNewsPhone] = useState(false);

  const handleChangeCheckedNotifyPhone = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotifyPhone(e.target.checked);
  };

  const handleChangeCheckedOrderInfoPhone = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrderInfoPhone(e.target.checked);
  };

  const handleChangeCheckedMessagesPhone = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessagesPhone(e.target.checked);
  };
  const handleChangeCheckedNewsPhone = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewsPhone(e.target.checked);
  };
  const cityOptions = useMemo(() => {
    return City.getCitiesOfCountry(optionsCountries[countries].isoCode).map(
      ({ name }, index) => ({
        id: index,
        value: name,
      })
    );
  }, [countries]);

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refMiddleName = useRef(null);
  const refDate = useRef(null);
  const refEmail = useRef(null);
  const refPhone = useRef(null);
  const refStreet = useRef(null);
  const refHouse = useRef(null);
  const refFrame = useRef(null);
  const refApartament = useRef(null);

  return (
    <div>
      <Wrapper className={styles.alignText} isLine label="Личная информация">
        <div className={styles.profileContainer}>
          <span className={styles.label}>Фотография</span>
          {avatar ? (
            <div className={styles.iconBox}>
              <img
                role="button"
                tabIndex={0}
                onClick={() => setOpen(true)}
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
        <div className={styles.inputsBox}>
          <Input
            ref={refFirstName}
            label="Имя"
            placeholder="Имя"
            value={firstName}
            onChange={setFirstName}
            labelClassName={styles.labelWidth}
            inputClassName={styles.inputWidth}
            borderClass={styles.border}
            validate={validateString}
            isUpperError
          />
          <Input
            ref={refLastName}
            label="Фамилия"
            placeholder="Фамилия"
            value={lastName}
            onChange={setLastName}
            labelClassName={styles.labelWidth}
            inputClassName={styles.inputWidth}
            borderClass={styles.border}
            validate={validateString}
            isUpperError
          />
          <Input
            ref={refMiddleName}
            label="Отчество"
            placeholder="Отчество"
            value={middleName}
            onChange={setMiddleName}
            labelClassName={styles.labelWidth}
            inputClassName={styles.inputWidth}
            borderClass={styles.border}
            validate={validateString}
            isUpperError
          />
        </div>
        <div className={styles.dateBox}>
          <Input
            ref={refDate}
            label="Дата рождения"
            value={date}
            onChange={setDate}
            labelClassName={styles.labelWidthLarge}
            inputClassName={styles.inputWidthData}
            borderClass={styles.border}
            type="date"
            validate={isEmpty}
            min={minDate}
            max={maxDate}
          />
        </div>
        <div className={styles.inputsInfo}>
          <Input
            ref={refEmail}
            label="E-mail"
            placeholder="example@store.ru"
            value={email}
            onChange={setEmail}
            labelClassName={styles.labelWidthLarge}
            inputClassName={styles.inputWidthData}
            borderInput={styles.borderColorNone}
            withEdit
            validate={validateEmail}
            errorMessage="Некорректный email"
          />
          <Input
            ref={refPhone}
            label="Телефон"
            placeholder="Введите телефон"
            value={phone}
            onChange={setPhone}
            inputClassName={styles.inputWidthSm}
            labelClassName={styles.labelWidthLarge}
            borderInput={styles.borderColor}
            className={styles.inputProfile}
            borderClass={styles.border}
            type="tel"
            validate={validatePhone}
          />
        </div>
        <div className={styles.dropdownlistBox}>
          <span className={styles.label}>Выбрать язык</span>
          <DropDownList
            className={styles.dropdownListSize}
            border={styles.borderDropdownList}
            value={value}
            onChange={setValue}
            options={options}
          />
        </div>
        <div className={styles.dropdownlistBox}>
          <span className={styles.label}>Выбрать валюту</span>
          <DropDownList
            className={styles.dropdownListSize}
            border={styles.borderDropdownList}
            value={moneys}
            options={currency}
            onChange={setMoneys}
          />
        </div>
      </Wrapper>
      <Wrapper className={styles.alignText} isLine label="Адрес доставки">
        <Label className={styles.subTitle} label="Укажите ваш адрес" />
        <div className={styles.dropdownlistBox}>
          <span className={styles.label}>Выберете страну</span>
          <DropDownList
            className={styles.dropdownListSize}
            border={styles.borderDropdownList}
            value={countries}
            onChange={setCountries}
            options={optionsCountries}
          />
        </div>
        <div className={styles.dropdownlistBox}>
          <span className={styles.label}>Выберете город</span>
          <DropDownList
            className={styles.dropdownListSize}
            border={styles.borderDropdownList}
            value={city}
            options={cityOptions}
            onChange={setCity}
          />
        </div>
        <div className={cn(styles.inputsBox, styles.margin)}>
          <Input
            ref={refStreet}
            label="Улица"
            placeholder="Улица"
            value={street}
            onChange={setStreet}
            className={styles.inputStyle}
            labelClassName={styles.labelWidth}
            inputClassName={styles.inputWidthDeliveryAddress}
            borderClass={styles.borderGrey}
            validate={validateString}
            isUpperError
          />
          <Input
            ref={refHouse}
            label="Дом"
            placeholder="Дом"
            value={house}
            onChange={setHouse}
            className={styles.inputStyle}
            labelClassName={styles.labelWidth}
            inputClassName={styles.inputWidthDeliveryAddress}
            borderClass={styles.borderGrey}
            validate={validateNumber}
            isUpperError
          />
          <Input
            ref={refFrame}
            label="Корпус"
            placeholder="Корпус"
            value={frame}
            onChange={setFrame}
            className={styles.inputStyle}
            labelClassName={styles.labelWidth}
            inputClassName={styles.inputWidthDeliveryAddress}
            borderClass={styles.borderGrey}
            validate={validateFrame}
            isUpperError
          />
          <Input
            ref={refApartament}
            label="Квартира"
            placeholder="Квартира"
            value={apartment}
            onChange={setApartment}
            className={styles.inputStyle}
            labelClassName={styles.labelWidth}
            inputClassName={styles.inputWidthDeliveryAddress}
            borderClass={styles.borderGrey}
            validate={validateNumber}
            isUpperError
          />
        </div>
      </Wrapper>
      <Wrapper className={styles.alignText} isLine label="Уведомления">
        <div className={styles.inputCheckboxInner}>
          <InputCheckbox
            label="Оповещать на E-mail"
            isChecked={notifyEmail}
            onChange={handleChangeChecked}
            labelWidthCheckbox={styles.labelWidthCheckbox}
            labelCheckboxTitle={styles.labelCheckboxTitleStyle}
          />
          <InputCheckbox
            label="Информация о заказах"
            isChecked={orderInfoEmail}
            onChange={handleChangeCheckedInfoEmail}
            labelWidthCheckbox={styles.labelWidthCheckbox}
            className={styles.inputCheckbox}
          />
          <InputCheckbox
            label="Сообщения"
            isChecked={messagesEmail}
            onChange={handleChangeCheckedMessagesEmail}
            labelWidthCheckbox={styles.labelWidthCheckbox}
            className={styles.inputCheckbox}
          />
          <InputCheckbox
            label="Новости и акции"
            isChecked={newsEmail}
            onChange={handleChangeCheckedNewsEmail}
            labelWidthCheckbox={styles.labelWidthCheckbox}
            className={styles.inputCheckbox}
          />
        </div>
        <div className={styles.inputCheckboxInner}>
          <InputCheckbox
            isChecked={notifyPush}
            onChange={handleChangeCheckedNotifyPush}
            label="Оповещать по Push-уведомлениям"
            labelWidthCheckbox={styles.labelWidthCheckbox}
            labelCheckboxTitle={styles.labelCheckboxTitleStyle}
          />
          <InputCheckbox
            label="Информация о заказах"
            isChecked={orderInfoPush}
            onChange={handleChangeCheckedOrderInfoPush}
            labelWidthCheckbox={styles.labelWidthCheckbox}
          />
          <InputCheckbox
            label="Сообщения"
            isChecked={messagesPush}
            onChange={handleChangeCheckedMessagesPush}
            labelWidthCheckbox={styles.labelWidthCheckbox}
          />
          <InputCheckbox
            label="Новости и акции"
            isChecked={newsPush}
            onChange={handleChangeCheckedNewsPush}
            labelWidthCheckbox={styles.labelWidthCheckbox}
          />
        </div>
        <div className={styles.inputCheckboxInner}>
          <InputCheckbox
            label="Оповещать на телефон"
            isChecked={notifyPhone}
            onChange={handleChangeCheckedNotifyPhone}
            labelWidthCheckbox={styles.labelWidthCheckbox}
            labelCheckboxTitle={styles.labelCheckboxTitleStyle}
          />
          <InputCheckbox
            label="Информация о заказах"
            isChecked={orderInfoPhone}
            onChange={handleChangeCheckedOrderInfoPhone}
            labelWidthCheckbox={styles.labelWidthCheckbox}
          />
          <InputCheckbox
            label="Сообщения"
            isChecked={messagesPhone}
            onChange={handleChangeCheckedMessagesPhone}
            labelWidthCheckbox={styles.labelWidthCheckbox}
          />
          <InputCheckbox
            label="Новости и акции"
            isChecked={newsPhone}
            onChange={handleChangeCheckedNewsPhone}
            labelWidthCheckbox={styles.labelWidthCheckbox}
            className={styles.inputCheckbox}
          />
        </div>
      </Wrapper>
      <Button
        className={styles.button}
        size="large"
        onClick={() => {
          refFirstName?.current?.validate();
          refLastName?.current?.validate();
          refMiddleName?.current?.validate();
          refDate?.current?.validate();
          refEmail?.current?.validate();
          refPhone?.current?.validate();
          refStreet?.current?.validate();
          refHouse?.current?.validate();
          refFrame?.current?.validate();
          refApartament?.current?.validate();
        }}
      >
        Сохранить
      </Button>
    </div>
  );
};

export default memo(ProfileSetting);
