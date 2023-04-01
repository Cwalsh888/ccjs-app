import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border: 5px solid red; 
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 95%;
  border: 5px solid cyan;
`

export const NavigationBox = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 5%;
  border: 5px solid yellow;
`;

export const NavButton = styled.button`
  width: 25%;
  border: 5px solid orange;
`;