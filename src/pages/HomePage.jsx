import FeaturedCategories from "../components/FeaturedCategories/FeaturedCategories";
import FeatruedJobs from "../components/FeaturedJobs/FeatutredJobs";
import BigFooter from "../components/BigFooter/BigFooter";
import Hero from "../components/Hero/Hero";
import JobPosting from "../components/JobPosting/JobPosting";
import JobsStats from "../components/JobsStats/JobsStats";
import QuickTips from "../components/QuickTips/QuickTips";
import SmallFooter from "../components/SmallFooter/SmallFooter";

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
