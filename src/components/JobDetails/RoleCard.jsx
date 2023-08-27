import {
  RoleDetails,
  RoleText,
  RoleTextGrid,
  LogoWrapper,
  RoleTitle,
  RoleCardWrapper,
} from "./JobDetailsStyle";
import placeholderImg from "../../assets/placeholder.png";
import { BsGeoAlt, BsGrid, BsFillBriefcaseFill } from "react-icons/bs";

const RoleCard = (props) => {
  return (
    <RoleCardWrapper>
      <LogoWrapper>
        <img src={props.job.logo ? props.job.logo : placeholderImg} alt="job" />
      </LogoWrapper>

      <RoleDetails>
        <RoleTitle>{props.job.title}</RoleTitle>

        <RoleTextGrid>
          <RoleText>
            <BsGeoAlt /> {props.job.location}
          </RoleText>
          <RoleText>
            <BsGrid /> {props.job.jobCategory}
          </RoleText>
          <RoleText>
            <BsFillBriefcaseFill /> {props.job.jobType}
          </RoleText>
        </RoleTextGrid>

        <div>Posted: {props.job.addDate}</div>
      </RoleDetails>
    </RoleCardWrapper>
  );
};
export default RoleCard;
