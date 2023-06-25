import FeaturedCategories from "../components/Home/FeaturedCategories/FeaturedCategories";
import FeatruedJobs from "../components/Home/FeaturedJobs/FeatutredJobs";
import Hero from "../components/Home/Hero/Hero";
import JobPosting from "../components/Home/JobPosting/JobPosting";
import JobsStats from '../components/Home/JobsStats/JobsStats'
import QuickTips from "../components/Home/QuickTips/QuickTips"
import BigFooter from "../components/Common/BigFooter/BigFooter"
import SmallFooter from "../components/Common/SmallFooter/SmallFooter";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeatruedJobs />
      <JobPosting />
      <JobsStats />
      <QuickTips />
      <BigFooter />
      <SmallFooter />
    </>
  );
};
export default HomePage;
