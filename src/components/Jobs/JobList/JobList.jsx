import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { SectionTitle } from "../../Common/SectionWrapper/SectionWrapperStyle";
import JobItemLazy from "../../Home/FeaturedJobs/JobItemLazy";

const JobList = () => {
  return (
    <SectionWrapper theme="dark">
      <SectionTitle theme="dark">
        The following job offers have been found:
      </SectionTitle>
      <JobItemLazy items={10}></JobItemLazy>
    </SectionWrapper>
  );
};

export default JobList;
