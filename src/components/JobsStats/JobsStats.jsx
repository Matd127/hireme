import { Wrapper } from "../UI/WrapperStyle";
import { IconWrapper, JobsStatsInnerWrapper, Type } from "./JobsStatsStyle";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { Count } from "./JobsStatsStyle";

const JobsStats = () => {
  return (
    <Wrapper theme="dark">
      <JobsStatsInnerWrapper>
        <IconWrapper>
          <BsFileText color="#4398d4" size={100} />
          <Count>125 </Count>
          <Type>Jobs posted</Type>
        </IconWrapper>

        <IconWrapper>
          <BsFillBriefcaseFill color="#4398d4" size={100} />
          <Count>666 </Count>
          <Type>Companies</Type>
        </IconWrapper>
        <IconWrapper>
          <BsGrid color="#4398d4" size={100} />
          <Count>999 </Count>
          <Type>Categories</Type>
        </IconWrapper>
      </JobsStatsInnerWrapper>
    </Wrapper>
  );
};

export default JobsStats;
