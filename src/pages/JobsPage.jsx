import JobSearchForm from "../components/Jobs/JobSearchForm/JobSearchForm";
import FeatruedJobs from "../components/Home/FeaturedJobs/FeatutredJobs";
import HeroSection from "../components/Common/HeroSection/HeroSection";
import bg from "../assets/search-background.jpg";

const JobsPage = () => {
  return (
    <>
      <HeroSection bg={bg} title="Browse jobs" />
      <JobSearchForm />
      <FeatruedJobs />
    </>
  );
};
export default JobsPage;
