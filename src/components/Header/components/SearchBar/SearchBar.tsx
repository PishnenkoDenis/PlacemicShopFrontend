import React, { memo, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../../../assets/searchIcon.svg';
import DropDownList from '../../../DropDownList/DropDownList';

import styles from './search.module.scss';

const options = [
  { id: 0, value: 'Везде' },
  { id: 1, value: 'Везде2' },
  { id: 2, value: 'Везде3' },
  { id: 3, value: 'Везде4' },
  { id: 4, value: 'Везде5' },
  { id: 5, value: 'Везде6' },
  { id: 6, value: 'Везде7' },
];

const SearchBar = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.searchBox}>
      <div className={styles.button}>
        <DropDownList
          className={styles.dropdownListSize}
          fontSize="lg"
          value={value}
          onChange={setValue}
          options={options}
          alignText={styles.textCenter}
          isBorder
        />
      </div>
      <input className={styles.serchBoxInput} />
      <SearchIcon className={styles.buttonIcon} />
    </div>
  );
};

export default memo(SearchBar);
