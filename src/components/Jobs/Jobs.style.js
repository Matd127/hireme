import styled, { css } from "styled-components";

export const InputCss = css`
  border: 1px solid #1a1e27;
  background-color: #1a1e27;
  border-radius: 10px;

  outline: 0;
  color: white;
  padding-left: 20px;

  &:focus {
    outline: 0;
    border: 1px solid rgb(236, 53, 67);
  }
`;

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
    ${InputCss}
    width: 95%;
    height: 50px;
  }

  select {
    ${InputCss}
    width: 100%;
  }

  margin-bottom: 5px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  span {
    text-decoration: none;
    color: white;
    padding: 15px;

    &:visited {
      text-decoration: none;
    }
  }
`;
