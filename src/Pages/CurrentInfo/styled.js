import styled from 'styled-components';

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 50%;
  border: 10px solid blue;
`;

export const Card = styled.div`
  width: 40%;
  border: 5px solid ${props => props.satisfied ? 'green' : 'red'};
  &:hover {
    background-color: lightblue;
  }
`;
