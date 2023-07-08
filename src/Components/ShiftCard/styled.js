import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  height: 100%;
  font-size: 1.5em;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.satisfied ? "#b5db82" : "#e57070")};
  border: 2px solid black;
  border-radius: 1em;

  @media (max-width: 425px) {
    font-size: 1.1em;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  padding: 0 1em;
  border-right: 1.5px solid black;
`;

export const RightSide = styled.div`
  width: 50%;
  padding: 0 1em;
`;
