import { JobsHeroWrapper } from "./JobsHeroStyle";
import Navigation from "../../Common/Navigation/Navigation";
import { HeroTitle } from "../../JobPosting/JobPostingHero/JobPostingHeroStyles";
const JobsHero = () => {
  return (
    <JobsHeroWrapper>
      <Navigation />
      <HeroTitle>Browse jobs</HeroTitle>
    </JobsHeroWrapper>
  );
};

export default JobsHero;
