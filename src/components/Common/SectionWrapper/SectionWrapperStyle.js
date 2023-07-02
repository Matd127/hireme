import styled from "styled-components";

export const SectionTitle = styled.h2`
  color: ${props => (props.theme === "dark" ? "#ddd" : "#2f2f2f")};
  font-size: 40px;
  text-align: center;
`;