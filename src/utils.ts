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
