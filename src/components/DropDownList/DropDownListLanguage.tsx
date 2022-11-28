import React, { useMemo, memo } from 'react';
import cn from 'classnames';
import arrow from '../../assets/arrow.svg';
import useDropDownList from '../../hook/useDropDownList';
import { ReactComponent as FlagRu } from '../../assets/flagRu.svg';
import { ReactComponent as RubleIcon } from '../../assets/rubleIcon.svg';

import styles from './dropdownlist.module.scss';

const DEFAULT_OPTIONS = [
  { id: 0, value: 'Русский' },
  { id: 1, value: 'Английский' },
];

interface IOption {
  id: number;
  value: string;
  flagIcon: string;
  currencyIcon: string;
}

interface IDropDownListLanguage {
  value: string;
  options?: IOption[];
  onChange: any;
  className?: string;
}
const DropDownListLanguage = ({
  value,
  options = DEFAULT_OPTIONS,
  onChange,
  className,
}: IDropDownListLanguage) => {
  const selectedOption = useMemo(
    () => options.find((item) => item.value === value) ?? options[0],
    [options, value]
  );
  const { open, handleOpen, handleClose } = useDropDownList();

  return (
    <div className={cn(styles.dropDownList, className)}>
      <button className={styles.button} onClick={handleOpen} type="button">
        <FlagRu className={styles.flagIcon} />
        <span className={styles.selectOption}>{selectedOption.value}</span>
        <RubleIcon className={styles.currencyIcon} />
      </button>
      <img className={styles.arrow} src={arrow} alt="arrow" />
      {open && (
        <div className={styles.list}>
          {options.map((option) => (
            <button
              className={styles.listItemLang}
              type="button"
              key={option.id}
              onClick={() => {
                onChange(option.value);
                handleClose();
              }}
            >
              <FlagRu className={styles.flagIcon} />
              <span>{option.value}</span>
              <RubleIcon className={styles.currencyIcon} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(DropDownListLanguage);
