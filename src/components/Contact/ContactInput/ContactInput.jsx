import {
  ContactFormInput,
  ContactFormLabel,
  ContactFromGroup,
  ContactFormError
} from "../ContactForm/ContactFormStyle";
import React from "react";

const ContactInput = React.forwardRef((props, ref) => {
  return (
    <ContactFromGroup>
      <ContactFormLabel htmlFor={props.id}>{props.labelName}</ContactFormLabel>
      <ContactFormInput
        id={props.id}
        type={props.type}
        {...props}
        ref={ref}
      ></ContactFormInput>
      {props.errors && <ContactFormError>{props.errors.message}</ContactFormError>}
    </ContactFromGroup>
  );
});

export default ContactInput;
