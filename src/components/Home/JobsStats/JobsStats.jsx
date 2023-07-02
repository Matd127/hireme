import { IconWrapper, JobsStatsGrid, Type } from "./JobsStatsStyle";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { Count } from "./JobsStatsStyle";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountAnimation from "./CountAnimation";
import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";

const JobsStats = () => {
  const [animate, setAnimate] = useState(false);
  const { ref: jobsStatsRef, inView: featuredCategoriesAreVisible } = useInView(
    {
      threshold: 0.1,
    }
  );

  useEffect(() => {
    if (featuredCategoriesAreVisible) {
      setAnimate(true);
    }
  }, [featuredCategoriesAreVisible, animate]);

  return (
    <SectionWrapper theme="dark">
      <JobsStatsGrid ref={jobsStatsRef}>
        <IconWrapper>
          <BsFileText color="#4398d4" size={100} />
          {animate ? <CountAnimation targetCount={125} /> : <Count>0</Count>}
          <Type>Jobs posted</Type>
        </IconWrapper>

        <IconWrapper>
          <BsFillBriefcaseFill color="#4398d4" size={100} />
          {animate ? <CountAnimation targetCount={666} /> : <Count>0</Count>}
          <Type>Companies</Type>
        </IconWrapper>
        <IconWrapper>
          <BsGrid color="#4398d4" size={100} />
          {animate ? <CountAnimation targetCount={999} /> : <Count>0</Count>}
          <Type>Categories</Type>
        </IconWrapper>
      </JobsStatsGrid>
    </SectionWrapper>
  );
};

export default JobsStats;
