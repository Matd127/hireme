import React from "react";
import { HeroSubTitle } from "./HeroStyles";
import HeroSearchForm from "./HeroSearchForm";
import bg from "../../../assets/background.jpeg";
import HeroSection from "../../../layout/HeroSection/HeroSection";

export default function Hero() {
  return (
    <HeroSection title="Browse Jobs!" bg={bg}>
      <HeroSubTitle>Find Jobs, Employment & Career Opportunities</HeroSubTitle>
      <HeroSearchForm />
    </HeroSection>
  );
}
