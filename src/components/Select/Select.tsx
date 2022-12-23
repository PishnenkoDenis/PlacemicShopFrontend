import { useField } from 'formik';
import React, { memo } from 'react';

import styles from './select.module.scss';

type TSelect = {
  label?: string;
  id?: string;
  name: string;
  placeholder?: string;
  props?: string;
  value?: string;
  options: { id: number; value: string }[];
};

const Select = ({ label, ...props }: TSelect) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <select className={styles.select} {...field} {...props}>
        {props.options.map((option) => (
          <option value={option.value} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className={styles.validateStyle}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default memo(Select);
