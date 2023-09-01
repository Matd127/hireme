import {
  DetailsDescription,
  RequirementsList,
  Requirement,
} from "./JobDetailsStyle";

const JobReqirements = (props) => {
  return (
    <DetailsDescription>
      {props.job.requiredSkills && (
        <RequirementsList>
          {props.job.requiredSkills.map((req, index) => (
            <Requirement key={index}>{req}</Requirement>
          ))}
        </RequirementsList>
      )}
      {!props.job.requiredSkills && "Requirements not specified"}
    </DetailsDescription>
  );
};

export default JobReqirements;
