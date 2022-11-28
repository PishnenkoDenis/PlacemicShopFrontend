import React, { memo, useCallback, useState, useEffect } from 'react';
import { ReactComponent as LogoHeader } from '../../assets/logoHeader.svg';
import Search from './components/SearchBar';
import Favorite from './components/Favorite';
import Profile from './components/Profile';
import Basket from './components/Basket';
import DropDownList from '../DropDownList/DropDownList';
import DropDownListLanguage from '../DropDownList/DropDownListLanguage';
import Modal from '../Modal/Modal';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Sidebar from './components/Sidebar/Sidebar';
import { ReactComponent as MenuSvg } from '../../assets/menu.svg';

import styles from './header.module.scss';

const options = [
  { id: 0, value: 'Защита покупателя' },
  { id: 1, value: 'Условия оплаты' },
  { id: 2, value: 'Условия использования' },
  { id: 3, value: 'Регистрация аккаунта' },
  { id: 4, value: 'Покупателям' },
];

const options2 = [
  { id: 0, value: 'Как стать продавцом' },
  { id: 1, value: 'Правила участия' },
  { id: 2, value: 'Личный кабинет продавца' },
  { id: 3, value: 'Поставщикам' },
];

const Header = () => {
  const [value, setValue] = useState(4);
  const [suppliers, setSuppliers] = useState(3);
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
          role="button"
          tabIndex={0}
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
            padding="0 5px 0 0"
            value={value}
            onChange={setValue}
            options={options}
            className={styles.dropdownlist}
          />
          <DropDownList
            padding="0 5px 0 0"
            value={suppliers}
            onChange={setSuppliers}
            options={options2}
            className={styles.dropdownlist}
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
