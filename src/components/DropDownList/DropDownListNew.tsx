import React, { memo } from 'react';
import cn from 'classnames';
import { useField } from 'formik';
import useDropDownList from '../../hook/useDropDownList';
import arrow from '../../assets/arrow.svg';
import { ReactComponent as CheckSvg } from '../../assets/check.svg';

import styles from './dropdownlist.module.scss';

interface IDropDownListNew {
  id?: number;
  label?: string;
  value: string;
  name: string;
  options: any[];
  onChange: any;
  className?: string;
}

const DropDownListNew = ({ label, ...props }: IDropDownListNew) => {
  const [field] = useField(props);
  return (
    <div className={cn(styles.dropDownList)}>
      <label className={cn(styles.label)} htmlFor={props.id || props.name}>
        {label}
      </label>
      <select {...field} {...props} />
    </div>
  );
};

export default memo(DropDownListNew);
