import { Wrapper } from "../UI/WrapperStyle";
import { IconWrapper, JobsStatsInnerWrapper, Type } from "./JobsStatsStyle";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import CountAnimation from "./CountAnimation";

const JobsStats = () => {
  return (
    <Wrapper theme="dark">
      <JobsStatsInnerWrapper>
        <IconWrapper>
          <BsFileText color="#4398d4" size={100} />
          <CountAnimation targetCount={125} />
          <Type>Jobs posted</Type>
        </IconWrapper>

        <IconWrapper>
          <BsFillBriefcaseFill color="#4398d4" size={100} />
          <CountAnimation targetCount={666} />
          <Type>Companies</Type>
        </IconWrapper>
        <IconWrapper>
          <BsGrid color="#4398d4" size={100} />
          <CountAnimation targetCount={999} />
          <Type>Categories</Type>
        </IconWrapper>
      </JobsStatsInnerWrapper>
    </Wrapper>
  );
};

export default JobsStats;