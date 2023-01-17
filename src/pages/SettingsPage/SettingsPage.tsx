import React, { memo, useCallback, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router';

import { useMutation } from '@apollo/client';
import styles from './settingsPage.module.scss';
import { setNotifications, validateShopSettings } from '../../utils';
import Button from '../../components/Button';
import APP_ROUTE_PATHS from '../../appRoutePaths';
import UploadImage from '../../components/ProfileSetting/UploadImage';
import Modal from '../../components/Modal';
import { ReactComponent as LogoIcon } from '../../assets/Logo.svg';
import { ReactComponent as WallpaperIcon } from '../../assets/fill.svg';
import { ReactComponent as WallpaperClose } from '../../assets/CloseWallpaper.svg';
import InputNew from '../../components/Input/InputNew';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import {
  bankProps,
  contactsProps,
  legalEntityProps,
  passwordProps,
  selectProps,
  sellerNotifications,
} from '../../data/data';
import NavigationBlock from '../../components/NavigationBlock';
import InputCheckbox from '../../components/Input/InputCheckbox';
import ButtonNew from '../../components/Button/ButtonNew';
import ADD_SHOP_SETTINGS from '../../graphQl/addShopSettings';
import {
  shopLogo,
  logo,
  shopWallpaper,
  shopName,
  shopNamePlaceholder,
  textareaLabel,
  textareaPlaceholder,
  wallpapers,
  wallpaperText,
  passwordMismatch,
} from '../../locale/ru.json';

const initialValues = {
  title: '',
  description: '',
  userId: null,
  telephone: '',
  email: '',
  address: '',
  language: '',
  currency: '',
  legalEntity: '',
  inn: '',
  kpp: '',
  legalAddress: '',
  bank: '',
  bik: '',
  checkAccount: '',
  corpAccount: '',
  newPassword: '',
  oldPassword: '',
  repitPassword: '',
  ordersEmail: false,
  messagesEmail: false,
  newsEmail: false,
  ordersPush: false,
  messagesPush: false,
  newsPush: false,
  ordersPhone: false,
  messagesPhone: false,
  newsPhone: false,
};

const navigateSteps = [
  { id: 1, value: 'О магазине' },
  { id: 2, value: 'Контакты' },
  { id: 3, value: 'Реквизиты' },
  { id: 4, value: 'Уведомления' },
  { id: 5, value: 'Безопасность' },
];

const SettingsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const paramId = Number(id);

  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [wallpaper, setWallpaper] = useState(null);
  const [iconName, setIconName] = useState('');
  const [label, setLabel] = useState('');

  const [createShop] = useMutation(ADD_SHOP_SETTINGS);

  const handleOpen = () => {
    setOpen(true);
    setIconName(shopLogo);
    setLabel(logo);
  };

  const handleWallpaperOpen = () => {
    setOpen(true);
    setIconName(shopWallpaper);
    setLabel(wallpapers);
  };

  const imgName = iconName === shopLogo ? 'logo' : 'wallpaper';

  const closeWallpaperPreview = () => setWallpaper(null);

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const navigateToSupport = useCallback(
    () => navigate(`/${APP_ROUTE_PATHS.support}`),
    [navigate]
  );
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <div className={styles.formHeader}>
          <span className={styles.title}>Настройки профиля</span>
          <Button type="help" onClick={navigateToSupport}>
            Помощь
          </Button>
        </div>
        <span className={styles.aboutShop} id="1">
          О магазине
        </span>
      </div>
      <NavigationBlock steps={navigateSteps} />
      <Formik
        initialValues={initialValues}
        validationSchema={validateShopSettings}
        onSubmit={async (values, actions) => {
          const {
            repitPassword,
            ordersEmail,
            messagesEmail,
            newsEmail,
            ordersPush,
            messagesPush,
            newsPush,
            ordersPhone,
            messagesPhone,
            newsPhone,
            userId,
            ...other
          } = values;

          await createShop({
            variables: {
              dto: {
                ...other,
                userId: paramId,
                logo: avatar,
                wallpaper,
                notifications: setNotifications(
                  ordersEmail,
                  messagesEmail,
                  newsEmail,
                  ordersPhone,
                  messagesPhone,
                  newsPhone,
                  ordersPush,
                  messagesPush,
                  newsPush
                ),
              },
            },
          });
          actions.resetForm();
        }}
      >
        {({ values, handleChange, touched }) => (
          <Form className={styles.form}>
            <div className={styles.shop}>
              <div className={styles.common}>
                <div className={styles.profileContainer}>
                  <span className={styles.label}>Логотип</span>
                  {avatar ? (
                    <div className={styles.iconBox}>
                      <img
                        role="button"
                        tabIndex={0}
                        onClick={handleOpen}
                        className={styles.icon}
                        alt="not found"
                        src={URL.createObjectURL(avatar)}
                      />
                    </div>
                  ) : (
                    <LogoIcon
                      className={styles.iconLogo}
                      onClick={handleOpen}
                    />
                  )}
                </div>
                {open && (
                  <Modal onClose={handleClose}>
                    <UploadImage
                      onClose={handleClose}
                      avatar={avatar}
                      name={imgName}
                      setAvatar={setAvatar}
                      wallpaper={wallpaper}
                      setWallpaper={setWallpaper}
                      label={label}
                      iconName={iconName}
                    />
                  </Modal>
                )}
                <div className={styles.inputContainer}>
                  <Field
                    as={InputNew}
                    label={shopName}
                    name="title"
                    key={shopName}
                    placeholder={shopNamePlaceholder}
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.areaContainer}>
                  <Field
                    as={Textarea}
                    label={textareaLabel}
                    name="description"
                    placeholder={textareaPlaceholder}
                    onChange={handleChange}
                    cols={50}
                    rows={30}
                  />
                </div>
                <div className={styles.wallpaperContainer}>
                  <span className={styles.wallpaperLabel}>Добавить обои</span>
                  <div className={styles.innerContainer}>
                    {wallpaper ? (
                      <div className={styles.wallpaperBox}>
                        <img
                          role="button"
                          tabIndex={0}
                          onClick={handleWallpaperOpen}
                          className={styles.wallpaper}
                          alt="not found"
                          src={URL.createObjectURL(wallpaper)}
                        />
                        <WallpaperClose
                          className={styles.wallpaperClose}
                          onClick={closeWallpaperPreview}
                        />
                      </div>
                    ) : (
                      <>
                        <WallpaperIcon
                          className={styles.wallpaper}
                          onClick={handleWallpaperOpen}
                        />
                        <span className={styles.wallpaperText}>
                          {wallpaperText}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                {selectProps.map((prop) => (
                  <div className={styles.inputContainer} key={prop.name}>
                    <Field
                      as={Select}
                      label={prop.label}
                      options={prop.options}
                      name={prop.name}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.contacts}>
                <span className={styles.contactsTitle} id="2">
                  Контакты
                </span>
                {contactsProps.map((prop) => (
                  <div className={styles.contactContainer}>
                    <Field
                      as={InputNew}
                      label={prop.label}
                      name={prop.name}
                      key={prop.name}
                      placeholder={prop.placeholder}
                      type={prop.type}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.border} />
            <div className={styles.details}>
              <span className={styles.detailsTitle} id="3">
                Реквизиты
              </span>
              <div className={styles.legalEntity}>
                <span className={styles.legalTitle}>Юридическое лицо</span>
                {legalEntityProps.map((prop) => (
                  <div className={styles.detailContainer}>
                    <Field
                      as={InputNew}
                      label={prop.label}
                      name={prop.name}
                      key={prop.name}
                      placeholder={prop.placeholder}
                      type={prop.type}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.bank}>
                <span className={styles.bankTitle}>Банк</span>
                {bankProps.map((prop) => (
                  <div className={styles.detailContainer}>
                    <Field
                      as={InputNew}
                      label={prop.label}
                      name={prop.name}
                      key={prop.name}
                      placeholder={prop.placeholder}
                      type={prop.type}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.border} />
            <div className={styles.notifications}>
              <span className={styles.notifyTitle} id="4">
                Уведомления
              </span>
              <div className={styles.notifyContainer}>
                {sellerNotifications.map((data) => (
                  <div className={styles.checkboxContainer}>
                    <div>{data.title}</div>
                    {data?.list?.map((item) => (
                      <Field
                        as={InputCheckbox}
                        key={item.name}
                        label={item.label}
                        name={item.name}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.border} />
            <div className={styles.safety}>
              <span className={styles.safetyTitle} id="5">
                Безопасность
              </span>
              <span className={styles.changePassword}>Смена пароля</span>
              {passwordProps.map((prop) => (
                <div className={styles.passwordContainer}>
                  <Field
                    as={InputNew}
                    label={prop.label}
                    name={prop.name}
                    key={prop.name}
                    placeholder={prop.placeholder}
                    type={prop.type}
                    onChange={handleChange}
                  />
                </div>
              ))}
              {touched.repitPassword &&
                values.newPassword !== values.repitPassword && (
                  <span className={styles.passwordMismatch}>
                    {passwordMismatch}
                  </span>
                )}
            </div>
            <ButtonNew size="large" className={styles.button} type="submit">
              Сохранить
            </ButtonNew>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default memo(SettingsPage);
