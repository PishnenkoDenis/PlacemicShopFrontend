import React, {
  memo,
  useId,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';

import cn from 'classnames';
import { ReactComponent as PasswordSvgActive } from '../../assets/passwordActive.svg';
import { ReactComponent as PasswordSvg } from '../../assets/password.svg';
import { ReactComponent as СalendarSvg } from '../../assets/сalendarSvg.svg';
import { ReactComponent as PenSvg } from '../../assets/btn-pen.svg';
import { ReactComponent as SuccessfullySvg } from '../../assets/button_ok.svg';
import {
  COUNTRY_CODE,
  DIGITS_REGEX,
  PHONE_NUMBER_REGEX,
} from '../../constants';
import styles from './input.module.scss';

type TInput = {
  label?: string | undefined;
  placeholder?: string | undefined;
  onChange: (e: string) => void;
  borderInput?: string | undefined;
  value: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  validate?: (e: string) => boolean;
  type?: string;
  isPassword?: boolean;
  withEdit?: boolean;
  borderClass?: string;
  isUpperError?: boolean;
  errorMessage?: string;
  max?: any;
  min?: any;
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

const Input = (
  {
    label,
    placeholder,
    isPassword,
    value,
    onChange,
    className,
    labelClassName,
    inputClassName,
    validate: validateOuter,
    type = 'text',
    withEdit,
    borderClass,
    isUpperError = false,
    errorMessage = 'Некорректные данные',
    max,
    min,
  }: TInput,
  ref: any
) => {
  const [visible, setVisible] = useState(false);
  const [visibleEmailSvg, setVisibleEmailSvg] = useState(false);
  const [error, setError] = useState(false);
  const id = useId();

  useEffect(() => {
    if (value === '') {
      setError(false);
    }
  }, [value]);

  const validate = (e) => {
    if (validateOuter && !validateOuter(e.target.value)) {
      setError(true);
    }
  };

  const onChangeInner = (e) => {
    if (
      type === 'date' &&
      (new Date(e.target.value) < min || new Date(e.target.value) > max)
    ) {
      return;
    }
    if (type === 'tel') {
      setError(false);
      onChange(maskPhoneNumber(e.target.value));
    } else {
      onChange(e.target.value);
    }
    if (validateOuter && validateOuter(e.target.value)) {
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
        if (validateOuter(value)) {
          setError(false);
        } else {
          setError(true);
        }
      }
    },
  }));
  return (
    <div className={styles.errorWrapper}>
      {error && (
        <div
          className={cn({
            [styles.validateStyleUpperError]: isUpperError,
            [styles.validateStyle]: !isUpperError,
          })}
        >
          {errorMessage}
        </div>
      )}
      <div className={cn(styles.container, className)}>
        {label && (
          <div className={cn(styles.label, labelClassName)}>{label}</div>
        )}
        <input
          id={id}
          className={cn(
            styles.input,
            error && styles.invalid,
            inputClassName,
            borderClass
          )}
          onChange={onChangeInner}
          placeholder={placeholder}
          value={value}
          type={isPassword && !visible ? 'password' : type}
          onBlur={validate}
          disabled={withEdit ? !visibleEmailSvg : false}
          max={max}
          min={min}
        />
        {type === 'date' && (
          <label htmlFor={id}>
            <СalendarSvg className={styles.svgButtonStyle} />
          </label>
        )}
        <div
          onClick={visibleEmailSvgHandler}
          role="button"
          tabIndex={0}
          className={styles.buttonEmailBox}
        >
          {withEdit && (
            <>
              {visibleEmailSvg ? (
                <SuccessfullySvg className={styles.successfullySvg} />
              ) : (
                <PenSvg className={styles.svgButtonStyle} />
              )}
            </>
          )}
        </div>
        {isPassword && (
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
export default memo(forwardRef(Input));
