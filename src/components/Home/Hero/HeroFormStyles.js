import styled from "styled-components";
import { media } from "../../UI/mediaQueries";
import { DefaultButton } from "../../UI/styles/ButtonStyle";


export const HeroFormWrapper = styled.div`
  margin: 3.2rem 0 10rem 0;
  display: grid;
  grid-template-columns: 1fr 150px;

  ${media.large`
  grid-template-columns: 1fr;
  `}
`;

export const HeroForm = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;

export const InputsWrapper = styled.form`
  padding: 1.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;

  ${media.large`
  grid-template-columns: 1fr;
  padding: 0;
  `}
`;

export const JobInput = styled.input`
  padding: 1.6rem 3.2rem;
  font-size: 1.6rem;
  background: transparent;
  border: none;
  outline: none;
  color: #ddd;

  ${media.large`
    padding: 2.4rem;
  `}

`
export const LocationInput = styled(JobInput)`
  border-left: 1px solid #ddd;

  ${media.large`
    border: none;
    border-top: 1px solid #ddd;
  `}
`

export const HeroButton = styled(DefaultButton)`
  ${media.large`
    padding: 1.6rem;
  `}
`
