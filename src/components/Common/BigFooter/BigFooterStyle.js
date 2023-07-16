import { Link } from "react-router-dom";
import { InnerWrapper } from "../../UI/styles/WrapperStyle";
import styled from "styled-components";

export const FooterInnerWrapper = styled(InnerWrapper)`
  padding-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2.4rem;
`;

export const FooterItem = styled.div`
  padding: 0 1rem 0 1rem;
`;

export const FooterTitle = styled.h3`
  font-size: 3rem;
  margin: 3rem 0;
`;

export const FooterDescription = styled.p`
  color: rgba(221, 221, 221, 0.85);
  line-height: 1.7;
  font-size: 1.5rem;
`;

export const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  color: rgba(221, 221, 221, 0.85);
`;

export const FooterListItem = styled.li`
  margin-top: 1.6rem;
  font-size: 1.5rem;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    color: rgba(67, 152, 212, 1);
  }
`;
