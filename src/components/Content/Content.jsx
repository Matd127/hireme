import React from "react";
import Navbar from "../Navbar/Navbar";
import { ContendData, ContendDescription, ContentContainer, ContentTitle} from "./Content.style";
import FeaturedCategories from "./Categories";
import JobForm from "./JobForm";

const Content = () => {
  return (
    <ContentContainer>
      <Navbar />
      <ContendData>
        <ContentTitle>Browse Jobs!</ContentTitle>
        <ContendDescription>Find Jobs, Employment & Career Opportunities</ContendDescription>
        <JobForm />
      </ContendData>
      <FeaturedCategories/>
    </ContentContainer>
  );
};
export default Content;
