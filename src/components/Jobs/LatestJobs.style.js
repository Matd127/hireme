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

  &:hover{
    border: 1px solid rgb(236, 53, 67);
    transition: all 1000ms ease-out;
  }
`;

export const LatestJobsItemContent = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; 

  @media (max-width: 900px) {
    padding: 1rem;
    text-align: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const LatestJobsJob = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LatestJobsBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Keywords = styled.div`
  padding: 20px;
  background-color: #222631;
`;
