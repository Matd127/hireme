import JobSearchForm from "../components/Jobs/JobSearchForm/JobSearchForm";
import HeroSection from "../components/Common/HeroSection/HeroSection";
import bg from "../assets/search-background.jpg";
import JobList from "../components/Jobs/JobList/JobList";
import BigFooter from "../components/Common/BigFooter/BigFooter";
import SmallFooter from "../components/Common/SmallFooter/SmallFooter";
import JobSubscription from "../components/Jobs/JobSubscription/JobSubscription";
import { useEffect } from "react";
import { getJobs } from "../redux/jobs-slice";
import { getCategories } from "../redux/categories-slice";
import { useDispatch } from "react-redux";

const JobsPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchData() {
      dispatch(getJobs());
      dispatch(getCategories());
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <HeroSection bg={bg} title="Browse jobs" />
      <JobSearchForm />
      <JobList />
      <JobSubscription />
      <BigFooter />
      <SmallFooter />
    </>
  );
};
export default JobsPage;
