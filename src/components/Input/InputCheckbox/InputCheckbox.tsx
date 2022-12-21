import React, { memo } from 'react';
import cn from 'classnames';
import { useField } from 'formik';

import styles from './inputCheckbox.module.scss';

type TInputCheckboxNew = {
  label?: string;
  name: string;
};

const InputCheckboxNew = ({ label, ...props }: TInputCheckboxNew) => {
  const [field] = useField({ ...props, type: 'checkbox' });
  return (
    <div className={cn(styles.inputCheckboxInner)}>
      <label className={cn(styles.labelCheckbox)}>
        {label}
        <input
          className={cn(styles.inputCheckbox)}
          type="checkbox"
          {...field}
          {...props}
        />
        <span
          className={cn(
            field.checked
              ? styles.inputCheckboxStyleChecked
              : styles.inputCheckboxStyle
          )}
        />
      </label>
    </div>
  );
};
export default memo(InputCheckboxNew);
