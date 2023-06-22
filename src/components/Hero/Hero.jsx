import React from "react";
import Navigation from "../Navigation/Navigation";
import { HeroSubTitle, HeroTitle, HeroWrapper } from "./HeroStyles";
import { InnerWrapper } from "../UI/WrapperStyle";
import HeroSearchForm from "./HeroSearchForm";
import TrendingRanking from "./TrendingRanking";

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <Navigation />
        <InnerWrapper>
          <HeroTitle>Browse Jobs!</HeroTitle>
          <HeroSubTitle>
            Find Jobs, Employment & Career Opportunities
          </HeroSubTitle>
          <HeroSearchForm />
          <TrendingRanking/>
        </InnerWrapper>
      </HeroWrapper>
    </>
  );
};
export default Hero;
