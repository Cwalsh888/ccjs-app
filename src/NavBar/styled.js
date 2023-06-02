import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  font-size: 1.2em;
  color: black;
  text-decoration: none;
  background-color: #9c83bf;
  border: 2px outset #736b5e;
  border-radius: 1em;

  @media (max-width: 425px) {
    font-size: .9em;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`;


