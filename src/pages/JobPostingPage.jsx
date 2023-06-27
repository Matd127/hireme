import JobPostingHero from "../components/JobPosting/JobPostingHero/JobPostingHero";
import PostingForm from "../components/JobPosting/PostingForm/PostingForm";
import BigFooter from "../components/Common/BigFooter/BigFooter";
import SmallFooter from "../components/Common/SmallFooter/SmallFooter";

const JobPostingPage = () => {
  return (
    <>
      <JobPostingHero />
      <PostingForm />
      <BigFooter />
      <SmallFooter />
    </>
  );
};

export default JobPostingPage;
