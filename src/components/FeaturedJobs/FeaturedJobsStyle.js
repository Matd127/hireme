import styled from "styled-components";
import { DefaultButton } from "../UI/ButtonStyle";
import { InnerWrapper } from "../UI/WrapperStyle";
import { media } from "../UI/mediaQueries";

export const FeaturedJobsInnerWrapper = styled(InnerWrapper)`
  margin-bottom: 30px;
`;

export const FeaturedJobsTile = styled.h2`
  color: #dddddd;
  font-size: 40px;
  text-align: center;
`;

export const JobItem = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 200px;
  border-bottom: 1px solid rgba(222, 226, 230, 0.5);
  color: rgba(221, 221, 221, 0.85);

  ${media.medium`
  grid-template-columns: 1fr;
  `}
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JobItemWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${media.xsmall`
  flex-direction: column;
  `}
`;

export const Logo = styled.div`
  width: 80px;
  background-color: aqua;

  ${media.xsmall`
    min-height: 80px;
  `}
`;

export const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;

  ${media.xsmall`
    margin: 0.5rem 0 0 0;
  `}
`;

export const JobDescription = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-weight: 400;
`;

export const JobTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
export const ApplyButton = styled(DefaultButton)`
  margin: 1rem;
  padding: 10px;
  width: 100%;

  ${media.medium`
    margin: 0;
  `}
`;

export const CompantyDetail = styled.div`
  margin-bottom: 5px;
`;

export const JobType = styled.div`
  display: inline-block;
  font-size: 16px;
  padding: 5px;
  background-color: ${(props) =>
    props.time === "full" ? "#198754" : "#194587"};
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 18px;
`;
