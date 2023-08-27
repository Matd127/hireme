import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import {
  AdditionalInformation,
  DetailsGrid,
  RoleOverview,
  RoleTitle,
  DetailsDescription,
  DetailsTitle,
  RequirementsList,
  Requirement,
} from "./JobDetailsStyle";
import FullDetails from "./FullDetails";
import RoleCard from "./RoleCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const JobDetails = (props) => {
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
            <DetailsDescription>
              {selectedJob.requiredSkills && (
                <RequirementsList>
                  {selectedJob.requiredSkills.map((req, index) => (
                    <Requirement key={index}>{req}</Requirement>
                  ))}
                </RequirementsList>
              )}
              {!selectedJob.requiredSkills && "Requirements not specified"}
            </DetailsDescription>

            <DetailsTitle>Job Details</DetailsTitle>
            <FullDetails job={selectedJob} />
          </RoleOverview>

          <AdditionalInformation>
            <div>
              <RoleTitle>Keywords</RoleTitle>
            </div>
          </AdditionalInformation>
        </DetailsGrid>
      )}
    </SectionWrapper>
  );
};

export default JobDetails;