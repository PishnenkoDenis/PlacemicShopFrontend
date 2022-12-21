import React, { memo, useState, useRef, useCallback, useMemo } from 'react';
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
import InputCheckbox from '../Input/InputCheckbox/InputCheckbox';
import {
  notificationsData,
  userData,
  deliveryAddressData,
  userDataInfo,
  dropdownlistUserData,
} from '../../data/data';

import { signupSchema } from '../../utils';

import styles from './profileSettingNew.module.scss';
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

  // const renderInput = ({ label, name, placeholder }, idnex) => {
  //   switch (idnex) {
  //     case 1:
  //     case 2:
  //     case 3:
  //       return (
  //         <div style={}>
  //           <InputNew
  //             key={label}
  //             label={label}
  //             name={name}
  //             type="text"
  //             placeholder={placeholder}
  //             withEdit={name === 'email'}
  //             isPassword={name === 'password'}
  //           />
  //         </div>
  //       );
  //     default:
  //       return <></>;
  //   }
  // };
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
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            language: [],
            currency: [],
          }}
          validationSchema={signupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className={styles.form}>
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
                <div className={styles.userDataInfoBox}>
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
                </div>
              ))}
            </div>
            <div className={styles.dropdownlistBox}>
              {dropdownlistUserData.map((item) => (
                <DropDownListNew label={item.label}>
                  
                  </DropDownListNew>
              ))}
            </div>
            <div className={styles.dropdownlistBox}>
              <span className={styles.label}>Выбрать валюту</span>
              {/* <DropDownList
                className={styles.dropdownListSize}
                border={styles.borderDropdownList}
                value={moneys}
                options={currency}
                onChange={setMoneys}
              /> */}
            </div>
          </Form>
        </Formik>
      </Wrapper>
      <Wrapper className={styles.alignText} isLine label="Адрес доставки">
        <Label className={styles.subTitle} label="Укажите ваш адрес" />
        <Formik
          initialValues={{
            street: '',
            house: '',
            frame: '',
            apartament: '',
          }}
          validationSchema={signupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form
            className={cn(
              styles.inputCheckboxInner,
              styles.formDeliveryAddress
            )}
          >
            {/* <div className={styles.dropdownlistBox}>
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
            </div> */}
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
          </Form>
        </Formik>
      </Wrapper>
      <Wrapper className={styles.alignText} isLine label="Уведомления">
        <Formik
          initialValues={{
            notifyEmail: false,
            orderInfoEmail: false,
            messagesEmail: false,
            newsEmail: false,
            notifyPush: false,
            orderInfoPush: false,
            messagesPush: false,
            newsPush: false,
            notifyPhone: false,
            orderInfoPhone: false,
            messagesPhone: false,
            newsPhone: false,
          }}
          validationSchema={signupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className={styles.inputCheckboxInner}>
            {notificationsData.map((data) => (
              <>
                <InputCheckbox
                  key={data.name}
                  label={data.label}
                  name={data.name}
                />
                {data?.list?.map((item) => (
                  <InputCheckbox
                    key={item.name}
                    label={item.label}
                    name={item.name}
                  />
                ))}
              </>
            ))}
          </Form>
        </Formik>
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
