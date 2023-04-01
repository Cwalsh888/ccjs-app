import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border: 5px solid red; 
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  border: 10px solid blue;
  padding-bottom: 10%;
`;

export const FlexItems = styled.div`
  flex: 1 0 14%;
  border: 1px solid purple;
  background-color: ${props => props.fullDay ? 'green' : 'red'};
`;
