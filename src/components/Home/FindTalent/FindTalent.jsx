import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { FindTalentText, FindTalentActions } from "./FindTalentStyle";
import { SectionTitle } from "../../Common/SectionWrapper/SectionWrapperStyle";
import Button from "../../Common/Button/Button";
import { Link } from "react-router-dom";

const FindTalent = () => {
  return (
    <SectionWrapper theme="light" title="Post Your Job and Find Top Talent!">
      <SectionTitle>Post Your Job and Find Top Talent!</SectionTitle>
      <FindTalentText>
        Ready to hire the best candidates for your team? Our job posting
        platform makes it easy for employers to reach a wide pool of talented
        individuals. Simply create a compelling job listing that highlights the
        responsibilities, requirements, and benefits of the position, and
        connect with qualified applicants who align with your company's goals.
        Join us today and find your next superstar employee!
      </FindTalentText>
      <FindTalentActions>
        <Link to="/post">
          <Button padding="1rem 2rem">Get started</Button>
        </Link>
      </FindTalentActions>
    </SectionWrapper>
  );
};

export default FindTalent;
