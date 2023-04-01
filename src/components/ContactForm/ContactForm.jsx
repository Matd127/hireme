import { FormContainer, Form, SubmitButton, FormTitle, FormField, FormItem, FormLabel, FormMessage } from "./ContactForm.style";

const ContactForm = () => {
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
              <FormMessage rows={6}/>
            </FormItem>

          <SubmitButton onClick={(e) => e.preventDefault()}>Submit</SubmitButton>
        </Form>
      </FormContainer>
    </>
  );
};
export default ContactForm;
