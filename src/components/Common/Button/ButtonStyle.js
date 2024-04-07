import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background-color: #4398d4;
  color: #fff;
  border: none;
  font-weight: 500;
  font-size: 18px !important;
  padding: ${(props) => props.padding || 0};

  &:hover {
    background-color: #4398d4;
    cursor: pointer;
  }
`;
