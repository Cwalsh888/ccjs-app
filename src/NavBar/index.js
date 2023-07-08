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
        <NavButton active={pathName === '/'} to="/">Today</NavButton>
        <NavButton active={isHistoryPage} to="/historical">Past Data</NavButton>
        <NavButton active={pathName === '/funfacts'} to="/funfacts">More Data</NavButton>
        <NavButton active={pathName === '/about'} to="/about">About</NavButton>
      </NavRow>
    </NavigationBox>
  );
};

export default NavBar;
