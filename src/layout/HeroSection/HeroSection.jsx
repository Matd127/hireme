import Navigation from "../Navigation/Navigation";
import { InnerWrapper } from "../../utils/styles/WrapperStyle";
import { HeroSectionTitle, HeroSectionWrapper } from "./HeroSectionStyles";

const HeroSection = (props) => {
  return (
    <HeroSectionWrapper bg={props.bg}>
      <Navigation />
      <InnerWrapper>
        <HeroSectionTitle>{props.title}</HeroSectionTitle>
        {props.children}
      </InnerWrapper>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
