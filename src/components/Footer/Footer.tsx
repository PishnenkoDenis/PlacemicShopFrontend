import React, { memo } from 'react';
import { ReactComponent as LogoSvg } from '../../assets/logofooter3.svg';
import { ReactComponent as CopyrightSvg } from '../../assets/copyright.svg';
import MenuFooter from './components/MenuFooter/MenuFooter';
import EmailBlock from './components/Connection/EmailBlock';
import SocialNetworks from './components/Connection/ SocialNetworks';
import ContainerBackground from '../ContainerBackground/ContainerBackground';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <ContainerBackground className={styles.background}>
      <div className={styles.footerTop}>
        <MenuFooter />
        <div className={styles.connection}>
          <EmailBlock />
          <SocialNetworks />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <LogoSvg />
        <CopyrightSvg className={styles.copyrightSvg} />
      </div>
    </ContainerBackground>
  );
};

export default memo(Footer);
