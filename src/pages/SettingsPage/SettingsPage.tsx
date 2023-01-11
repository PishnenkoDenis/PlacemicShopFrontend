import React, { memo, useCallback, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router';

import { useMutation } from '@apollo/client';
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
  PASSWORDS_MISMATCH,
} from '../../constants';
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
import InputCheckbox from '../../components/Input/InputCheckbox';
import ButtonNew from '../../components/Button/ButtonNew';
import ADD_SHOP_SETTINGS from '../../graphQl/addShopSettings';
import UPLOAD_FILE from '../../graphQl/uploadFile';

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

  const [uploadFiles] = useMutation(UPLOAD_FILE);

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

  const imgName = iconName === SHOP_LOGO ? 'logo' : 'wallpaper';

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
        <span className={styles.aboutShop}>О магазине</span>
      </div>
      <Formik
        initialValues={{
          title: '',
          description: '',
          userId: paramId,
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
          corpAccount: '',
          notifyEmail: null,
          notifyPush: null,
          notifyTelephone: null,
          newPassword: '',
          oldPassword: '',
          repitPassword: '',
          orderEmail: null,
          messagesEmail: null,
          newsEmail: null,
          orderPush: null,
          messagesPush: null,
          newsPush: null,
          orderPhone: null,
          messagesPhone: null,
          newsPhone: null,
        }}
        validationSchema={validateShopSettings}
        onSubmit={async (values, actions) => {
          const {
            repitPassword,
            orderEmail,
            newsEmail,
            messagesEmail,
            orderPush,
            newsPush,
            messagesPush,
            orderPhone,
            newsPhone,
            messagesPhone,
            ...other
          } = values;

          // const files = [avatar, wallpaper];
          // const { data } = await uploadFiles({
          //   variables: {
          //     input: {
          //       ...other,
          //       notifyEmail: [orderEmail, newsEmail, messagesEmail],
          //       notifyPush: [orderPush, newsPush, messagesPush],
          //       notifyTelephone: [orderPhone, newsPhone, messagesPhone],
          //       logo: files[0],
          //       wallpaper: files[1],
          //       data: 'asd',
          //       data2: [12, 23],
          //     },
          //   },
          // });
          // const [avatarUrl, wallpaperUrl] = data.uploadFiles;

          await createShop({
            variables: {
              dto: {
                ...other,
                logo: avatar,
                wallpaper,
                notifyEmail: [orderEmail, newsEmail, messagesEmail],
                notifyPush: [orderPush, newsPush, messagesPush],
                notifyTelephone: [orderPhone, newsPhone, messagesPhone],
              },
            },
          });
          actions.resetForm();
        }}
      >
        {({ values, handleChange, setFieldValue, errors, touched }) => (
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
                    label={SHOP_NAME}
                    name="title"
                    key={SHOP_NAME}
                    placeholder={SHOP_NAME_PLACEHOLDER}
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.areaContainer}>
                  <Field
                    as={Textarea}
                    label={TEXTAREA_LABEL}
                    name="description"
                    placeholder={TEXTAREA_PLACEHOLDER}
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
                          {WALLPAPER_TEXT}
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
                <span className={styles.contactsTitle}>Контакты</span>
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
              <span className={styles.detailsTitle}>Реквизиты</span>
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
              <span className={styles.notifyTitle}>Уведомления</span>
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
                        onChange={(e) =>
                          setFieldValue(
                            `${item.name}`,
                            e.target.checked ? item.name : null
                          )
                        }
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
                    {PASSWORDS_MISMATCH}
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
