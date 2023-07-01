import PostingForm from "../components/JobPosting/PostingForm/PostingForm";
import BigFooter from "../components/Common/BigFooter/BigFooter";
import SmallFooter from "../components/Common/SmallFooter/SmallFooter";
import HeroSection from "../components/Common/HeroSection/HeroSection";
import bg from '../assets/posting.jpg'
const JobPostingPage = () => {
  return (
    <>
      <HeroSection bg={bg} title="Post a job" />
      <PostingForm />
      <BigFooter />
      <SmallFooter />
    </>
  );
};

export default JobPostingPage;
