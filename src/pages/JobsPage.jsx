import JobSearchForm from "../components/Jobs/JobSearchForm/JobSearchForm";
import HeroSection from "../layout/HeroSection/HeroSection";
import bg from "../assets/search-background.jpg";
import JobList from "../components/Jobs/JobList/JobList";
import SmallFooter from "../layout/SmallFooter/SmallFooter";
import BigFooter from "../layout/BigFooter/BigFooter";
import JobSubscription from "../components/Jobs/JobSubscription/JobSubscription";
import { useEffect } from "react";
import { getJobs } from "../redux/jobs-slice";
import { getCategories } from "../redux/categories-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const JobsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(getJobs());
      dispatch(getCategories());
    }
    fetchData();
  }, [dispatch]);

  const { loading, error } = useSelector((state) => state.jobs);

  return (
    <>
      <HeroSection bg={bg} title="Browse jobs" />
      <JobSearchForm />
      {loading && <p>Loading...</p>}
      {error && <p>Could not load jobs.</p>}
      <JobList />
      <JobSubscription />
      <BigFooter />
      <SmallFooter />
    </>
  );
};
export default JobsPage;
