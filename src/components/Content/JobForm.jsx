import { JobButton, JobField, JobFieldContainer, JobFormContainer } from "./JobForm.style";

const JobForm = () => {
  return <JobFormContainer>
        <JobFieldContainer>
            <label>Keyword?</label>
            <JobField type="text" placeholder="Enter job title, position..."></JobField>
        </JobFieldContainer>
        <JobFieldContainer>
            <label>Where?</label>
            <JobField type="text" placeholder="All locations"></JobField>
        </JobFieldContainer>
        <JobFieldContainer>
            <label>Categories?</label>
            <JobField type="text"></JobField>
        </JobFieldContainer>
        <JobButton>→</JobButton>
  </JobFormContainer>;
};

export default JobForm;
