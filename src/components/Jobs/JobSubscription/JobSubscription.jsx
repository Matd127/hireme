import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { SectionTitle } from "../../Common/SectionWrapper/SectionWrapperStyle";
import SubscriptionForm from "../SubscriptionForm/SubscriptionForm";
import { JobSubscriptionText } from "./JobSubscriptionStyle";

const JobSubscription = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Never miss a job opportunity</SectionTitle>
      <JobSubscriptionText>
        Subscribe to our Job Alert service and receive notifications about the
        latest job openings that match your preferences. Stay ahead in your job
        search!
      </JobSubscriptionText>
      <SubscriptionForm />
    </SectionWrapper>
  );
};

export default JobSubscription;
