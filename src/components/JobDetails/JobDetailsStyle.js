import styled from "styled-components";
import { media } from "../UI/mediaQueries";
import { DefaultButton } from "../UI/styles/ButtonStyle";

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  ${media.large`
   grid-template-columns: 1fr;
  `}
`;

export const RoleOverview = styled.div`
  padding: 0 1rem;
  display: grid;
`;

export const RoleCardWrapper = styled.div`
  display: flex;

  ${media.medium`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
`;

export const LogoWrapper = styled.div`
  width: 10rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RoleTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: rgb(51, 51, 51);
`;

export const RoleTextGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.medium`
  flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
`;

export const RoleText = styled.p`
  font-weight: 500;
  margin: 0.5rem 0.5rem 0.5rem 0;
`;

export const RoleDetails = styled.div`
  margin: 0 2rem;
  display: grid;
`;

export const DetailsTitle = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: rgb(51, 51, 51);
  margin-top: 2rem;
`;

export const DetailsDescription = styled.div`
  margin: 1.5rem 2rem 0 0;
`;

export const RequirementsList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const Requirement = styled.li`
  &::before {
    content: "✓";
    margin-right: 1rem;
  }
`;

export const FullDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1.5rem 2rem 0 0;

  ${media.medium`
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  `}
`;

export const DetailInfo = styled.p`
  padding: 1rem 0;
`;

export const DetailName = styled.span`
  font-weight: 600;
`;

export const AdditionalInformationWrapper = styled.div`
  text-align: center;
  ${media.large`
  margin-top: 5rem;
  `}
`;

export const AdditionalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: rgb(51, 51, 51);
  margin: 1rem;
`;

export const LocationMapPlaceholder = styled.div`
  margin-top: 1rem;
  min-height: 50%;
  width: 100%;

  background-color: aquamarine;
`;

export const KeywordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dee2e6;
  text-align: center;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem rgba(0, 0, 0, 0.06);
  border-radius: 0.3rem;
  color: #333;
  padding: 1rem;
`;

export const KeywordsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Keyword = styled.div`
  margin: 0.5rem 1rem;
  padding: 1rem;
  border: 1px dashed rgba(51, 51, 51, 0.35);
`;

export const ApplyButton = styled(DefaultButton)`
  margin-top: 2rem;
  padding: 1rem;
  max-width: 25rem;

  ${media.small`
max-width: 100%
`}
`;
