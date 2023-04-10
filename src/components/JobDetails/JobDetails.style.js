import styled from "styled-components";

export const JobDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JobDetailsInnerContainer = styled.div`
  margin-top: 1rem;
  width: 75%;
  color: white;

  display: grid;
  grid-template-columns: 1.5fr 1fr;

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const JobDetailsContent = styled.div`
  border: 1px solid #1a1e27;
  background-color: #1a1e27;
  border-radius: 5px;
`;

export const DetailHeaderContainer = styled.div`
  width: 100%;
`;

export const DetailHeader = styled.div`
  padding: 25px;
  border-bottom: 0.01em solid rgba(129, 129, 129, 0.15);
`;

export const DetailTitle = styled.h2`
  font-weight: bold;
`;

export const DetailCompany = styled.p`
  font-size: 18px;
`;

export const AboutCompany = styled.div`
  margin-top: 15px;
`;

export const CompanyContent = styled.div`
  display: grid;
  padding: 25px;
`;

export const CompanyInformationsContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CompanyInformation = styled.div``;

export const InformationProperty = styled.div``;

export const InformationValue = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export const CompanyTitle = styled.h2``;

export const CompanyDescription = styled.div`
  text-align: justify;
`;

export const OtherJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const OtherJobsTitle = styled.h3`
  font-size: 20px;
`;
export const OtherJobsName = styled.div`
  margin-bottom: 10px;
`;

export const OtherJobItem = styled.div`
  cursor: pointer;
  border-bottom: 1px solid rgba(129, 129, 129, 0.15);
`;
