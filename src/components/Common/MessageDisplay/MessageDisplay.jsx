import { BsCheckLg, BsExclamationTriangle } from "react-icons/bs";
import {
  MessageIcon,
  MessageWrapper,
  MessageTitle,
  MessageText,
} from "./MessageDisplayStyle";

const MessageDisplay = ({ isSuccess, title, message }) => {
  const icon = isSuccess ? (
    <BsCheckLg size={70} />
  ) : (
    <BsExclamationTriangle size={70} />
  );

  return (
    <MessageWrapper>
      <MessageIcon isSuccess={isSuccess}>{icon}</MessageIcon>
      <MessageTitle>{title}</MessageTitle>
      <MessageText>{message}</MessageText>
    </MessageWrapper>
  );
};

export default MessageDisplay;
