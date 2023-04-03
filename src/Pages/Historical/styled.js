import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  /* border: 10px solid blue; */
  padding-bottom: 10%;
`;

export const FlexItems = styled.div`
  flex: 1 0 14%;
  border: 1px solid purple;
  background-color: ${props => props.color};
`;

export const Loading = styled.div`
  font-size: 4em;
`