import JobSearchForm from "../components/Jobs/JobSearchForm/JobSearchForm";
import HeroSection from "../components/Common/HeroSection/HeroSection";
import bg from "../assets/search-background.jpg";
import JobList from "../components/Jobs/JobList/JobList";
import BigFooter from "../components/Common/BigFooter/BigFooter";
import SmallFooter from "../components/Common/SmallFooter/SmallFooter";
import JobSubscription from "../components/Jobs/JobSubscription/JobSubscription";

const JobsPage = () => {
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
