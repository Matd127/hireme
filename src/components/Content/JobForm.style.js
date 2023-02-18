import styled from "styled-components";

//770 - 825px fix responsive
//993 - 1088 fix responsive

export const JobFormContainer = styled.div`
  color: white;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const JobFieldContainer = styled.div`
  display: flex;
  padding: 25px;
  margin: 10px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.48);
  border-radius: 8px;
  text-align: left;
  font-size: 15px;

  @media (max-width: 992px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 50vw;
  }
`;

export const JobField = styled.input`
  margin-top: 10px;
  background-color: transparent;
  color: white;
  font-size: 15px;
  border: none;
  width: 250px;

  &:focus {
    outline: none;
  }

  @media (max-width: 992px) {
    width: 180px;
  }
`;

export const JobButton = styled.button`
  border: none;
  font-weight: bold;
  font-size: 20px;
  background-color: rgb(236, 53, 67);
  color: white;
  border-radius: 8px;
  padding: 35px;
  cursor: pointer;
`;
