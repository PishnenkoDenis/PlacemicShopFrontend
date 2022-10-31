import React, { memo } from 'react';
import { ReactComponent as VkSvg } from '../../../../assets/vk.svg';
import { ReactComponent as FacebookSvg } from '../../../../assets/facebookIcon.svg';
import { ReactComponent as InstagramSvg } from '../../../../assets/instagram.svg';

import styles from './connection.module.scss';

const SocialNetworks = () => {
  return (
    <div className={styles.socialBox}>
      <span>Мы в соцсетях</span>
      <div className={styles.iconsBox}>
        <a
          className={styles.item}
          href="https://vk.com/"
          target="_blank"
          rel="noreferrer"
        >
          <VkSvg />
        </a>
        <a
          className={styles.item}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramSvg />
        </a>
        <a
          className={styles.item}
          href="https://ru-ru.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookSvg />
        </a>
      </div>
    </div>
  );
};

export default memo(SocialNetworks);
