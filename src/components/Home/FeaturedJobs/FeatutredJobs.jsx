import { Suspense, useState, useEffect } from "react";
import JobItemLazy from "./JobItemLazy";
import Loader from "../../Loader/Loader";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { SectionTitle } from "../../Common/SectionWrapper/SectionWrapperStyle";
import { useSelector } from "react-redux";
import { ErrorMessage } from "./FeaturedJobsStyle";

const FeatruedJobs = () => {
  const [animate, setAnimate] = useState(false);

  const { jobsList, error } = useSelector((state) => state.jobs);

  const { ref: jobsRef, inView: jobsAreVisible } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (jobsAreVisible) {
      setAnimate(true);
    }
  }, [jobsAreVisible]);

  return (
    <SectionWrapper theme="dark">
      <SectionTitle theme="dark" ref={jobsRef}>
        Discover Featured Job Opportunites
      </SectionTitle>
      <Suspense fallback={<Loader />}>
        {error && <ErrorMessage>Jobs were not loaded due to an error.</ErrorMessage>}
        {animate && jobsList && <JobItemLazy jobs={jobsList.slice(0, 6)} />}
      </Suspense>
    </SectionWrapper>
  );
};

export default FeatruedJobs;
