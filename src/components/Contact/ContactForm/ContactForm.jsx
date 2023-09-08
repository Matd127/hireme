import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import ContactCard from "../ContactCard/ContactCard";
import { ContactCardList } from "../ContactCard/ContactCardStyle";
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

import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";

import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <SectionWrapper>
      <ContactCardList>
        <ContactCard
          icon={<BsFillTelephoneFill />}
          title="Phone"
          text="+00 000 000 000"
        />
        <ContactCard
          icon={<BsEnvelope />}
          title="Email"
          text="email@email.com"
        />
        <ContactCard
          icon={<BsGeoAlt />}
          title="Location"
          text=" Random Street 93, Location, Country"
        />
      </ContactCardList>

      <ContactFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <ContactFormTitle>Don't hesitate to contact us</ContactFormTitle>

        <ContactFormGrid>
          <ContactInput
            type="text"
            id="first_name"
            {...register("firstName", {
              required: true,
              minLength: 2,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <ContactInput
            type="text"
            id="second_name"
            {...register("secondName", {
              required: true,
              minLength: 2,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <ContactInput
            type="email"
            id="email"
            {...register("email", { required: true, minLength: 8 })}
          />
          <ContactInput
            type="text"
            id="subject"
            {...register("subject", {
              required: true,
              minLength: 5,
              maxLength: 80,
            })}
          />
        </ContactFormGrid>

        <ContactFromGroup>
          <ContactFormLabel htmlFor="message">Message</ContactFormLabel>
          <ContactFormMessage
            id="message"
            rows={8}
            {...register("message", {
              required: true,
              minLength: 10,
              max: 255,
            })}
          ></ContactFormMessage>
        </ContactFromGroup>

        <ActionWrapper>
          <SubmitButton>Send Message</SubmitButton>
        </ActionWrapper>
      </ContactFormWrapper>
    </SectionWrapper>
  );
};

export default ContactForm;
