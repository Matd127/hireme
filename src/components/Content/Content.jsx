import React from "react";
import Navbar from "../Navbar/Navbar";
import { ContendData, ContentContainer, ContentTitle} from "./Content.style";
import JobForm from "./JobForm";

const Content = () => {
  return (
    <ContentContainer>
      <Navbar />
      <ContendData>
        <ContentTitle>FIND YOUR JOB TODAY!</ContentTitle>
        <JobForm />
      </ContendData>

    </ContentContainer>
  );
};
export default Content;
