import MessageDisplay from "../../Common/MessageDisplay/MessageDisplay";

const PostingMessage = ({ isSuccess = true }) => {
  const title = isSuccess
    ? "The job offer has been successfully sent! "
    : "The job offer has not been published!";
  const message = isSuccess
    ? "Congratulations! Your job offer has been sent successfully"
    : "Sorry, it seems there was an issue. Please ensure that the job offer is properly published and try again.";

  return (
    <MessageDisplay
      isSuccess={isSuccess}
      title={title}
      message={message}
    ></MessageDisplay>
  );
};

export default PostingMessage;
