import MessageDisplay from "../../Common/MessageDisplay/MessageDisplay";

const ContactMessage = ({ isSuccess }) => {
  const title = isSuccess ? "Thank You!" : "Message Not Sent";
  const message = isSuccess
    ? "We appreciate you contacting us. We will get back in touch with you soon! Have a great day!"
    : "Oops! Something went wrong and your message could not be sent. Please try again later.";

  return (
    <MessageDisplay isSuccess={isSuccess} title={title} message={message} />
  );
};

export default ContactMessage;
