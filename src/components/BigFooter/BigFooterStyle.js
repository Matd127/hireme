import { InnerWrapper } from "../UI/WrapperStyle";
import styled from "styled-components";
import { media } from "../UI/mediaQueries";

export const FooterInnerWrapper = styled(InnerWrapper)`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  ${media.large`
  grid-template-columns: repeat(2, 1fr);
  `}

  ${media.xsmall`
  grid-template-columns: repeat(1, 1fr);
  `}
`;

export const FooterItem = styled.div`
  padding: 0 1rem 0 1rem;
`;

export const FooterTitle = styled.h3`
  font-size: 30px;
`;

export const FooterDescription = styled.p`
  color: rgba(221, 221, 221, 0.85);
  font-size: 15px;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  color: rgba(221, 221, 221, 0.85);
`;

export const FooterListItem = styled.li`
  margin-top: 1rem;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    color: rgba(67, 152, 212, 1);
  }
`;
