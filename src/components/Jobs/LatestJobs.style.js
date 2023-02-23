import styled from "styled-components";

export const LatestJobContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LatestJobsItems = styled.div`
  border: 1px solid rgba(129, 129, 129, 0.35);
  border-radius: 2px;
  width: 65%;
  box-shadow: 10px 10px 30px gray;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const LatestTitle = styled.div`
  padding: 3rem;
  font-size: 3rem;
  text-align: center;
`;

export const LatestJobsItem = styled.div`
  width: 100%;
  background-color: #48596a;
  border-bottom: 1px solid rgba(129, 129, 129, 0.35);
  border-right: 1px solid rgba(129, 129, 129, 0.35);
`;
