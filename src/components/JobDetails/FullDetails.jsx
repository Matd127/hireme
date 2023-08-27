import { Link } from "react-router-dom";
import { FullDetailsGrid, DetailName, DetailInfo } from "./JobDetailsStyle";

const FullDetails = (props) => {
  const checkValidUrl = (url) => {
    if (url && !url.includes("https://")) {
      return "https://" + url;
    }
    return url;
  };

  return (
    <FullDetailsGrid>
      <DetailInfo>
        <DetailName>Company:</DetailName> {props.job.companyName}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Min-Experience:</DetailName> {props.job.experience}{" "}
        {props.job.experience === 1 ? " Year" : " Years"}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Job Type:</DetailName> {props.job.jobType}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Salary:</DetailName> {"$" + props.job.salary}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Email:</DetailName> {props.job.companyEmail}
      </DetailInfo>
      <DetailInfo>
        <DetailName>Website:</DetailName>{" "}
        <Link to={checkValidUrl(props.job.companyWebsite)}>
          {props.job.companyWebsite}
        </Link>
      </DetailInfo>
    </FullDetailsGrid>
  );
};

export default FullDetails;
