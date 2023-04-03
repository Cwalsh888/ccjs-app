import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  /* border: 5px solid red; */
  background-color: #c3bfb5;
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 82%;
  text-align: center;
  /* border: 5px solid cyan; */
  overflow-y: auto;
`

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #613898;
  margin: 0;
  padding-top: .5em;
`;

export const NavigationBox = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 90%;
  height: 5%;
  border: 5px solid yellow;
`;

export const NavButton = styled.button`
  width: 25%;
  border: 5px solid orange;
`;