import React, { memo } from 'react';
import { useField } from 'formik';
import cn from 'classnames';

import styles from './textarea.module.scss';

type TTextArea = {
  name: string;
  label?: string;
  placeholder?: string;
  isResize?: boolean;
};

const TextArea = ({ label, isResize = false, ...props }: TTextArea) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <textarea
        className={cn({
          [styles.textarea]: true,
          [styles.noneResize]: isResize,
        })}
        {...field}
        {...props}
      />
    </>
  );
};

export default memo(TextArea);
