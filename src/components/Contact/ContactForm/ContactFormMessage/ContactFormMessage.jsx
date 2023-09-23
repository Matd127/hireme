import {
  ContactFormArea,
  ContactFormLabel,
  ContactFromGroup,
  ContactFormError,
} from "./../ContactFormStyle";
import React from "react";

const ContactFormMessage = React.forwardRef((props, ref) => {
  return (
    <ContactFromGroup>
      <ContactFormLabel htmlFor={props.id}>{props.labelName}</ContactFormLabel>
      <ContactFormArea
        id={props.id}
        rows={props.rows}
        aria-invalid={props.errors ? "true" : "false"}
        placeholder="Message"
        {...props}
        ref={ref}
      ></ContactFormArea>
      {props.errors && (
        <ContactFormError>{props.errors.message}</ContactFormError>
      )}
    </ContactFromGroup>
  );
});

export default ContactFormMessage;
