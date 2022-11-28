import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/logofooter3.svg';
import { ReactComponent as CopyrightSvg } from '../../assets/copyright.svg';
import MenuFooter from './components/MenuFooter';
import EmailBlock from './components/Connection/EmailBlock';
import SocialNetworks from './components/Connection/ SocialNetworks';
import ContainerBackground from '../ContainerBackground';

import styles from './footer.module.scss';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
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
        <LogoSvg onClick={handleClick} />
        <CopyrightSvg className={styles.copyrightSvg} />
      </div>
    </ContainerBackground>
  );
};

export default memo(Footer);
