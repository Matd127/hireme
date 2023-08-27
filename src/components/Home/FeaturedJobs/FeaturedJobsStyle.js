import styled from "styled-components";
import { DefaultButton } from "../../UI/styles/ButtonStyle";
import { media } from "../../UI/mediaQueries";

export const JobItem = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 180px;
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
  width: 8rem;

  ${media.xsmall`
    min-height: 8rem;
  `}

  img {
    width: 100%;
    height: 100%
  }
`;

export const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;

  ${media.xsmall`
    margin: 0.5rem 0 0 0;
  `}
`;

export const JobDescription = styled.div`
  margin: 1rem 0 1rem 0;
  font-weight: 400;
  font-size: 1.6rem;
`;

export const JobTitle = styled.div`
  font-weight: 600;
  font-size: 2.2rem;
`;
export const ApplyButton = styled(DefaultButton)`
  margin: 1.3rem;
  padding: 1rem;
  width: 100%;

  ${media.medium`
    margin: 0;
  `}
`;

export const CompantyDetail = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const JobType = styled.div`
  display: inline-block;
  font-size: 1.6rem;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.time === "full" ? "#198754" : "#194587"};
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 1.6rem;
`;
