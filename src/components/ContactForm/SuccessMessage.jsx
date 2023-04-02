import { Link } from "react-router-dom";
import { SubmitButton } from "./ContactBaseStyles";
import {
  ActionsContainer,
  Message,
  MessageContainer,
  MessageContent,
  MessageTitle,
} from "./SuccessMessage.style";

const SuccessMessage = () => {
  return (
    <>
      <MessageContainer>
        <Message>
          <MessageTitle>Success!</MessageTitle>
          <MessageContent>Thank you for your message! We will contact you soon.</MessageContent>
          <ActionsContainer>
            <Link to={'/'}>
              <SubmitButton>Back to homepage</SubmitButton>
            </Link>
          </ActionsContainer>
        </Message>
      </MessageContainer>
    </>
  );
};

export default SuccessMessage;
