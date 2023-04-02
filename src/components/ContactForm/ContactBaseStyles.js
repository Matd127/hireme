import styled, { css } from "styled-components";

export const baseContainer = css`
  width: 100%;
  display: grid;
  justify-items: center;
  color: white;
  text-align: center;
`

export const baseContent = css`
  margin: 1rem;
  padding: 1rem;
  min-height: 300px;
  min-width: 30vw;
  background-color: #1a1e27;
  border: 1px solid rgba(129, 129, 129, 0.25);
  border-radius: 8px;
`

export const baseInputStyles = css`
  margin-top: 5px;
  background-color: transparent;
  border: 1px solid rgba(129, 129, 129, 0.30);
  border-radius: 3px;
  color: white;
  font-size: 16px;

  &:focus{
    outline: none;
    border: 1px solid rgba(129, 129, 129, 0.80);
  }
`
export const SubmitButton = styled.button`
  border: none;
  font-weight: bold;
  font-size: 20px;
  background-color: rgb(236, 53, 67);
  color: white;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;