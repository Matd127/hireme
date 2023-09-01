import styled from "styled-components";

export const PaginationWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  font-size: 2rem;
  padding: 0 1rem;
`;

export const NavigationNumber = styled.span`
  display: inline-block;

  &:hover {
    color: #4398d4;
    cursor: pointer;
    transition: all 0.3s;
  }

  ${(props) =>
    props.isActive &&
    `
    color:  #4398d4;
  `}
`;

export const NavigationArrow = styled.span`
  display: inline-block;
  width: 3rem;
  line-height: 3rem;
  border-radius: 50%;
  text-align: center;
  font-size: 2.4rem;
  border: 2px solid #4398d4;

  &:hover {
    color: #4398d4;
    cursor: pointer;
    transition: all 0.3s;
  }
`;
