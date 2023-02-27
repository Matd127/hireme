import styled from "styled-components";

export const LatestContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const LatestJobContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const LatestTitle = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 2rem;
  text-align: left;
  border-bottom: 2px solid red;
`;

export const LatestJobsItems = styled.div`
  margin-top: 2rem;
  border: 1px solid rgba(129, 129, 129, 0.35);
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const LatestJobsItem = styled.div`
  width: 100%;
  background-color: #48596a;
  border-bottom: 1px solid rgba(129, 129, 129, 0.35);
  border-right: 1px solid rgba(129, 129, 129, 0.35);
`;
