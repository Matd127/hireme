import {
  JobButton,
  JobField,
  JobFieldContainer,
  JobFormContainer,
  JobSelect,
} from "./JobForm.style";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobsActions } from "../../redux/jobs-slice";
import { useNavigate } from 'react-router-dom';

const JobForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [position, setPosition] = useState(null);
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);
  const categories = useSelector((state) => state.jobs.jobsCategories);

  const submitHandler = () => {
    // dispatch(jobsActions.findJob({ position, location, category }));

    //FOR TEST CHANGE IT LATER 
    dispatch(jobsActions.passParameters({ position, location, category}))
    navigate(`/jobs`)
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
        <JobSelect
          defaultValue={"DEFAULT"}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="DEFAULT" disabled={true} hidden={true}>
            Select category
          </option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </JobSelect>
      </JobFieldContainer>
      <JobButton onClick={submitHandler}>→</JobButton>
    </JobFormContainer>
  );
};

export default JobForm;