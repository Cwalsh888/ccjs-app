import { useState } from "react";

import {
  NavigationBox,
  NavRow,
  SideMenu,
  NavButton,
} from "./styled";

const NavBar = () => {
  let [days, setDays] = useState(7);

  return (
    <NavigationBox>
      {/* <SideMenu hidden={page !== "historical"}> */}
      {/* Have to overhaul how these buttons work. Potentially edit the url with makes the call go off again */}
      <SideMenu hidden={true}>
        <NavButton onClick={() => setDays(7)}>Reset Table</NavButton>
        <NavButton onClick={() => setDays(days + 7)}>Add 1 week</NavButton>
        <NavButton onClick={() => setDays(days + 182)}>
          Add 6 months
        </NavButton>
      </SideMenu>
      <NavRow>
        <NavButton to="/">
          Today's Info
        </NavButton>
        <NavButton to="/historical">Past Data</NavButton>
        <NavButton to="/funfacts">More Data</NavButton>
        <NavButton to="/about">About</NavButton>
      </NavRow>
    </NavigationBox>
  );
};

export default NavBar;
