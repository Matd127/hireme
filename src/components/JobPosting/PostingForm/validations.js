const urlPattern =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/;
const emailPattern =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const namesValidation = {
  required: "This field is required.",
  minLength: {
    value: 3,
    message: "This field should contain at least 3 characters.",
  },
  maxLength: {
    value: 75,
    message: "Maximum length exceeded",
  },
};

export const emailValidation = {
  required: "This field is required.",
  maxLength: {
    value: 35,
    message: "Maximum length exceeded",
  },
  pattern: {
    value: emailPattern,
    message: "Incorrect email",
  },
};

export const urlValidation = {
  required: false,
  pattern: {
    value: urlPattern,
    message: "Incorrect url",
  },
};

export const numbersValidation = {
  required: "This field is required.",
  pattern: {
    value: /^\d+$/,
    message: "Incorrect number",
  },
};

export const optionsValidation = {
  required: "This field is required. Please choose an option.",
};

export const descriptionValidation = {
  required: "The field is required",
  minLength: {
    value: 25,
    message: "This field should contain at least 25 characters.",
  },
  maxLength: {
    value: 255,
    message: "Maximum length exceeded"
  },
};
