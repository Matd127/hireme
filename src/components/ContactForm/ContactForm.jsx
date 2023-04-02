import {
  FormContainer,
  Form,
  FormTitle,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ContactForm.style";
import { SubmitButton } from "./ContactBaseStyles";

const ContactForm = ({ setIsSent }) => {
  return (
    <>
      <FormContainer>
        <Form>
          <FormTitle>Contact US</FormTitle>

          <FormItem>
            <FormLabel>Your name</FormLabel>
            <FormField type="text"></FormField>
          </FormItem>

          <FormItem>
            <FormLabel>Your email</FormLabel>
            <FormField type="text"></FormField>
          </FormItem>

          <FormItem>
            <FormLabel>Your phone</FormLabel>
            <FormField type="text"></FormField>
          </FormItem>

          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormMessage rows={6} />
          </FormItem>

          <SubmitButton onClick={(e) => {
            e.preventDefault()
            setIsSent(true);
          }}>
            Submit
          </SubmitButton>
        </Form>
      </FormContainer>
    </>
  );
};
export default ContactForm;
