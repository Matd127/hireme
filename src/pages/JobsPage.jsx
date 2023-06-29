import JobSearchForm from "../components/Jobs/JobSearchForm/JobSearchForm";
import JobsHero from "../components/Jobs/JobsHero/JobsHero";
import FeatruedJobs from '../components/Home/FeaturedJobs/FeatutredJobs'

const JobsPage = () => {
  return (
    <>
      <JobsHero/>
      <JobSearchForm />
      <FeatruedJobs />
    </>
  );
};
export default JobsPage;
