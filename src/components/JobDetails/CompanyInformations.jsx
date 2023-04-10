import {
  CompanyInformationsContainer,
  CompanyInformation,
  InformationProperty,
  InformationValue,
} from "./JobDetails.style";

const CompanyInformations = ({location, salary}) => {
    
  return (
    <CompanyInformationsContainer>
      <CompanyInformation>
        <InformationProperty>Company size</InformationProperty>
        <InformationValue>100 - 120 workers</InformationValue>
      </CompanyInformation>

      <CompanyInformation>
        <InformationProperty>Type of corporation</InformationProperty>
        <InformationValue>B2B & B2C</InformationValue>
      </CompanyInformation>

      <CompanyInformation>
        <InformationProperty>Location</InformationProperty>
        <InformationValue>{location}</InformationValue>
      </CompanyInformation>

      <CompanyInformation>
        <InformationProperty>Salary</InformationProperty>
        <InformationValue>{salary}</InformationValue>
      </CompanyInformation>
    </CompanyInformationsContainer>
  );
};
export default CompanyInformations;
