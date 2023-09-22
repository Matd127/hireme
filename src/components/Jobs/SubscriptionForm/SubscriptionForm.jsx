import {
  SubscriptionFormWrapper,
  SubscriptionInput,
  SubscriptionSubmit,
} from "./SubscriptionFormStyle";

const SubscriptionForm = () => {
  return (
    <SubscriptionFormWrapper>
      <SubscriptionInput type="text" placeholder="Enter Email Address"/>{" "}
      <SubscriptionSubmit>Subscribe</SubscriptionSubmit>
    </SubscriptionFormWrapper>
  );
};

export default SubscriptionForm;
