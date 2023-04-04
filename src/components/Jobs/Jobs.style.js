import styled from "styled-components";

export const JobsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const JobsInnerContainer = styled.div`
  width: 75%;
  color: white;
  text-align: center;
  display: grid;
  
`;

export const SearchForm = styled.div`
  width: 100%;
`;

export const SearchFormItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  grid-gap: 1rem;
  justify-items: center;

  input[type="text"] {
    border: 1px solid #1a1e27;
    background-color: #1a1e27;
    border-radius: 10px;
    height: 50px;
    width: 95%;
    outline: 0;
    color: white;
    padding-left: 20px;

    &:focus {
      outline: 0;
      border: 1px solid rgb(236, 53, 67);
    }
  }

  margin-bottom: 5px;
`;

export const JobsPagination = styled.div``;
