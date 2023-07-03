import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from 'react-router-dom'

import {
  NavigationBox,
  NavRow,
  SideMenu,
  NavButton,
} from "./styled";

const NavBar = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const [days, setDays] = useState(60);
  const isHistoryPage = useLocation().pathname.startsWith("/historical");

  useEffect(() => {
    if (isHistoryPage) {
      setSearchParams({days: days});
    }
    // eslint-disable-next-line
  }, [days, isHistoryPage])

  const addDays = (num) => {
    setDays(days + num);
  }

  const resetDays = () => {
    setDays(60);
  }

  return (
    <NavigationBox>
      <SideMenu hidden={!isHistoryPage}>
        <NavButton onClick={() => resetDays()}>Reset Table</NavButton>
        <NavButton onClick={() => addDays(7)}>Add 1 week</NavButton>
        <NavButton onClick={() => addDays(180)}>
          Add 6 months
        </NavButton>
      </SideMenu>
      <NavRow>
        <NavButton to="/">Today</NavButton>
        <NavButton to="/historical">Past Data</NavButton>
        <NavButton to="/funfacts">More Data</NavButton>
        <NavButton to="/about">About</NavButton>
      </NavRow>
    </NavigationBox>
  );
};

export default NavBar;
