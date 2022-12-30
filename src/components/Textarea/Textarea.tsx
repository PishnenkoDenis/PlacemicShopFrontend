import React, { memo } from 'react';
import { useField } from 'formik';

import styles from './textarea.module.scss';

type TTextarea = {
  label?: string;
  id?: string;
  name: string;
  placeholder?: string;
  props?: string;
  value: string;
  cols: number;
  rows: number;
  onChange?: (e) => void;
};

const Textarea = ({ label, ...props }: TTextarea) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea className={styles.textarea} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.validateStyle}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default memo(Textarea);
