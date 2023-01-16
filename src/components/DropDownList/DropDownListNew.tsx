import React, { memo, ReactNode } from 'react';
import cn from 'classnames';
import { useField } from 'formik';

import styles from './dropdownlist.module.scss';

interface IDropDownListNew {
  name: string;
  label?: string;
  options?: any[];
  isBorder?: boolean;
  placeholder?: string;
  alignText?: string;
  children?: ReactNode;
}

const DropDownListNew = ({
  label,
  isBorder = false,
  ...props
}: IDropDownListNew) => {
  const [field] = useField(props);

  return (
    <div className={styles.dropDownList}>
      <label
        className={cn({
          [styles.labelNone]: !label,
          [styles.label]: label,
        })}
        htmlFor={props.name}
      >
        {label}
      </label>
      <select
        className={cn({ [styles.select]: true, [styles.noneBorder]: isBorder })}
        {...field}
        {...props}
      >
        {props?.options?.map((option) => (
          <option value={option.value} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(DropDownListNew);
