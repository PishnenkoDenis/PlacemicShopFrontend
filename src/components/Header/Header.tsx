import React, { memo, useCallback, useState, useEffect } from 'react';

import { ReactComponent as LogoHeader } from '../../assets/logoHeader.svg';
import Search from './components/SearchBar/SearchBar';
import Favorite from './components/Favorite/Favorite';
import Profile from './components/Profile/Profile';
import Basket from './components/Basket/Basket';
import DropDownList from '../DropDownList/DropDownList';
import DropDownListLanguage from '../DropDownList/DropDownListLanguage';
import Modal from '../Modal/Modal';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Sidebar from './components/Sidebar/Sidebar';
import { ReactComponent as MenuSvg } from '../../assets/menu.svg';

import styles from './header.module.scss';

const options = [
  { id: 0, value: 'Покупателям' },
  { id: 1, value: 'Покупателям2' },
  { id: 2, value: 'Покупателям3' },
  { id: 3, value: 'Покупателям4' },
  { id: 4, value: 'Покупателям5' },
  { id: 5, value: 'Покупателям6' },
  { id: 6, value: 'Покупателям7' },
];

const options2 = [
  { id: 0, value: 'Поставщикам' },
  { id: 1, value: 'Поставщикам2' },
  { id: 2, value: 'Поставщикам3' },
];

const Header = () => {
  const [value, setValue] = useState('Покупателям');
  const [suppliers, setSuppliers] = useState('Поставщикам');
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const handleCloseSidebar = useCallback(() => {
    setSidebar(false);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleCloseSidebar);
    return () => window.removeEventListener('click', handleCloseSidebar);
  }, [handleCloseSidebar]);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div
          className={styles.sidebar}
          onClick={(e) => {
            e.stopPropagation();
            setSidebar((prev) => !prev);
          }}
        >
          <MenuSvg className={styles.sidebarIcon} />
        </div>
        <LogoHeader className={styles.logo} />
      </div>
      {sidebar && <Sidebar />}

      <div className={styles.headerCenter}>
        <div className={styles.centerTop}>
          <DropDownList
            padding="0 20px 0 0"
            value={value}
            onChange={setValue}
            options={options}
          />
          <DropDownList
            padding="0 20px 0 0"
            value={suppliers}
            onChange={setSuppliers}
            options={options2}
          />
          <div className={styles.FAQ}>Частые вопросы</div>
        </div>
        <Search />
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerRightTop}>
          <DropDownListLanguage value={value} onChange={undefined} />
        </div>
        <div className={styles.headerRightBottom}>
          <Profile onClick={() => setOpen(true)} />
          <Favorite count={3} />
          <Basket count={1} />
          {open && (
            <Modal onClose={handleClose}>
              <RegistrationForm />
            </Modal>
          )}
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
