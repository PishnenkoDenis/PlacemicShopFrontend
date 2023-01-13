import React, { memo, useState } from 'react';
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile';
import Aside from '../../components/Aside/Aside';
import ProfileSetting from '../../components/ProfileSetting';
import NavigationBlock from '../../components/NavigationBlock';

import styles from './userPage.module.scss';

export type TUserPage = {
  selectedId: number;
  setSelectedId: (id: number) => void;
};

const PageInfoUser = () => {
  const [selectedId, setSelectedId] = useState(5);

  return (
    <div className={styles.container}>
      <Aside setSelectedId={setSelectedId} />
      <div className={styles.content}>
        {/* <NavigationBlock /> */}
        <HeaderProfile selectedId={selectedId} />
        {selectedId === 1 && <div>контент</div>}
        {selectedId === 5 && <ProfileSetting />}
      </div>
    </div>
  );
};

export default memo(PageInfoUser);
