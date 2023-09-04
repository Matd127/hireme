import {
  ContactFormInput,
  ContactFormLabel,
  ContactFromGroup,
} from "../ContactForm/ContactFormStyle";

const ContactInput = ({ name, type, id }) => {
  return (
    <ContactFromGroup>
      <ContactFormLabel htmlFor={id}>{name}</ContactFormLabel>
      <ContactFormInput id={id} type={type}></ContactFormInput>
    </ContactFromGroup>
  );
};

export default ContactInput;
