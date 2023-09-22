import {
  DetailsDescription,
  RequirementsList,
  Requirement,
} from "./JobDetailsStyle";

const JobBenefits = ({ benefits }) => {
  return (
    <DetailsDescription>
      {benefits && (
        <RequirementsList>
          {benefits.map((benefit, index) => (
            <Requirement key={index}>{benefit}</Requirement>
          ))}
        </RequirementsList>
      )}
      {!benefits && "This job does not offer any benefits."}
    </DetailsDescription>
  );
};

export default JobBenefits;
