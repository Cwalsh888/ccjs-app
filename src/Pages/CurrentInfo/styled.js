import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: space-around;
  width: 100%;
  height: 85%;
  /* border: 10px solid blue; */
`;

export const CardRow = styled.div`
  display: flex;
  height: 100%;
  font-size: 1.5em;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.satisfied ? "#6F9838" : "#E43131")};
  border: 2px solid black;
  border-radius: 1em;

  @media (max-width: 425px) {
    font-size: 1.1em;
  }
`;

export const Card = styled.div`
  width: 50%;
  padding: 0 1em;
`;

export const TimeCard = styled.div`
  width: 50%;
  border-right: 1.5px solid black;
`;

export const Loading = styled.div`
  font-size: 4em;
`;
