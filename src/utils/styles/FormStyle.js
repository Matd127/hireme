import { css } from "styled-components";

export const FormWrapper = css`
  margin-top: 3.2rem;
  border: 1px solid #dee2e6;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  color: #333;
`;

export const FormGrid = css`
  padding: 0 1rem;
  margin: 1rem 1rem 0 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
`