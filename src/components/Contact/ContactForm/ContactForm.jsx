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
import { useDispatch, useSelector } from "react-redux";
import { contactActions } from "../../../redux/contact-slice";
import ContactMessage from "../ContactMessage/ContactMessage";
import {
  mailValidation,
  messageValidation,
  namesValidation,
  subjectValidation,
} from "./validations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { sent, success } = useSelector((state) => state.contact);
  const notSend = !sent && !success;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(contactActions.sendMessage(data));
  };

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

      {sent && <ContactMessage isSuccess={success} />}
      {notSend && (
        <ContactFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <ContactFormTitle>Don't hesitate to contact us</ContactFormTitle>
          <ContactFormGrid>
            <ContactInput
              labelName="First Name"
              type="text"
              id="first_name"
              {...register("firstName", namesValidation)}
              errors={errors.firstName}
            />
            <ContactInput
              labelName="Second Name"
              type="text"
              id="second_name"
              {...register("secondName", namesValidation)}
              errors={errors.secondName}
            />
            <ContactInput
              labelName="Email"
              type="email"
              id="email"
              {...register("email", mailValidation)}
              errors={errors.email}
            />
            <ContactInput
              labelName="Subject"
              type="text"
              id="subject"
              {...register("subject", subjectValidation)}
              errors={errors.subject}
            />
          </ContactFormGrid>

          <ContactFromGroup>
            <ContactFormLabel htmlFor="message">Message</ContactFormLabel>
            <ContactFormMessage
              id="message"
              rows={8}
              {...register("message", messageValidation)}
            ></ContactFormMessage>
          </ContactFromGroup>

          <ActionWrapper>
            <SubmitButton>Send Message</SubmitButton>
          </ActionWrapper>
        </ContactFormWrapper>
      )}
    </SectionWrapper>
  );
};

export default ContactForm;
