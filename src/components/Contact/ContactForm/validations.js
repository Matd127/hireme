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
  pattern: { value: /^[A-Za-z]+$/i, message: "Incorrect name" },
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

export const subjectValidation = {
  required: "This field is required.",
  minLength: {
    value: 5,
    message: "This field should contain at least 3 characters.",
  },
  maxLength: {
    value: 80,
    message: "Maximum length exceeded",
  },
};

export const messageValidation = {
  required: "The field is required",
  minLength: {
    value: 15,
    message: "This field should contain at least 15 characters.",
  },
  maxLength: {
    value: 255,
    message: "Maximum length exceeded"
  },
};
