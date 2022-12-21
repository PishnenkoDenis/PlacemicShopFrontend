import * as Yup from 'yup';

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

export const validatePassword = (value: string) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value);
};

export const validatePasswordConfirm = (password: string) => {
  return (confirm: string) => password === confirm;
}