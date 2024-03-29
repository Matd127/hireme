import React from "react";
import { HeroSubTitle } from "./HeroStyles";
import HeroSearchForm from "./HeroSearchForm";
import bg from "../../../assets/background.jpeg";
import HeroSection from "../../Common/HeroSection/HeroSection";

const Hero = () => {
  return (
    <HeroSection title='Browse Jobs!' bg={bg}>
      <HeroSubTitle>Find Jobs, Employment & Career Opportunities</HeroSubTitle>
      <HeroSearchForm />
    </HeroSection>
  );
};
export default Hero;
