import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import ContactCard from "../ContactCard/ContactCard";
import ContactInput from "../ContactInput/ContactInput";
import {
  ContactFormGrid,
  ContactFormLabel,
  ContactFormMessage,
  ContactFormTitle,
  ContactFormWrapper,
  ContactFromGroup,
  ActionWrapper,
  SubmitButton,
} from "./ContactFormStyle";

const ContactForm = () => {
  return (
    <SectionWrapper>
      <ContactCard />
      <ContactCard />
      <ContactCard />

      <ContactFormWrapper onSubmit={(e) => e.preventDefault()}>
        <ContactFormTitle>Don't hesitate to contact us</ContactFormTitle>

        <ContactFormGrid>
          <ContactInput name="First Name" type="text" id="first_name" />
          <ContactInput name="Second Name" type="text" id="second_name" />
          <ContactInput name="Email" type="email" id="email" />
          <ContactInput name="Your Subject" type="text" id="subject" />
        </ContactFormGrid>

        <ContactFromGroup>
          <ContactFormLabel>Message</ContactFormLabel>
          <ContactFormMessage rows={8}></ContactFormMessage>
        </ContactFromGroup>

        <ActionWrapper>
          <SubmitButton>Send Message</SubmitButton>
        </ActionWrapper>
      </ContactFormWrapper>
    </SectionWrapper>
  );
};

export default ContactForm;
