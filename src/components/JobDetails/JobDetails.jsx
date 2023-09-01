import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import {
  DetailsGrid,
  RoleOverview,
  DetailsDescription,
  DetailsTitle,
  ApplyButton,
} from "./JobDetailsStyle";
import FullDetails from "./FullDetails";
import RoleCard from "./RoleCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AdditionalInformation from "./AdditionalInformation";
import JobReqirements from "./JobReqirements";

const JobDetails = () => {
  const jobParams = useParams();
  const [selectedJob] = useSelector((state) => state.jobs.jobsList).filter(
    (job) => job.id === +jobParams.id
  );

  return (
    <SectionWrapper>
      {!selectedJob && <div>Loading...</div>}
      {selectedJob && (
        <DetailsGrid>
          <RoleOverview>
            <RoleCard job={selectedJob} />
            <DetailsTitle>Description</DetailsTitle>
            <DetailsDescription>{selectedJob.description}</DetailsDescription>

            <DetailsTitle>Requirements</DetailsTitle>
            <JobReqirements job={selectedJob}></JobReqirements>

            <DetailsTitle>Job Details</DetailsTitle>
            <FullDetails job={selectedJob} />

            <ApplyButton>Apply</ApplyButton>
          </RoleOverview>

          <AdditionalInformation keywords={selectedJob.keywords}/>
        </DetailsGrid>
      )}
    </SectionWrapper>
  );
};

export default JobDetails;