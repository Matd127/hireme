import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { SectionTitle } from "../../Common/SectionWrapper/SectionWrapperStyle";
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

      {/* Finish in the future */}
    </SectionWrapper>
  );
};

export default JobSubscription;
