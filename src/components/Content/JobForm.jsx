import {
  JobButton,
  JobField,
  JobFieldContainer,
  JobFormContainer,
  JobSelect,
} from "./JobForm.style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { jobsActions } from "../../redux/jobs-slice";

const JobForm = () => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState(null);
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);

  const submitHandler = () => {
    dispatch(jobsActions.findJob({position, location, category}));
  };

  return (
    <JobFormContainer>
      <JobFieldContainer>
        <label>Position?</label>
        <JobField
          type="text"
          placeholder="Enter job title, position..."
          onChange={(e) => setPosition(e.target.value)}
        ></JobField>
      </JobFieldContainer>
      <JobFieldContainer>
        <label>Where?</label>
        <JobField
          type="text"
          placeholder="All locations"
          onChange={(e) => setLocation(e.target.value)}
        ></JobField>
      </JobFieldContainer>
      <JobFieldContainer>
        <label>Categories?</label>
        {/* <JobField type="text"></JobField> */}
        <JobSelect onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled hidden>
            Select category
          </option>
          <option>AA</option>
          <option>AA</option>
          <option>AA</option>
        </JobSelect>
      </JobFieldContainer>
      <JobButton onClick={submitHandler}>→</JobButton>
    </JobFormContainer>
  );
};

export default JobForm;
