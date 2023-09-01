import { Link } from "react-router-dom";
import { FullDetailsGrid, DetailName, DetailInfo } from "./JobDetailsStyle";

const FullDetails = ({ job }) => {
  const createValidUrl = (url) => {
    return url && !url.includes("https://") ? `https://${url}` : url;
  };

  return (
    <FullDetailsGrid>
      <DetailInfo>
        <DetailName>Company:</DetailName> {job.companyName}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Min-Experience:</DetailName> {job.experience}{" "}
        {job.experience === 1 ? " Year" : " Years"}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Job Type:</DetailName> {job.jobType}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Salary:</DetailName> ${job.salary}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Email:</DetailName> {job.companyEmail}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Website:</DetailName>{" "}
        <Link to={createValidUrl(job.companyWebsite)}>
          {job.companyWebsite}
        </Link>
      </DetailInfo>
    </FullDetailsGrid>
  );
};

export default FullDetails;
