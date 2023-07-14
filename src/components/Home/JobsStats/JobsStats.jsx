import React, { useState, useEffect } from "react";
import { IconWrapper, JobsStatsGrid, Type } from "./JobsStatsStyle";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { Count } from "./JobsStatsStyle";
import { useInView } from "react-intersection-observer";
import CountAnimation from "./CountAnimation";
import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { useSelector } from "react-redux";

const JobsStats = React.memo(() => {
  const { jobsList } = useSelector(state => state.jobs)
  const { categoriesList } = useSelector(state => state.categories)
  const companiesCount = [...new Set(jobsList.map(job => job.companyName))].length;

  const [animate, setAnimate] = useState(false);
  const { ref: jobsStatsRef, inView: featuredCategoriesAreVisible } = useInView(
    {
      threshold: 0.1,
      triggerOnce: true
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
          {animate ? <CountAnimation targetCount={jobsList.length} /> : <Count>0</Count>}
          <Type>Jobs posted</Type>
        </IconWrapper>

        <IconWrapper>
          <BsFillBriefcaseFill color="#4398d4" size={100} />
          {animate ? <CountAnimation targetCount={companiesCount} /> : <Count>0</Count>}
          <Type>Companies</Type>
        </IconWrapper>
        <IconWrapper>
          <BsGrid color="#4398d4" size={100} />
          {animate ? <CountAnimation targetCount={categoriesList.length} /> : <Count>0</Count>}
          <Type>Categories</Type>
        </IconWrapper>
      </JobsStatsGrid>
    </SectionWrapper>
  );
});

export default JobsStats;
