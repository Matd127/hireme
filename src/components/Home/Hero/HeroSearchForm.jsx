import { useState } from "react";
import {
  HeroButton,
  HeroForm,
  HeroFormWrapper,
  InputsWrapper,
  JobInput,
  LocationInput,
} from "./HeroFormStyles";
import { useNavigate } from "react-router-dom";

const HeroSearchForm = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate('/jobs', {state: {title, location}})
  };
  return (
    <HeroFormWrapper>
      <HeroForm>
        <InputsWrapper>
          <JobInput
            id="jobTitle"
            placeholder="Enter job title, position or keyword"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></JobInput>
          <LocationInput
            id="location"
            placeholder="Enter a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></LocationInput>
        </InputsWrapper>
      </HeroForm>
      <HeroButton onClick={submitHandler}>Search</HeroButton>
    </HeroFormWrapper>
  );
};

export default HeroSearchForm;
