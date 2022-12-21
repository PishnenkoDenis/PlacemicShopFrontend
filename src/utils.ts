import React, { ChangeEvent } from 'react';
import * as Yup from 'yup';
import { INPUT_NUMBER } from './constants';

export const validateEmail = (value: string) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
};

export const validatePhone = (value: string) => {
  return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
};

export const validateNumber = (value: string) => {
  return /^\d+$/.test(value);
};

export const validateString = (value: string) => {
  return /[а-яёА-ЯЁ]+$/.test(value);
};

export const validateFrame = (value: string) => {
  return /[а-яёА-ЯЁ]+$/.test(value);
};

export const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  middleName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  phone: Yup.string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Некорректные данные')
    .required('Required'),
  dateOfBirth: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  street: Yup.string()
    .matches(/[а-яёА-ЯЁ]+$/, 'Некорректные данные')
    .required('Required'),
  house: Yup.string()
    .matches(/^\d+$/, 'Некорректные данные')
    .required('Required'),
  frame: Yup.string()
    .matches(/[а-яёА-ЯЁ]+$/, 'Некорректные данные')
    .required('Required'),
  apartament: Yup.string()
    .matches(/^\d+$/, 'Некорректные данные')
    .required('Required'),
});

export const validatePassword = (value: string) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value);
};

export const isEmpty = (value: string) => value.trim().length;

export const validatePasswordConfirm = (password: string) => {
  return (confirm: string) => password === confirm;
};

export const validateFirstName = (value: string) => {
  return /[а-яёА-ЯЁ]+/.test(value);
};

export const validatLastName = (value: string) => {
  return /[а-яёА-ЯЁ]+/.test(value);
};

export const validateMiddleName = (value: string) => {
  return /[а-яёА-ЯЁ]+/.test(value);
};


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
