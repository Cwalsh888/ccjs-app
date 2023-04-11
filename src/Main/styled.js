import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  /* border: 5px solid red; */
  background-color: #c3bfb5;
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 75%;
  text-align: center;
  /* border: 5px solid cyan; */
  overflow-y: auto;
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
    padding-top: .5em;
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
  height: 15%;
  margin: auto;
  /* border: 5px solid yellow; */
`;

export const NavRow = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  visibility: ${props => props.hidden ? 'hidden' : 'visible'}; 
`;

export const NavButton = styled.button`
  width: 25%;
  background-color: #9C83BF;
  /* border: 5px solid orange; */
`;