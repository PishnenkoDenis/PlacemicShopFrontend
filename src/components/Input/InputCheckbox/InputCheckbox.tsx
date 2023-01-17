import React, { memo } from 'react';
import cn from 'classnames';
import { useField } from 'formik';

import styles from './inputCheckbox.module.scss';

type TInputCheckboxNew = {
  label?: string;
  name: string;
  onChange?: () => {};
};

const InputCheckboxNew = ({ label, name, ...props }: TInputCheckboxNew) => {
  const [field] = useField({ name, type: 'checkbox' });
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
