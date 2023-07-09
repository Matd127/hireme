import { Suspense, useState, useEffect } from "react";
import JobItemLazy from "./JobItemLazy";
import Loader from "../../UI/Loader/Loader";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { SectionTitle } from "../../Common/SectionWrapper/SectionWrapperStyle";

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
    <SectionWrapper theme="dark">
      <SectionTitle theme="dark" ref={jobsRef}>
        Discover Featured Job Opportunites
      </SectionTitle>
      <Suspense fallback={<Loader />}>
        {animate && <JobItemLazy />}</Suspense>
    </SectionWrapper>
  );
};

export default FeatruedJobs;
