import Navigation from "../../Common/Navigation/Navigation";
import { PostingHeroWrapper, HeroTitle} from "./JobPostingHeroStyles";

const JobPostingHero = () => {
  return <PostingHeroWrapper>
    <Navigation />
    <HeroTitle>Post a job</HeroTitle>
  </PostingHeroWrapper>;
};

export default JobPostingHero;
