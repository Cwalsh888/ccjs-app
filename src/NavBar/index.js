import { useState, useEffect } from "react";
import { useSearchParams, useLocation, useMatch } from 'react-router-dom'

import {
  NavigationBox,
  NavRow,
  SideMenu,
  NavButton,
} from "./styled";

const NavBar = () => {
  // eslint-disable-next-line
  const INITIAL_DAYS_SHOWN = 60;
  const [searchParams, setSearchParams] = useSearchParams();
  const [days, setDays] = useState(INITIAL_DAYS_SHOWN);
  const pathName = useLocation().pathname;
  const isHistoryPage = pathName === '/historical';

  useEffect(() => {
    if (isHistoryPage) {
      if (searchParams.get('days')) {
        setDays(parseInt(searchParams.get('days')));
      } else {
        setSearchParams({days: days});
      }
    }
    // eslint-disable-next-line
  }, [days, isHistoryPage])

  const addDays = (num) => {
    setDays(days + num);
  }

  const resetDays = () => {
    setDays(INITIAL_DAYS_SHOWN);
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
        <NavButton $active={useMatch('/')} to="/">Today</NavButton>
        <NavButton $active={useMatch('/historical')} to="/historical">Past Data</NavButton>
        <NavButton $active={useMatch('/funfacts')} to="/funfacts">More Data</NavButton>
        <NavButton $active={useMatch('/about')} to="/about">About</NavButton>
      </NavRow>
    </NavigationBox>
  );
};

export default NavBar;
