import React, {
  memo,
  // useId,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useField } from 'formik';
import cn from 'classnames';
import { ReactComponent as PasswordSvgActive } from '../../assets/passwordActive.svg';
import { ReactComponent as PasswordSvg } from '../../assets/password.svg';
import { ReactComponent as СalendarSvg } from '../../assets/сalendarSvg.svg';
import { ReactComponent as PenSvg } from '../../assets/pen.svg';
import { ReactComponent as SuccessfullySvg } from '../../assets/button_ok.svg';
import {
  COUNTRY_CODE,
  DIGITS_REGEX,
  PHONE_NUMBER_REGEX,
} from '../../constants';

import styles from './input.module.scss';

type TInputNew = {
  label?: string;
  id?: number;
  name: string;
  type?: string;
  placeholder?: string;
  props?: string;
  withEdit?: boolean;
  isPassword?: boolean;
  value: any;
  validate?: (e: string) => boolean;
  onChange: (e) => void;
};

const maskPhoneNumber = (value: string): string => {
  const match = value
    .replace(`${COUNTRY_CODE} (`, '')
    .replace(DIGITS_REGEX, '')
    .match(PHONE_NUMBER_REGEX);

  if (!match) return '';

  const zoneCode = match[1];

  if (!zoneCode) {
    return '';
  }
  const firstNumberChunk = match[2];
  const secondNumberChunk = match[3];
  const thirdNumberChunk = match[4];
  const matchSecondNumberChunk = secondNumberChunk
    ? `-${secondNumberChunk}`
    : '';
  const matchThirdNumberChunk = thirdNumberChunk ? `-${thirdNumberChunk}` : '';
  if (firstNumberChunk) {
    const phoneNumber = `${firstNumberChunk}${matchSecondNumberChunk}${matchThirdNumberChunk}`;
    return `${COUNTRY_CODE} (${zoneCode}) ${phoneNumber}`;
  }
  return `${COUNTRY_CODE} (${zoneCode}`;
};
const InputNew = ({ label, ...props }: TInputNew, ref: any) => {
  const [visible, setVisible] = useState(false);
  const [visibleEmailSvg, setVisibleEmailSvg] = useState(false);
  const [error, setError] = useState(false);
  const [field, meta] = useField(props.name);
  // console.log('props', props);
  const validate = (e) => {
    if (validateOuter && !validateOuter(e)) {
      setError(true);
    }
  };
  const onChangeInner = (e) => {
    if (type === 'tel') {
      onchange(maskPhoneNumber(e));
    } else {
      onChange(e);
    }
    // if (type === 'tel') {
    //   onChange(maskPhoneNumber(e.target.value));
    // } else {
    //   onChange(e.target.value);
    // }
    if (validateOuter && validateOuter(e)) {
      setError(false);
    }
  };
  const visibleHandler = () => {
    setVisible(!visible);
  };
  const visibleEmailSvgHandler = () => {
    if (error) return;
    setVisibleEmailSvg(!visibleEmailSvg);
  };
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (validateOuter) {
        if (validateOuter(e.target.value)) {
          setError(false);
        } else {
          setError(true);
        }
      }
    },
  }));
  // console.log(meta);
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <div className={styles.buttonInner}>
        <input
          className={cn(styles.input, error && styles.invalid)}
          {...field}
          {...props}
          type={props.isPassword && !visible ? 'password' : props.type}
          disabled={props.withEdit ? !visibleEmailSvg : false}
        />
        {meta.touched && meta.error ? (
          <div className={cn(styles.validateStyle)}>{meta.error}</div>
        ) : null}
        {props.withEdit && (
          <div onClick={visibleEmailSvgHandler} role="button" tabIndex={0}>
            {visibleEmailSvg ? (
              <SuccessfullySvg className={styles.successfullySvg} />
            ) : (
              <PenSvg className={styles.svgButtonStyle} />
            )}
          </div>
        )}
        {props.isPassword && (
          <div onClick={visibleHandler} role="button" tabIndex={0}>
            {visible ? (
              <PasswordSvgActive className={styles.passwordIcon} />
            ) : (
              <PasswordSvg className={styles.passwordIcon} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default memo(forwardRef(InputNew));
