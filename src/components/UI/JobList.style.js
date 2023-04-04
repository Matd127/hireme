import styled from "styled-components";


export const JobItem = styled.div`
  margin-top: 2rem;
  color: white;
  width: 100%;
  background-color: #1a1e27;
  border: 1px solid rgba(129, 129, 129, 0.25);
  border-radius: 1px;

  &:hover {
    border: 1px solid rgba(236, 53, 67, 0.5);
    transition: all 1000ms ease-out;
  }
`;

export const JobContent = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  .job-location {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px;
  }

  @media (max-width: 900px) {
    padding: 1rem;
    text-align: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const JobInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  .job-name {
    font-size: 24px;
  }

  .job-company {
    margin-top: 8px;
    font-size: 20px;
    color: rgb(236, 53, 67);
  }

  .job-salary {
    margin-top: 5px;
    font-size: 18px;
  }
`;

export const JobActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const JobKeywords = styled.div`
  padding: 20px;
  background-color: #222631;
  text-align: left;
`;
//Koniec