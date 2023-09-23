import {
  SubscriptionFormWrapper,
  SubscriptionInput,
  SubscriptionSubmit,
} from "./SubscriptionFormStyle";

const SubscriptionForm = () => {
  return (
    <SubscriptionFormWrapper>
      <SubscriptionInput
        id="email"
        type="text"
        placeholder="Enter Email Address"
        autocomplete="off"
      />{" "}
      <SubscriptionSubmit>Subscribe</SubscriptionSubmit>
    </SubscriptionFormWrapper>
  );
};

export default SubscriptionForm;
