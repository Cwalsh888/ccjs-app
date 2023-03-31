import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border: 5px solid red; 
`;

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
  border: 5px solid purple;
`;
