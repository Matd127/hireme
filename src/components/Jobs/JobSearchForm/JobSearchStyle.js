import styled from "styled-components";
import { DefaultButton } from "../../../utils/styles/ButtonStyle";
import { media } from "../../../utils/mediaQueries";
import { FormGrid, FormWrapper } from "../../../utils/styles/FormStyle";

export const SearchFormWrapper = styled.form`
  ${FormWrapper}
  margin: 0;
`;

export const JobSearchGrid = styled.div`
  ${FormGrid}

  ${media.large`
  grid-template-columns: repeat(1, 100%);
  `}
`;

export const AdvancedMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  padding: 1.8rem;
  margin-right: 1rem;
`;

export const JobSearchButton = styled(DefaultButton)`
  padding: 1.5rem;
  margin-left: 2rem;
`;

export const AdvancedAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;


  svg {
    margin-left: 0.5rem;
  }
`;
