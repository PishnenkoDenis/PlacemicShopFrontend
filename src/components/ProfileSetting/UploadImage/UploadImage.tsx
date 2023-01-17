import React, { memo, useState } from 'react';
import { ReactComponent as IconUser } from '../../../assets/IconUser.svg';
import { ReactComponent as LogoIcon } from '../../../assets/Logo.svg';
import { ReactComponent as WallpaperIcon } from '../../../assets/fill.svg';
import { SHOP_LOGO, SHOP_WALLPAPER } from '../../../constants';
import Button from '../../Button';
import Label from '../../Label';

import styles from './uploadImage.module.scss';

type TUploadImage = {
  onClose?: () => void;
  avatar?: any;
  setAvatar: (val: any) => void;
  label: string;
  iconName: string;
  wallpaper?: any;
  setWallpaper?: (val: any) => void;
  name: string;
  onChange?: () => void;
};

const uploadAvatar = ({
  label,
  onClose,
  setAvatar,
  setWallpaper,
  iconName,
  name,
}: TUploadImage) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

  const isImage = iconName === SHOP_LOGO;

  const selectedImage = isImage ? selectedAvatar : selectedWallpaper;

  const setSelectedImage = (value: any) =>
    isImage ? setSelectedAvatar(value) : setSelectedWallpaper(value);

  const setImage = (value: any) =>
    isImage ? setAvatar(value) : setWallpaper(value);

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
        name={name}
        onChange={(event) => {
          setSelectedImage(event.target.files?.[0] || null);
        }}
      />
      <Button
        onClick={() => {
          setImage(selectedImage);
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
