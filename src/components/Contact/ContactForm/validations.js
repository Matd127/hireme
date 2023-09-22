export const namesValidation = {
  required: true,
  minLength: 2,
  pattern: /^[A-Za-z]+$/i,
};

export const mailValidation = { required: true, minLength: 8 };

export const subjectValidation = {
  required: true,
  minLength: 5,
  maxLength: 80,
};

export const messageValidation = {
  required: true,
  minLength: 10,
  max: 255,
};