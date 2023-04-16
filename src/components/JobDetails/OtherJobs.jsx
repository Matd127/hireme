import {
  OtherJobItem,
  OtherJobsContainer,
  OtherJobsName,
  OtherJobsTitle,
} from "./JobDetails.style";
import { useDispatch, useSelector } from "react-redux";
import { jobsActions } from "../../redux/jobs-slice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OtherJobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(jobsActions.getRandomJobs());
  }, [dispatch]);

  const randomJobs = useSelector((state) => state.jobs.randomJobs);

  const redirectHandler = (id, position) => {
    dispatch(jobsActions.getRandomJobs());
    navigate(`/job/${id}/${position}`)
  }

  return (
    <OtherJobsContainer>
      <h2>See other jobs</h2>
      {randomJobs.map((job) => (
        <OtherJobItem key = {job.id} onClick={() => redirectHandler(job.id, job.position)} >
          <OtherJobsTitle>{job.position}</OtherJobsTitle>
          <OtherJobsName>{job.company}</OtherJobsName>
        </OtherJobItem>
      ))}
    </OtherJobsContainer>
  );
};
export default OtherJobs;
