import {
  HeroButton,
  HeroForm,
  HeroFormWrapper,
  InputsWrapper,
  JobInput,
  LocationInput,
} from "./HeroFormStyles";

const HeroSearchForm = () => {
  return (
    <HeroFormWrapper>
      <HeroForm>
        <InputsWrapper>
          <JobInput id="jobTitle" placeholder="Enter job title, position or keyword"></JobInput>
          <LocationInput id="location" placeholder="Enter a location"></LocationInput>
        </InputsWrapper>
      </HeroForm>
      <HeroButton>Search</HeroButton>
    </HeroFormWrapper>
  );
};

export default HeroSearchForm;
