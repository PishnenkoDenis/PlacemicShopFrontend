import React, { memo } from 'react';
import cn from 'classnames';
import useDropDownList from '../../hook/useDropDownList';
import arrow from '../../assets/arrow.svg';
import { ReactComponent as CheckSvg } from '../../assets/check.svg';
import styles from './dropdownlist.module.scss';

interface IDropDownList {
  value: string;
  options: any[];
  onChange: any;
  className?: string;
  padding?: string;
  fontSize?: 'md' | 'lg';
}

const DropDownList = ({
  value,
  options,
  onChange,
  className,
  padding,
  fontSize = 'md',
}: IDropDownList) => {
  const sizeClass = styles[fontSize];

  const { open, handleOpen, handleClose } = useDropDownList();
  return (
    <div className={cn(styles.dropDownList, className)}>
      <button
        style={{ padding, fontSize }}
        className={cn(styles.button, sizeClass)}
        onClick={handleOpen}
        type="button"
      >
        {value}
        <img className={styles.arrow} src={arrow} alt="arrow" />
      </button>
      {open && (
        <div className={styles.list}>
          {options.map((option) => (
            <button
              className={cn(
                styles.listItem,
                value === option.value && styles.listItemActive
              )}
              type="button"
              key={option.id}
              onClick={() => {
                onChange(option.value);
                handleClose();
              }}
            >
              {option.value}
              {value === option.value && <CheckSvg className={styles.check} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(DropDownList);
