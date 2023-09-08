import {
  ContactFormInput,
  ContactFormLabel,
  ContactFromGroup,
} from "../ContactForm/ContactFormStyle";
import React from "react";

const ContactInput = React.forwardRef((props, ref) => {
  return (
    <ContactFromGroup>
      <ContactFormLabel htmlFor={props.id}>{props.name}</ContactFormLabel>
      <ContactFormInput
        id={props.id}
        type={props.type}
        {...props}
        ref={ref}
      ></ContactFormInput>
    </ContactFromGroup>
  );
});

export default ContactInput;
