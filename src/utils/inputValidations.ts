import { stateAbbreviations } from ".";

export const validateEmail = (inputEmail: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(inputEmail);
};

export const validatePassword = (password: string) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[\W_]/.test(password); // \W matches any non-word character, and _ is considered a word character, so it's explicitly included
  const isAtLeastSixCharsLong = password.length >= 6;

  return hasUpperCase && hasNumber && hasSymbol && isAtLeastSixCharsLong;
}

export const validatePhoneNumber = (inputNumber: string) => {
  const phoneNumberPattern = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return phoneNumberPattern.test(inputNumber);
};

export const validateName = (inputName: string) => {
  const namePattern = /^[A-Za-z]+$/;
  return namePattern.test(inputName);
};

export const validateState = (inputState: string) => {
  return stateAbbreviations.includes(inputState.toUpperCase());
};

export const validateCity = (inputCity: string) => {
  const cityPattern = /^[a-zA-Z\s'-]+$/;
  return cityPattern.test(inputCity);
};

export const validateDOB = (inputDOB: string) => {
  const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
  if (!datePattern.test(inputDOB)) return false;

  const [month, day, year] = inputDOB.split('/').map(num => parseInt(num, 10));
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
      return false;
  }

  const now = new Date();
  const oldestValidDate = new Date(now.getFullYear() - 120, now.getMonth(), now.getDate());
  if (date > now || date < oldestValidDate) {
      return false;
  }

  return true;
};

export const validateZipCode = (inputZip: string) => {
  const zipPattern = /^(\d{5}(-\d{4})?)$/;
  return zipPattern.test(inputZip);
};
