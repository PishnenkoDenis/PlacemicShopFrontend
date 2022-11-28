import React, { memo, useState } from 'react';
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile';
import Aside from '../../components/Aside/Aside';
import ProfileSetting from '../../components/ProfileSetting/ProfileSetting';

import styles from './userPage.module.scss';

const PageInfoUser = () => {
  const [selectedId, setSelectedId] = useState(5);

  return (
    <div className={styles.container}>
      <Aside selectedId={selectedId} setSelectedId={setSelectedId} />
      <div className={styles.content}>
        <HeaderProfile selectedId={selectedId} />
        {selectedId === 1 && <div>контент</div>}
        {selectedId === 5 && <ProfileSetting />}
      </div>
    </div>
  );
};

export default memo(PageInfoUser);
