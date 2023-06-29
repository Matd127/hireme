import styled from "styled-components";
import { DefaultButton } from "../../UI/ButtonStyle";
import { media } from "../../UI/mediaQueries";

export const SearchFormWrapper = styled.div`
  margin-top: 2rem;
  border: 1px solid #dee2e6;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  color: #333;
`;

export const JobSearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));

  ${media.large`
  grid-template-columns: repeat(1, 1fr);
  `}
`;

export const AdvancedMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  padding: 1rem;
  margin-right: 1rem;
`;

export const JobSearchButton = styled(DefaultButton)`
  padding: 1rem;
  margin-left: 1rem;
`;

export const AdvancedAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    margin-left: 5px;
  }
`;