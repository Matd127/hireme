import { Suspense, useState, useEffect } from "react";
import { Wrapper } from "../../UI/WrapperStyle";
import {
  FeaturedJobsTile,
  FeaturedJobsInnerWrapper,
} from "./FeaturedJobsStyle";
import JobItemLazy from "./JobItemLazy";
import Loader from "../../UI/Loader/Loader";
import { useInView } from "react-intersection-observer";

const FeatruedJobs = () => {
  const [animate, setAnimate] = useState(false);
  const { ref: jobsRef, inView: jobsAreVisible } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (jobsAreVisible) {
      setAnimate(true);
    }
  }, [jobsAreVisible]);

  return (
    <Wrapper theme="dark">
      <FeaturedJobsInnerWrapper ref={jobsRef}>
        <FeaturedJobsTile>Discover Featured Job Opportunites</FeaturedJobsTile>
        <Suspense fallback={<Loader />}>{animate && <JobItemLazy />}</Suspense>
      </FeaturedJobsInnerWrapper>
    </Wrapper>
  );
};

export default FeatruedJobs;
