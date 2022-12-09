import React, { memo, useState, useRef, useCallback } from 'react';
import Input from '../Input';
import DropDownList from '../DropDownList/DropDownList';
import Button from '../Button';
import { ReactComponent as IconUser } from '../../assets/IconUser.svg';
import UploadImage from './UploadImage';
import Wrapper from '../Wrapper';

import {
  validateFirstName,
  validatLastName,
  validateMiddleName,
  validateEmail,
  validatePhone,
  isEmpty,
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

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refMiddleName = useRef(null);
  const refDate = useRef(null);
  const refEmail = useRef(null);
  const refPhone = useRef(null);
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
        <div className={styles.fullName}>
          <Input
            ref={refFirstName}
            label="Имя"
            placeholder="Имя"
            value={firstName}
            onChange={setFirstName}
            className={styles.inputStyle}
            labelClassName={styles.labelWidth}
            inputClassName={styles.inputWidth}
            borderClass={styles.border}
            validate={validateFirstName}
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
            validate={validatLastName}
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
            validate={validateMiddleName}
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
          />
        </div>
        <div className={styles.inputsBox}>
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
            inputClassName={styles.inputWidthTelephone}
            labelClassName={styles.labelWidthLarge}
            borderInput={styles.borderColor}
            className={styles.inputProfile}
            borderClass={styles.border}
            type="tel"
            validate={validatePhone}
            isUpperError
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
      <Button
        className={styles.button}
        size="large"
        onClick={() => {
          refFirstName?.current?.validate();
          refLastName.current.validate();
          refMiddleName.current.validate();
          refDate.current.validate();
          refEmail.current.validate();
          refPhone.current.validate();
        }}
      >
        Сохранить
      </Button>
    </div>
  );
};

export default memo(ProfileSetting);
