import React, { memo, useState } from 'react';
import { ReactComponent as IconUser } from '../../../assets/IconUser.svg';
import Button from '../../Button';
import Label from '../../Label';

import styles from './uploadImage.module.scss';

const uploadAvatar = ({ onClose, avatar, setAvatar }) => {
  const [selectedImage, setSelectedImage] = useState(avatar);

  return (
    <div className={styles.uploadAvatarWrapper}>
      <Label label="Добавить фото" />
      <label htmlFor="input" className={styles.iconBox}>
        {selectedImage ? (
          <div>
            <img
              className={styles.icon}
              alt="not fount"
              src={URL.createObjectURL(selectedImage)}
            />
          </div>
        ) : (
          <IconUser className={styles.icon} />
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
