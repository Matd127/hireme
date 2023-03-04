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
  color: white;
  display: flex;
  align-items: flex-start;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: left;
`;

export const LatestJobsItems = styled.div`
  border-radius: 2px;
`;

export const LatestJobsItem = styled.div`
  margin-top: 2rem;
  color: white;
  width: 100%;
  background-color: #1a1e27;
  border: 1px solid rgba(129, 129, 129, 0.35);
`;

export const LatestJobsItemContent = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LatestJobsJob = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LatestJobsBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Keywords = styled.div`
  padding: 20px;
  background-color: #222631;
`;