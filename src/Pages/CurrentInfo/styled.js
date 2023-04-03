import styled from 'styled-components';

export const CardBox = styled.div`
  width: 100%;
  height: 85%;
  border: 10px solid blue;
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

export const Card = styled.div`
  width: 50%;
  border: 5px solid ${props => props.satisfied ? 'green' : 'red'};
  &:hover {
    background-color: lightblue;
  }
`;

export const TimeCard = styled.div`
  width: 50%;
`;
