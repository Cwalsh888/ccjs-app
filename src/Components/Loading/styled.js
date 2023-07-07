import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #613898;
    border-color: #613898 transparent #613898 transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;
