import styled, { keyframes } from "styled-components";

const ballSize = "10px";
const ballColor = "rgb(51,51,51)";
const animationDuration = "1s";

export const beatAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(0.6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100px;
`;

export const Ball = styled.div`
  width: ${ballSize};
  height: ${ballSize};
  background-color: ${ballColor};
  border-radius: 50%;
  margin: 0 3px;
  opacity: 0;
  transform: scale(0);
  animation: ${beatAnimation} ${animationDuration} infinite;
`;