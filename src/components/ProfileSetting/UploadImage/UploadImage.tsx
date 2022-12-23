import React, { memo, useState } from 'react';
import { ReactComponent as IconUser } from '../../../assets/IconUser.svg';
import { ReactComponent as LogoIcon } from '../../../assets/Logo.svg';
import { ReactComponent as WallpaperIcon } from '../../../assets/fill.svg';
import { SHOP_LOGO, SHOP_WALLPAPER, USER_LOGO } from '../../../constants';
import Button from '../../Button';
import Label from '../../Label';

import styles from './uploadImage.module.scss';

const uploadAvatar = ({ onClose, avatar, setAvatar, label, iconName }) => {
  const [selectedImage, setSelectedImage] = useState(avatar);

  const switchIcon = (value: string) => {
    switch (value) {
      case SHOP_LOGO:
        return <LogoIcon className={styles.icon} />;
      case SHOP_WALLPAPER:
        return <WallpaperIcon className={styles.icon} />;
      default:
        return <IconUser className={styles.icon} />;
    }
  };

  return (
    <div className={styles.uploadAvatarWrapper}>
      <Label label={label} />
      <label htmlFor="input" className={styles.iconBox}>
        {selectedImage ? (
          <div>
            <img
              className={styles.icon}
              alt="not found"
              src={URL.createObjectURL(selectedImage)}
            />
          </div>
        ) : (
          switchIcon(iconName)
        )}
      </label>
      <input
        id="input"
        hidden
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
      <Button
        onClick={() => {
          setAvatar(selectedImage);
          onClose();
        }}
        className={styles.button}
      >
        Сохранить фото
      </Button>
    </div>
  );
};

export default memo(uploadAvatar);
