import { useRef } from "react";
import {
  HeroForm,
  HeroFormWrapper,
  InputsWrapper,
  JobInput,
  LocationInput,
} from "./HeroFormStyles";
import { useNavigate } from "react-router-dom";
import Button from "../../Common/Button/Button";

export default function HeroSearchForm() {
  const titleRef = useRef("");
  const locationRef = useRef("");
  const navigate = useNavigate();

  const submitForm = () => {
    navigate("/jobs", {
      state: {
        title: titleRef.current.value,
        location: locationRef.current.value,
      },
    });
  };

  return (
    <HeroFormWrapper>
      <HeroForm>
        <InputsWrapper>
          <JobInput
            id="jobTitle"
            placeholder="Enter job title, position or keyword"
            ref={titleRef}
          />
          <LocationInput
            id="location"
            placeholder="Enter a location"
            ref={locationRef}
          />
        </InputsWrapper>
      </HeroForm>
      <Button onClick={submitForm}>Search</Button>
    </HeroFormWrapper>
  );
}
