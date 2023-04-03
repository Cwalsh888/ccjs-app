import styled from 'styled-components';

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
  justify-content: space-around;
  width: 100%;
  height: 85%;
  /* border: 10px solid blue; */
`;

export const CardRow = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.satisfied ? 'green' : 'red'};
`;

export const Card = styled.div`
  width: 50%;
`;

export const TimeCard = styled.div`
  width: 50%;
`;
