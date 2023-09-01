import HeroSection from "../components/Common/HeroSection/HeroSection";
import JobDetails from "../components/JobDetails/JobDetails";
import { useEffect } from "react";
import { getJobs } from "../redux/jobs-slice";
import { getCategories } from "../redux/categories-slice";
import { useDispatch } from "react-redux";
import bg from "../assets/details.jpg";
import SmallFooter from "../components/Common/SmallFooter/SmallFooter";
import BigFooter from "../components/Common/BigFooter/BigFooter";

const JobDetailsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      dispatch(getJobs());
      dispatch(getCategories());
    }
    fetchData();
  }, [dispatch]);

  const title = "Job Details";
  return (
    <>
      <HeroSection bg={bg} title={title}>
      </HeroSection>
      <JobDetails></JobDetails>
      <BigFooter />
      <SmallFooter />
    </>
  );
};

export default JobDetailsPage;
