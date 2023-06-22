import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme === "dark" ? "#13171E" : "#ffffff")};
  padding-bottom: 30px;
`;

export const InnerWrapper = styled.div`
  width: 75%;
`;

