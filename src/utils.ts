import React, { ChangeEvent } from 'react';
import { INPUT_NUMBER } from './constants';

export const validateFirstName = (value: string) => {
  return /[а-яёА-ЯЁ]+/.test(value);
};

export const validatLastName = (value: string) => {
  return /[а-яёА-ЯЁ]+/.test(value);
};

export const validateMiddleName = (value: string) => {
  return /[а-яёА-ЯЁ]+/.test(value);
};

export const validateEmail = (value: string) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
};

export const validatePhone = (value: string) => {
  return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
};

export const isEmpty = (value: string) => value.trim().length;

export const validatePercentNumber = (value: string) => Number(value) < 100;

export const validateConditionNumber = (value: string) => Number(value) > 1;

export const validateDiscountName = (value: string) => {
  return /^[аa-яёzАA-ЯЁZ_0-9]+/.test(value) && value.length <= 20;
};

export const setAndValidateInputs = (
  e: ChangeEvent<HTMLInputElement>,
  setCallback: React.Dispatch<any>,
  validateCallback: React.Dispatch<any>,
  validateFunc: (arg0: any) => any,
  inputType: string
) => {
  const { value } = e.target;
  const valid = validateFunc(value);
  if (inputType === INPUT_NUMBER) setCallback(Number(value));
  else setCallback(value);
  validateCallback(valid);
};

export const isEmpty = (value: string) => value.trim().length;

export const validatePassword = (value: string) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value);
};

export const validatePasswordConfirm = (password: string) => {
  return (confirm: string) => password === confirm;
}
