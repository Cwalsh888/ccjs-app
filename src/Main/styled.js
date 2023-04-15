import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #c3bfb5;
  /* border: 5px solid red; */
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 75%;
  text-align: center;
  overflow-y: auto;
  /* border: 5px solid cyan; */
`

export const Title = styled.h1`
  height: 9%;
  font-size: 3em;
  text-align: center;
  color: #613898;
  margin: 0;
  /* border: 3px solid orange; */

  @media (max-width: 425px) {
    font-size: 2em;
    height: 6%;
  }
`;

export const NavigationBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 10%;
  margin: auto;
  /* border: 5px solid yellow; */
`;

export const NavRow = styled.div`
  display: flex;
  height: 75%;
  justify-content: center;
`;

export const SideMenu = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
`;

export const NavButton = styled.button`
  width: 25%;
  background-color: #9C83BF;
  /* border: 5px solid orange; */
`;