import React, { memo, useCallback, useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';

import styles from './settingsPage.module.scss';
import { validateShopSettings } from '../../utils';
import Button from '../../components/Button';
import APP_ROUTE_PATHS from '../../appRoutePaths';
import UploadImage from '../../components/ProfileSetting/UploadImage';
import Modal from '../../components/Modal';
import {
  SHOP_LOGO,
  LOGO,
  SHOP_NAME,
  SHOP_NAME_PLACEHOLDER,
  TEXTAREA_LABEL,
  TEXTAREA_PLACEHOLDER,
  SHOP_WALLPAPER,
  WALLPAPER,
  WALLPAPER_TEXT,
} from '../../constants';
import { ReactComponent as LogoIcon } from '../../assets/Logo.svg';
import { ReactComponent as WallpaperIcon } from '../../assets/fill.svg';
import InputNew from '../../components/Input/InputNew';
import Textarea from '../../components/Texarea';
import Select from '../../components/Select';
import {
  bankProps,
  contactsProps,
  legalEntityProps,
  passwordProps,
  selectProps,
  sellerNotifications,
} from '../../data/data';
import InputCheckbox from '../../components/Input/InputCheckbox';

const SettingsPage = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [wallpaper, setWallpaper] = useState(null);
  const [iconName, setIconName] = useState('');
  const [label, setLabel] = useState('');

  const handleOpen = () => {
    setOpen(true);
    setIconName(SHOP_LOGO);
    setLabel(LOGO);
  };

  const handleWallpaperOpen = () => {
    setOpen(true);
    setIconName(SHOP_WALLPAPER);
    setLabel(WALLPAPER);
  };
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
        <span className={styles.aboutShop}>О магазине</span>
      </div>
      <Formik
        initialValues={{
          title: '',
          description: '',
          logo: null,
          userId: null,
          wallpaper: null,
          telephone: null,
          email: '',
          address: '',
          language: '',
          currency: '',
          legalEntity: '',
          inn: null,
          kpp: null,
          legalAddress: '',
          bank: '',
          bik: null,
          checkAccount: '',
          corpAcount: '',
          notifyEmail: ['', '', ''],
          notifyPush: ['', '', ''],
          notifyTelephone: ['', '', ''],
          newPassword: '',
          oldPassword: '',
        }}
        validationSchema={validateShopSettings}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(props) => (
          <form className={styles.form} onSubmit={props.handleSubmit}>
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
                      setAvatar={setAvatar}
                      label={label}
                      iconName={iconName}
                    />
                  </Modal>
                )}
                <div className={styles.inputContainer}>
                  <InputNew
                    label={SHOP_NAME}
                    name="title"
                    key={SHOP_NAME}
                    placeholder={SHOP_NAME_PLACEHOLDER}
                    type="text"
                    value={props.values.title}
                  />
                </div>
                <div className={styles.areaContainer}>
                  <Textarea
                    label={TEXTAREA_LABEL}
                    name="description"
                    placeholder={TEXTAREA_PLACEHOLDER}
                    value={props.values.description}
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
                      </div>
                    ) : (
                      <WallpaperIcon
                        className={styles.wallpaper}
                        onClick={handleWallpaperOpen}
                      />
                    )}
                    <span className={styles.wallpaperText}>
                      {WALLPAPER_TEXT}
                    </span>
                  </div>
                </div>
                {open && wallpaper && (
                  <Modal onClose={handleClose}>
                    <UploadImage
                      onClose={handleClose}
                      avatar={wallpaper}
                      setAvatar={setWallpaper}
                      label={WALLPAPER}
                      iconName={iconName}
                    />
                  </Modal>
                )}
                {selectProps.map((prop) => (
                  <div className={styles.inputContainer} key={prop.name}>
                    <Select
                      label={prop.label}
                      options={prop.options}
                      name={prop.name}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.contacts}>
                <span className={styles.contactsTitle}>Контакты</span>
                {contactsProps.map((prop) => (
                  <div className={styles.contactContainer}>
                    <InputNew
                      label={prop.label}
                      name={prop.name}
                      key={prop.name}
                      placeholder={prop.placeholder}
                      type={prop.type}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.border} />
            <div className={styles.details}>
              <span className={styles.detailsTitle}>Реквизиты</span>
              <div className={styles.legalEntity}>
                <span className={styles.legalTitle}>Юридическое лицо</span>
                {legalEntityProps.map((prop) => (
                  <div className={styles.detailContainer}>
                    <InputNew
                      label={prop.label}
                      name={prop.name}
                      key={prop.name}
                      placeholder={prop.placeholder}
                      type={prop.type}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.bank}>
                <span className={styles.bankTitle}>Банк</span>
                {bankProps.map((prop) => (
                  <div className={styles.detailContainer}>
                    <InputNew
                      label={prop.label}
                      name={prop.name}
                      key={prop.name}
                      placeholder={prop.placeholder}
                      type={prop.type}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.border} />
            <div className={styles.notifications}>
              <span className={styles.notifyTitle}>Уведомления</span>
              <div className={styles.notifyContainer}>
                {sellerNotifications.map((data) => (
                  <div className={styles.checkboxContainer}>
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
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.border} />
            <div className={styles.safety}>
              <span className={styles.safetyTitle}>Безопасность</span>
              <span className={styles.changePassword}>Смена пароля</span>
              {passwordProps.map((prop) => (
                <div className={styles.passwordContainer}>
                  <InputNew
                    label={prop.label}
                    name={prop.name}
                    key={prop.name}
                    placeholder={prop.placeholder}
                    type={prop.type}
                  />
                </div>
              ))}
            </div>
            <Button size="large" className={styles.button}>Сохранить</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default memo(SettingsPage);
