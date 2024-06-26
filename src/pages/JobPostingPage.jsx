import PostingForm from "../components/JobPosting/PostingForm/PostingForm";
import BigFooter from "../layout/BigFooter/BigFooter";
import SmallFooter from "../layout/SmallFooter/SmallFooter";
import HeroSection from "../layout/HeroSection/HeroSection";
import bg from "../assets/posting.jpg";
import { useEffect } from "react";

const JobPostingPage = () => {
  const title = "Post a job";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection bg={bg} title={title} />
      <PostingForm />
      <BigFooter />
      <SmallFooter />
    </>
  );
};

export default JobPostingPage;
